'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('array', function() {
  it('not deeply', async function() {
    expect(compareme.is([23]).like([34])).to.be.true;
    expect(compareme.is([10]).like([10, 20])).to.be.true;
    expect(compareme.is([10]).like(['Something'])).to.be.true;
  });

  it('deeply', async function() {
    expect(compareme.is([23]).deeply.like([34])).to.be.true;
    expect(compareme.is([10]).deeply.like([10, 20])).to.be.true;
    expect(compareme.is([10]).deeply.like(['Something'])).to.be.false;
    expect(compareme.is([10, 20]).deeply.like([10])).to.be.true;
  });

  it('strictly', async function() {
    expect(compareme.is([23]).strictly.like([34])).to.be.true;
    expect(compareme.is([10]).strictly.like([10, 20])).to.be.false;
    expect(compareme.is([10]).strictly.like(['Something'])).to.be.false;
    expect(compareme.is([10, 20]).strictly.like([10])).to.be.false;
    expect(compareme.is([10, 20]).strictly.like([10, 10])).to.be.true;
  });
});
