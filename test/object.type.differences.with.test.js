'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
    it('get.type.differences.strictly.with', async function() {
        expect(compareme.get({a: 1, b: {c: 2}})
            .type.differences.strictly.with({a: 2, b: 's'}))
            .to.deep.equal([{
                index: 'b',
                first: 'object',
                second: 'string',
            }]);
    });

    it('get.type.differences.strictly.and.deeply.with', async function() {
        expect(compareme.get({a: 1, b: {c: 2}})
            .type.differences.strictly.and.deeply.with({a: 2, b: {c: 's'}}))
            .to.deep.equal([{
                index: 'b.c',
                first: 'number',
                second: 'string',
            }]);
    });

    it('get.type.differences.strictly.and.deeply.with (object and function)', async function() {
        expect(compareme.get({a: {}, b: () => {}})
            .type.differences.strictly.and.deeply.with({}))
            .to.deep.equal([]);
    });
});
