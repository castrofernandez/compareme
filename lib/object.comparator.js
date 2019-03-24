'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _empty = require("./empty.comparator");

var objectComparator = function objectComparator(comparator) {
  return function (options, index) {
    return {
      compare: function compare(o1, o2) {
        var o1Keys = Object.keys(o1);
        var o2Keys = Object.keys(o2);

        var ind = function ind(key) {
          return index ? "".concat(index, ".").concat(key) : key.toString();
        };

        var compKey = function compKey(key) {
          return comparator(o1[key], o2[key], options, ind(key));
        };

        var compareByKeys = function compareByKeys(keys) {
          return keys.reduce(function (result, key) {
            return (0, _empty.mergeResult)(result, compKey(key));
          }, (0, _empty.emptyResult)());
        };

        var getCommonKeys = function getCommonKeys() {
          return o1Keys.filter(function (key) {
            return o2Keys.includes(key);
          });
        };

        var checkCommon = function checkCommon() {
          return compareByKeys(getCommonKeys());
        };

        var doStrict = function doStrict(_ref) {
          var _ref$strict = _ref.strict,
              strict = _ref$strict === void 0 ? false : _ref$strict;
          return strict ? compareStrict() : (0, _empty.emptyResult)();
        };

        var getO1Remains = function getO1Remains() {
          return o1Keys.filter(function (key) {
            return !o2Keys.includes(key);
          });
        };

        var getO2Remains = function getO2Remains() {
          return o2Keys.filter(function (key) {
            return !o1Keys.includes(key);
          });
        };

        var compareO1Remains = function compareO1Remains() {
          return compareByKeys(getO1Remains());
        };

        var compareO2Remains = function compareO2Remains() {
          return compareByKeys(getO2Remains());
        };

        var compareStrict = function compareStrict() {
          return (0, _empty.mergeResult)(compareO1Remains(), compareO2Remains());
        };

        var mustCheckDeep = function mustCheckDeep(_ref2) {
          var _ref2$deep = _ref2.deep,
              deep = _ref2$deep === void 0 ? false : _ref2$deep,
              _ref2$strict = _ref2.strict,
              strict = _ref2$strict === void 0 ? false : _ref2$strict;
          return deep || strict;
        };

        var checkDeep = function checkDeep() {
          return (0, _empty.mergeResult)(checkCommon(), doStrict(options));
        };

        return mustCheckDeep(options) ? checkDeep() : (0, _empty.emptyResult)();
      }
    };
  };
};

var _default = objectComparator;
exports.default = _default;