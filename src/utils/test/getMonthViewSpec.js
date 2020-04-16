import getMonthView from '../getMonthView';
import { parse, format } from 'date-fns';

import { legacyParse, convertTokens } from '@date-fns/upgrade/v2';

describe('[utils] getMonthView', () => {
  it('Sunday is the first day of the week.', () => {
    const weeks = getMonthView(parse(legacyParse('2017-11-30')));
    assert.equal(format(legacyParse(weeks[0]), convertTokens('YYYY-MM-DD')), '2017-11-26');
  });

  it('Monday is the first day of the week.', () => {
    const weeks = getMonthView(parse(legacyParse('2017-11-30')), true);
    assert.equal(format(legacyParse(weeks[0]), convertTokens('YYYY-MM-DD')), '2017-11-27');
  });
});
