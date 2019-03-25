'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('object', function() {
  it('get.missing.elements.strictly.with', async function() {
    expect(compareme.get({a: 1, c: {d: 2}})
        .missing.elements.strictly.with({a: 2, b: 's'}))
        .to.deep.equal([{
          index: 'c',
          first: 'object',
          second: 'undefined',
        }]);
  });

  it('get.missing.elements.strictly.and.deeply.with', async function() {
    expect(compareme.get({a: 1, b: {c: 2}})
        .missing.elements.strictly.and.deeply.with({a: 2, b: {d: 's'}}))
        .to.deep.equal([{
          index: 'b.c',
          first: 'number',
          second: 'undefined',
        }]);
  });
});
