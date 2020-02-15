'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('function', function() {
  it('strictly', async function() {
    expect(compareme.is({a: () => {}})
        .strictly.like({a: function() {}})).to.be.true;

    expect(compareme.is({a: function() {}})
        .strictly.like({a: () => {}})).to.be.true;

    expect(compareme.is({a: () => {}})
        .strictly.like({a: () => {}})).to.be.true;

    expect(compareme.is({a: function() {}})
        .strictly.like({a: {}})).to.be.false;
  });
});
