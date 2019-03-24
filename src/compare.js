'use strict';

import whatsme from 'whatsme';
import {emptyComparator, mergeResult} from './empty.comparator';
import arrayComparator from './array.comparator';
import objectComparator from './object.comparator';

const withIndex = (index, obj) => whatsme.isDefined(index)
  ? {...obj, index}
  : obj;

const getDifference = (type1, type2, index) => type1 === type2
  ? []
  : [withIndex(index, {first: type1, second: type2})];

const getResult = (type1, type2, index) => ({
  success: type1 === type2,
  differences: getDifference(type1, type2, index),
});

const compare = (obj1, obj2, options = {}, index) => {
  const type1 = whatsme.whats(obj1);
  const type2 = whatsme.whats(obj2);

  return mergeResult(
      getResult(type1, type2, index),
      getComparator(type1)(options, index).compare(obj1, obj2)
  );
};

const comparators = {
  array: arrayComparator(compare),
  object: objectComparator(compare),
};

const getComparator = (type) => comparators[type] || emptyComparator;

export default compare;
