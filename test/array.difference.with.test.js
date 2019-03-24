'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('array', function() {
  it('get.difference.with', async function() {
    expect(compareme.get([23]).difference.with([34])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([23]).deeply.difference.with([34])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([10]).deeply.difference.with([10, 20])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([10]).deeply.difference.with(['Something'])).to.deep.equal({
      success: false,
      differences: [{
        index: '0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([10, 20]).deeply.difference.with([10])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.strictly.difference.with', async function() {
    expect(compareme.get([10]).strictly.difference.with([10, 20])).to.deep.equal({
      success: false,
      differences: [{
        index: '1',
        first: 'undefined',
        second: 'number',
      }],
    });
  });

  it('get.strictly.difference.with', async function() {
    expect(compareme.get([10]).strictly.difference.with(['Something'])).to.deep.equal({
      success: false,
      differences: [{
        index: '0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([10, 20]).deeply.difference.with([5, 10])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.difference.with', async function() {
    expect(compareme.get([10, [20]]).deeply.difference.with([5, ['10']])).to.deep.equal({
      success: false,
      differences: [{
        index: '1.0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.strictly.with', async function() {
    expect(compareme.get([10, [20]]).strictly.difference.with([5, ['10']])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.strictly.difference.with', async function() {
    expect(compareme.get([10, [20]]).deeply.strictly.difference.with([5, ['10']])).to.deep.equal({
      success: false,
      differences: [{
        index: '1.0',
        first: 'number',
        second: 'string',
      }],
    });
  });
});
