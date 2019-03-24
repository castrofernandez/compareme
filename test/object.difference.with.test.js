'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
  it('get.difference.with', async function() {
    expect(compareme.get({a: 1}).difference.with({a: 2})).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1}).deeply.difference.with({a: 2})).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1}).deeply.difference.with({a: 2, b: 3})).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1}).deeply.difference.with({a: '1'})).to.deep.equal({
      success: false,
      differences: [{
        index: 'a',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1, b: 2}).deeply.difference.with({a: 2})).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.strictly.difference.with', async function() {
    expect(compareme.get({a: 1}).strictly.difference.with({a: 2, b: 2})).to.deep.equal({
      success: false,
      differences: [{
        index: 'b',
        first: 'undefined',
        second: 'number',
      }],
    });
  });

  it('get.strictly.difference.with', async function() {
    expect(compareme.get({a: 0}).strictly.difference.with({a: 's'})).to.deep.equal({
      success: false,
      differences: [{
        index: 'a',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1, b: 2}).deeply.difference.with({a: 2, b: 3})).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get({a: 1, b: {c: 2}}).deeply.difference.with({a: 2, b: {c: 's'}})).to.deep.equal({
      success: false,
      differences: [{
        index: 'b.c',
        first: 'number',
        second: 'string',
      }],
    });
  });
});
