'use strict';

import {emptyResult as empty, mergeResult as merge} from './empty.comparator';

const objectComparator = (comparator) => (options, level, index) => {
  return {
    compare: (o1, o2) => {
      const o1Keys = Object.keys(o1);

      const o2Keys = Object.keys(o2);

      const ind = (key) => index ? `${index}.${key}` : key.toString();

      const compKey = (key) => {
        return comparator(o1[key], o2[key], options, level + 1, ind(key));
      };

      const compareByKeys = (keys) => {
        return keys.reduce((result, key) => {
          return merge(result, compKey(key));
        }, empty());
      };

      const getCommonKeys = () => o1Keys.filter((key) => o2Keys.includes(key));

      const checkCommon = () => compareByKeys(getCommonKeys());

      const doStrict = ({strict = false}) => strict ? compareStrict() : empty();

      const getO1Remains = () => o1Keys.filter((key) => !o2Keys.includes(key));

      const getO2Remains = () => o2Keys.filter((key) => !o1Keys.includes(key));

      const compareO1Remains = () => compareByKeys(getO1Remains());

      const compareO2Remains = () => compareByKeys(getO2Remains());

      const compareStrict = () => merge(compareO1Remains(), compareO2Remains());

      const mustCheckDeep = ({deep = false, strict = false}) => deep || strict;

      const checkDeep = () => merge(checkCommon(), doStrict(options));

      return mustCheckDeep(options) ? checkDeep() : empty();
    },
  };
};

export default objectComparator;
