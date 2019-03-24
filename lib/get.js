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
  var instance = {
    with: function _with(obj) {
      return (0, _compare.default)(value, obj, options);
    }
  };
  (0, _properties.defineProperties)(instance, {
    differences: function differences() {
      return instance;
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
    }
  });
  return instance;
};

var get = function get(obj) {
  return createInstance(obj);
};

var _default = get;
exports.default = _default;