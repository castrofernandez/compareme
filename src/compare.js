'use strict';

import whatsme from 'whatsme';

const emptyComparator = () => ({
  success: true,
  types: {
    first: [],
    second: [],
  },
});

const arrayComparator = (array1, array2, options) => {
  const {deep = false, strict = false} = options;
  const result = emptyComparator();

  if (!deep && !strict) {
    return result;
  }

  const length = Math.min(array1.length, array2.length);

  for (let i = 0; i < length; i++) {
    const {success, types} = compare(array1[i], array2[i], options);
    result.success = result.success && success;
    result.types.first = [...result.types.first, ...types.first];
    result.types.second = [...result.types.second, ...types.second];
  }

  if (!strict) {
    return result;
  }

  for (let i = length; i < array1.length; i++) {
    const type = whatsme.whats(array1[i]);
    result.success = false;
    result.types.first = [...result.types.first, type];
    result.types.second = [...result.types.second, undefined];
  }

  for (let i = array1.length; i < array2.length; i++) {
    const type = whatsme.whats(array2[i]);
    result.success = false;
    result.types.first = [...result.types.first, undefined];
    result.types.second = [...result.types.second, type];
  }

  return result;
};

const comparators = {
  array: arrayComparator,
  object: (obj1, obj2, options) => {},
};

const getComparator = (type) => comparators[type] || emptyComparator;

const mergeResult = (res1, res2) => ({
  success: res1.success && res2.success,
  types: {
    first: [...res1.types.first, ...res2.types.first],
    second: [...res1.types.second, ...res2.types.second],
  },
});

const compare = (obj1, obj2, options = {}) => {
  const type1 = whatsme.whats(obj1);
  const type2 = whatsme.whats(obj2);

  const result = {
    success: type1 === type2,
    types: {
      first: [type1],
      second: [type2],
    },
  };

  return mergeResult(result, getComparator(type1)(obj1, obj2, options));
};

export default compare;
