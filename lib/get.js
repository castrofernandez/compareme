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

var UNDEFINED = 'undefined';

var createInstance = function createInstance(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instance = {
    with: function _with(obj) {
      return decorate((0, _compare.default)(value, obj, options), options);
    }
  };
  (0, _properties.defineProperties)(instance, {
    differences: function differences() {
      return instance;
    },
    elements: function elements() {
      return instance;
    },
    and: function and() {
      return instance;
    },
    type: function type() {
      return createInstance(value, _objectSpread({}, options, {
        type: true
      }));
    },
    missing: function missing() {
      return createInstance(value, _objectSpread({}, options, {
        missing: true
      }));
    },
    unexpected: function unexpected() {
      return createInstance(value, _objectSpread({}, options, {
        unexpected: true
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

var decorators = [{
  should: function should(_ref) {
    var _ref$missing = _ref.missing,
        missing = _ref$missing === void 0 ? false : _ref$missing;
    return missing;
  },
  decorate: function decorate(res) {
    return res.differences.filter(function (d) {
      return d.first !== UNDEFINED && d.second === UNDEFINED;
    });
  }
}, {
  should: function should(_ref2) {
    var _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? false : _ref2$type;
    return type;
  },
  decorate: function decorate(res) {
    return res.differences.filter(function (d) {
      return d.first !== UNDEFINED && d.second !== UNDEFINED;
    });
  }
}, {
  should: function should(_ref3) {
    var _ref3$unexpected = _ref3.unexpected,
        unexpected = _ref3$unexpected === void 0 ? false : _ref3$unexpected;
    return unexpected;
  },
  decorate: function decorate(res) {
    return res.differences.filter(function (d) {
      return d.first === UNDEFINED;
    });
  }
}, {
  should: function should() {
    return true;
  },
  decorate: function decorate(res) {
    return res;
  }
}];

var findDecorator = function findDecorator(options) {
  return decorators.find(function (decorator) {
    return decorator.should(options);
  }).decorate;
};

var decorate = function decorate(result, options) {
  return findDecorator(options)(result);
};

var get = function get(obj) {
  return createInstance(obj);
};

var _default = get;
exports.default = _default;