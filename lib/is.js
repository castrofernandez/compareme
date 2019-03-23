'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compare = _interopRequireDefault(require("./compare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defineProperty = function defineProperty(instance, name, getter) {
  Object.defineProperty(instance, name, {
    get: getter,
    configurable: false
  });
};

var defineProperties = function defineProperties(instance, properties) {
  Object.entries(properties).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        getter = _ref2[1];

    defineProperty(instance, name, getter);
  });
};

var createInstance = function createInstance(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$comparison = options.comparison,
      comparison = _options$comparison === void 0 ? true : _options$comparison;
  var instance = {
    like: function like(obj) {
      return comparison === (0, _compare.default)(value, obj, options).success;
    }
  };
  defineProperties(instance, {
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
    }
  });
  return instance;
};

var is = function is(obj) {
  return createInstance(obj);
};

var _default = is;
exports.default = _default;