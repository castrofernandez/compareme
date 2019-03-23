'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _whatsme = _interopRequireDefault(require("whatsme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arrayComparator = function arrayComparator(array1, array2, options) {
  var _options$deep = options.deep,
      deep = _options$deep === void 0 ? false : _options$deep,
      _options$strict = options.strict,
      strict = _options$strict === void 0 ? false : _options$strict;
  console.log('deep', deep);

  if (!deep) {
    return true;
  }

  var length = Math.min(array1.length, array2.length);
  var result = {
    success: true,
    types: []
  };

  for (var i = 0; i < length; i++) {
    var _compare = compare(array1[i], array2[i], options),
        success = _compare.success,
        types = _compare.types;

    result.success = result.success && success;
    result.types = [].concat(_toConsumableArray(result.types), _toConsumableArray(types));
  }

  console.log(strict);
  return result;
};

var comparators = {
  array: arrayComparator,
  object: function object(obj1, obj2, options) {}
};

var getComparator = function getComparator(type) {
  return comparators[type] || function () {
    return true;
  };
};

var compare = function compare(obj1, obj2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var type1 = _whatsme.default.whats(obj1);

  var type2 = _whatsme.default.whats(obj2);

  console.log('1', obj1, type1);
  console.log('2', obj2, type2);
  return {
    success: type1 === type2 && getComparator(type1)(obj1, obj2, options),
    types: [type1, type2]
  };
};

var _default = compare;
exports.default = _default;