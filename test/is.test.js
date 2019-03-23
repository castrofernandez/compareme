'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('is', function() {
  it('is', async function() {
    expect(compareme.is(23).like(34)).to.be.true;
    expect(compareme.is(23).like(new Number(10))).to.be.true;
    expect(compareme.is('Something').like('')).to.be.true;
    expect(compareme.is(null).like(null)).to.be.true;
  });
});
