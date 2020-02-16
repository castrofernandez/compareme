'use strict';

import whatsme from 'whatsme';
import {emptyResult as empty, mergeResult as merge, getResult} from './empty.comparator';

const range = (start, end) => Array(start > end ? 0 : end - start)
    .fill().map((_, index) => start + index);

const getPos = (a, pos) => pos < a.length ? a[pos] : undefined;

const ind = (index, i) => index ? `${index}.${i}` : i.toString();

const getMinLength = (a1, a2) => Math.min(a1.length, a2.length);

const mustCheckDeep = ({deep = false, strict = false}) => deep || strict;

const areBothArrays = (a1, a2) => whatsme.isArray(a1) && whatsme.isArray(a2);

const arrayComparator = (comparator) => (options, level, index) => {
    const comparePos = (a1, a2, i) => {
        return comparator(getPos(a1, i), getPos(a2, i), options, level + 1, ind(index, i));
    };

    const compareSection = (a1, a2, start, end) => {
        return range(start, end).reduce((result, i) => {
            return merge(result, comparePos(a1, a2, i));
        }, empty());
    };

    const checkCommon = (a1, a2) => compareSection(a1, a2, 0, getMinLength(a1, a2));

    const compareA1Remains = (a1, a2) => compareSection(a1, a2, getMinLength(a1, a2), a1.length);

    const compareA2Remains = (a1, a2) => compareSection(a1, a2, a1.length, a2.length);

    const compareStrict = (a1, a2) => merge(compareA1Remains(a1, a2), compareA2Remains(a1, a2));

    const doStrict = (a1, a2, {strict = false}) => strict ? compareStrict(a1, a2) : empty();

    const checkDeep = (a1, a2) => merge(checkCommon(a1, a2), doStrict(a1, a2, options));

    return {
        compare: (a1, a2) => {
            return areBothArrays(a1, a2) && mustCheckDeep(options)
                ? checkDeep(a1, a2)
                : getResult(whatsme.whats(a1), whatsme.whats(a2), index);
        },
    };
};

export default arrayComparator;
