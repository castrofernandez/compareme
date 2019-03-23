'use strict';

import compare from './compare';

const defineProperty = (instance, name, getter) => {
  Object.defineProperty(instance, name, {
    get: getter,
    configurable: false,
  });
};

const defineProperties = (instance, properties) => {
  Object.entries(properties).forEach(([name, getter]) => {
    defineProperty(instance, name, getter);
  });
};

const createInstance = (value, options = {}) => {
  const {comparison = true} = options;

  const instance = {
    like: (obj) => comparison === compare(value, obj, options).success,
  };

  defineProperties(instance, {
    not: () => createInstance(value, {...options, comparison: !comparison}),
    deeply: () => createInstance(value, {...options, deep: true}),
    strictly: () => createInstance(value, {...options, strict: true}),
  });

  return instance;
};

const is = (obj) => createInstance(obj);

export default is;
