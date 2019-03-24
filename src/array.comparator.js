'use strict';

import {emptyResult as empty, mergeResult as merge} from './empty.comparator';

const range = (start, end) => Array(start > end ? 0 : end - start)
    .fill().map((_, index) => start + index);

const arrayComparator = (comparator) => (options, index) => {
  return {
    compare: (a1, a2) => {
      const getMinLength = () => Math.min(a1.length, a2.length);

      const getPos = (a, pos) => pos < a.length ? a[pos] : undefined;

      const getA1 = (pos) => getPos(a1, pos);

      const getA2 = (pos) => getPos(a2, pos);

      const ind = (i) => index ? `${index}.${i}` : i.toString();

      const comparePos = (i) => comparator(getA1(i), getA2(i), options, ind(i));

      const compareSection = (start, end) => {
        return range(start, end).reduce((result, i) => {
          return merge(result, comparePos(i));
        }, empty());
      };

      const checkCommon = () => compareSection(0, getMinLength());

      const doStrict = ({strict = false}) => strict ? compareStrict() : empty();

      const compareA1Remains = () => compareSection(getMinLength(), a1.length);

      const compareA2Remains = () => compareSection(a1.length, a2.length);

      const compareStrict = () => merge(compareA1Remains(), compareA2Remains());

      const mustCheckDeep = ({deep = false, strict = false}) => deep || strict;

      const checkDeep = () => merge(checkCommon(), doStrict(options));

      return mustCheckDeep(options) ? checkDeep() : empty();
    },
  };
};

export default arrayComparator;
