'use strict';

import {expect} from 'chai';
import compareme from '../src/index';

describe('boolean', function() {
  it('strictly', async function() {
    expect(compareme.is({a: true}).strictly.like({a: false})).to.be.true;
    expect(compareme.is({a: true}).strictly.like({a: true})).to.be.true;
    expect(compareme.is({a: false}).strictly.like({a: true})).to.be.true;
    expect(compareme.is({a: true}).strictly.like({a: 'true'})).to.be.false;
  });
});
