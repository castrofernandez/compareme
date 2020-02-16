'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
    it('get.differences.with', async function() {
        expect(compareme.get({a: 1}).differences.with({a: 2})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1}).deeply.differences.with({a: 2})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1}).deeply.differences.with({a: 2, b: 3})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1}).deeply.differences.with({a: '1'})).to.deep.equal({
            success: false,
            differences: [{
                index: 'a',
                first: 'number',
                second: 'string',
            }],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1, b: 2}).deeply.differences.with({a: 2})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.strictly.differences.with', async function() {
        expect(compareme.get({a: 1}).strictly.differences.with({a: 2, b: 2})).to.deep.equal({
            success: false,
            differences: [{
                index: 'b',
                first: 'undefined',
                second: 'number',
            }],
        });
    });

    it('get.strictly.differences.with', async function() {
        expect(compareme.get({a: 0}).strictly.differences.with({a: 's'})).to.deep.equal({
            success: false,
            differences: [{
                index: 'a',
                first: 'number',
                second: 'string',
            }],
        });
    });

    it('get.strictly.differences.with', async function() {
        expect(compareme.get({a: 0, b: {c: 1}}).strictly.differences.with({a: 1, b: {c: 's'}})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.strictly.and.deeply.differences.with', async function() {
        expect(compareme.get({a: 0, b: {c: 1}}).strictly
            .and.deeply.differences.with({a: 1, b: {c: 's'}})).to.deep.equal({
            success: false,
            differences: [{
                index: 'b.c',
                first: 'number',
                second: 'string',
            }],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1, b: 2}).deeply.differences.with({a: 2, b: 3})).to.deep.equal({
            success: true,
            differences: [],
        });
    });

    it('get.deeply.differences.with', async function() {
        expect(compareme.get({a: 1, b: {c: 2}}).deeply.differences.with({a: 2, b: {c: 's'}})).to.deep.equal({
            success: false,
            differences: [{
                index: 'b.c',
                first: 'number',
                second: 'string',
            }],
        });
    });
});
