'use strict';

import compare from './compare';
import {defineProperties} from './properties';

const createInstance = (value, options = {}) => {
  const instance = {
    with: (obj) => compare(value, obj, options),
  };

  defineProperties(instance, {
    differences: () => instance,
    deeply: () => createInstance(value, {...options, deep: true}),
    strictly: () => createInstance(value, {...options, strict: true}),
  });

  return instance;
};

const get = (obj) => createInstance(obj);

export default get;
