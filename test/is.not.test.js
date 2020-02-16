'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('is.not', function() {
    it('is.not', async function() {
        expect(compareme.is(23).not.like(34)).to.be.false;
        expect(compareme.is(23).not.like(new Number(10))).to.be.false;
        expect(compareme.is('Something').not.like('')).to.be.false;
        expect(compareme.is(null).not.like(null)).to.be.false;

        expect(compareme.is(null).not.like(undefined)).to.be.true;
        expect(compareme.is(10).not.like('10')).to.be.true;
        expect(compareme.is(new Date()).not.like({})).to.be.true;
    });

    it('is.not.not', async function() {
        expect(compareme.is(23).not.not.like(34)).to.be.true;
    });
});
