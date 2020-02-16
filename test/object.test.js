'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
    it('not deeply', async function() {
        expect(compareme.is({a: 1}).like({a: 2})).to.be.true;
        expect(compareme.is({a: 10}).like({a: 20, b: 20})).to.be.true;
        expect(compareme.is({a: 1}).like({a: '1'})).to.be.true;
    });

    it('deeply', async function() {
        expect(compareme.is({a: 1}).deeply.like({a: 2})).to.be.true;
        expect(compareme.is({a: 1}).deeply.like({a: 1, b: 2})).to.be.true;
        expect(compareme.is({a: 1}).deeply.like({a: '1'})).to.be.false;
        expect(compareme.is({a: 1, b: 2}).deeply.like({a: 3})).to.be.true;
    });

    it('strictly', async function() {
        expect(compareme.is({a: 1}).strictly.like({a: 2})).to.be.true;
        expect(compareme.is({a: 1}).strictly.like({a: 2, b: 3})).to.be.false;
        expect(compareme.is({a: 1}).strictly.like({a: '3'})).to.be.false;
        expect(compareme.is({a: 1, b: 2}).strictly.like({a: 1})).to.be.false;
        expect(compareme.is({a: 1, b: 2}).strictly.like({a: 3, b: 4})).to.be.true;
    });

    it('undefined', () => {
        expect(compareme.is({a: 1}).deeply.like(undefined)).to.be.false;
    });

    it('not object', () => {
        expect(compareme.is({a: 1}).deeply.like(1)).to.be.false;
    });
});
