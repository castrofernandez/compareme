'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
    it('get.unexpected.elements.strictly.with', async function() {
        expect(compareme.get({a: 1, b: {c: 2}})
            .unexpected.elements.strictly.with({a: 2, c: {d: 's'}}))
            .to.deep.equal([{
                index: 'c',
                first: 'undefined',
                second: 'object',
            }]);
    });

    it('get.unexpected.elements.strictly.and.deeply.with', async function() {
        expect(compareme.get({a: 1, b: {c: 2}})
            .unexpected.elements.strictly.and.deeply.with({a: 2, b: {d: 's'}}))
            .to.deep.equal([{
                index: 'b.d',
                first: 'undefined',
                second: 'string',
            }]);
    });
});
