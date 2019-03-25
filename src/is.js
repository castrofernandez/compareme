'use strict';

import compare from './compare';
import {defineProperties} from './properties';

const createInstance = (value, options = {}) => {
  const {comparison = true} = options;

  const instance = {
    like: (obj) => comparison === compare(value, obj, options).success,
  };

  defineProperties(instance, {
    not: () => createInstance(value, {...options, comparison: !comparison}),
    deeply: () => createInstance(value, {...options, deep: true}),
    strictly: () => createInstance(value, {...options, strict: true}),
    and: () => instance,
  });

  return instance;
};

const is = (obj) => createInstance(obj);

export default is;
