'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compare = _interopRequireDefault(require("./compare"));

var _properties = require("./properties");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createInstance = function createInstance(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$comparison = options.comparison,
      comparison = _options$comparison === void 0 ? true : _options$comparison;
  var instance = {
    like: function like(obj) {
      return comparison === (0, _compare.default)(value, obj, options).success;
    }
  };
  (0, _properties.defineProperties)(instance, {
    not: function not() {
      return createInstance(value, _objectSpread({}, options, {
        comparison: !comparison
      }));
    },
    deeply: function deeply() {
      return createInstance(value, _objectSpread({}, options, {
        deep: true
      }));
    },
    strictly: function strictly() {
      return createInstance(value, _objectSpread({}, options, {
        strict: true
      }));
    },
    and: function and() {
      return instance;
    }
  });
  return instance;
};

var is = function is(obj) {
  return createInstance(obj);
};

var _default = is;
exports.default = _default;