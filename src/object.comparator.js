'use strict';

import whatsme from 'whatsme';
import {emptyResult as empty, mergeResult as merge, getResult} from './empty.comparator';

const ind = (key, index) => index ? `${index}.${key}` : key.toString();

const getCommonKeys = (a, b) => a.filter((key) => b.includes(key));

const mustCheckDeep = ({deep = false, strict = false}) => deep || strict;

const getRemains = (a = [], b = []) => a.filter((key) => !b.includes(key));

const getKeys = (obj) => Object.keys(obj);

const areBothObjects = (o1, o2) => whatsme.isObject(o1) && whatsme.isObject(o2);

const objectComparator = (comparator) => (options, level, index) => {
    const compKey = (o1, o2, key) => {
        return comparator(o1[key], o2[key], options, level + 1, ind(key, index));
    };

    const compareByKeys = (o1, o2, keys) => {
        return keys.reduce((result, key) => {
            return merge(result, compKey(o1, o2, key));
        }, empty());
    };

    const checkCommon = (o1, o2) => compareByKeys(o1, o2, getCommonKeys(getKeys(o1), getKeys(o2)));

    const compareO1Remains = (o1, o2) => compareByKeys(o1, o2, getRemains(getKeys(o1), getKeys(o2)));

    const compareO2Remains = (o1, o2) => compareByKeys(o1, o2, getRemains(getKeys(o2), getKeys(o1)));

    const compareStrict = (o1, o2) => merge(compareO1Remains(o1, o2), compareO2Remains(o1, o2));

    const doStrict = (o1, o2, {strict = false}) => strict ? compareStrict(o1, o2) : empty();

    const checkDeep = (o1, o2) => merge(checkCommon(o1, o2), doStrict(o1, o2, options));

    return {
        compare: (o1, o2) => {
            return areBothObjects(o1, o2) && mustCheckDeep(options)
                ? checkDeep(o1, o2)
                : getResult(whatsme.whats(o1), whatsme.whats(o2), index);
        },
    };
};

export default objectComparator;
