'use strict';

import whatsme from 'whatsme';

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

export {
    emptyResult,
    emptyComparator,
    mergeResult,
    getResult,
};
