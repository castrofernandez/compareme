'use strict';

const emptyResult = () => ({
  success: true,
  differences: [],
});

const emptyComparator = () => {
  return {
    compare: () => emptyResult(),
  };
};

const mergeResult = (res1, res2) => {
  return Object.assign(res1, {
    success: res1.success && res2.success,
    differences: [...res1.differences, ...res2.differences],
  });
};

export {
  emptyResult,
  emptyComparator,
  mergeResult,
};
