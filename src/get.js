'use strict';

import compare from './compare';
import {defineProperties} from './properties';

const UNDEFINED = 'undefined';

const createInstance = (value, options = {}) => {
  const instance = {
    with: (obj) => decorate(compare(value, obj, options), options),
  };

  defineProperties(instance, {
    differences: () => instance,
    elements: () => instance,
    and: () => instance,
    type: () => createInstance(value, {...options, type: true}),
    missing: () => createInstance(value, {...options, missing: true}),
    unexpected: () => createInstance(value, {...options, unexpected: true}),
    deeply: () => createInstance(value, {...options, deep: true}),
    strictly: () => createInstance(value, {...options, strict: true}),
  });

  return instance;
};

const decorators = [
  {
    should: ({missing = false}) => missing,
    decorate: (res) => {
      return res.differences.filter((d) => d.first !== UNDEFINED
        && d.second === UNDEFINED);
    },
  },
  {
    should: ({type = false}) => type,
    decorate: (res) => res.differences.filter((d) => d.first !== UNDEFINED
      && d.second !== UNDEFINED),
  },
  {
    should: ({unexpected = false}) => unexpected,
    decorate: (res) => res.differences.filter((d) => d.first === UNDEFINED),
  },
  {
    should: () => true,
    decorate: (res) => res,
  },
];

const findDecorator = (options) => {
  return decorators.find((decorator) => decorator.should(options)).decorate;
};

const decorate = (result, options) => {
  return findDecorator(options)(result);
};

const get = (obj) => createInstance(obj);

export default get;
