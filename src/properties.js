'use strict';

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

export {
  defineProperty,
  defineProperties,
};
