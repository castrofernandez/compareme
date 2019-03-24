'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _whatsme = _interopRequireDefault(require("whatsme"));

var _empty = require("./empty.comparator");

var _array = _interopRequireDefault(require("./array.comparator"));

var _object = _interopRequireDefault(require("./object.comparator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withIndex = function withIndex(index, obj) {
  return _whatsme.default.isDefined(index) ? _objectSpread({}, obj, {
    index: index
  }) : obj;
};

var getDifference = function getDifference(type1, type2, index) {
  return type1 === type2 ? [] : [withIndex(index, {
    first: type1,
    second: type2
  })];
};

var getResult = function getResult(type1, type2, index) {
  return {
    success: type1 === type2,
    differences: getDifference(type1, type2, index)
  };
};

var mustGoDeep = function mustGoDeep(level, _ref) {
  var _ref$deep = _ref.deep,
      deep = _ref$deep === void 0 ? false : _ref$deep;
  return deep || level === 1;
};

var compare = function compare(obj1, obj2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var index = arguments.length > 4 ? arguments[4] : undefined;

  var type1 = _whatsme.default.whats(obj1);

  var type2 = _whatsme.default.whats(obj2);

  var result = getResult(type1, type2, index);
  return mustGoDeep(level, options) ? (0, _empty.mergeResult)(result, getComparator(type1)(options, level, index).compare(obj1, obj2)) : result;
};

var comparators = {
  array: (0, _array.default)(compare),
  object: (0, _object.default)(compare)
};

var getComparator = function getComparator(type) {
  return comparators[type] || _empty.emptyComparator;
};

var _default = compare;
exports.default = _default;