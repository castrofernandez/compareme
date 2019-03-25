'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('array', function() {
  it('get.differences.with', async function() {
    expect(compareme.get([23]).differences.with([34])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([23]).deeply.differences.with([34])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([10]).deeply.differences.with([10, 20])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([10]).deeply.differences.with(['Something'])).to.deep.equal({
      success: false,
      differences: [{
        index: '0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([10, 20]).deeply.differences.with([10])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.strictly.differences.with', async function() {
    expect(compareme.get([10]).strictly.differences.with([10, 20])).to.deep.equal({
      success: false,
      differences: [{
        index: '1',
        first: 'undefined',
        second: 'number',
      }],
    });
  });

  it('get.strictly.differences.with', async function() {
    expect(compareme.get([10]).strictly.differences.with(['Something'])).to.deep.equal({
      success: false,
      differences: [{
        index: '0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([10, 20]).deeply.differences.with([5, 10])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.differences.with', async function() {
    expect(compareme.get([10, [20]]).deeply.differences.with([5, ['10']])).to.deep.equal({
      success: false,
      differences: [{
        index: '1.0',
        first: 'number',
        second: 'string',
      }],
    });
  });

  it('get.deeply.strictly.with', async function() {
    expect(compareme.get([10, [20]]).strictly.differences.with([5, ['10']])).to.deep.equal({
      success: true,
      differences: [],
    });
  });

  it('get.deeply.strictly.differences.with', async function() {
    expect(compareme.get([10, [20]]).deeply.and.strictly.differences.with([5, ['10']])).to.deep.equal({
      success: false,
      differences: [{
        index: '1.0',
        first: 'number',
        second: 'string',
      }],
    });
  });
});
