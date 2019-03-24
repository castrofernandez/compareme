'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _empty = require("./empty.comparator");

var range = function range(start, end) {
  return Array(start > end ? 0 : end - start).fill().map(function (_, index) {
    return start + index;
  });
};

var arrayComparator = function arrayComparator(comparator) {
  return function (options, level, index) {
    return {
      compare: function compare(a1, a2) {
        var getMinLength = function getMinLength() {
          return Math.min(a1.length, a2.length);
        };

        var getPos = function getPos(a, pos) {
          return pos < a.length ? a[pos] : undefined;
        };

        var getA1 = function getA1(pos) {
          return getPos(a1, pos);
        };

        var getA2 = function getA2(pos) {
          return getPos(a2, pos);
        };

        var ind = function ind(i) {
          return index ? "".concat(index, ".").concat(i) : i.toString();
        };

        var comparePos = function comparePos(i) {
          return comparator(getA1(i), getA2(i), options, level + 1, ind(i));
        };

        var compareSection = function compareSection(start, end) {
          return range(start, end).reduce(function (result, i) {
            return (0, _empty.mergeResult)(result, comparePos(i));
          }, (0, _empty.emptyResult)());
        };

        var checkCommon = function checkCommon() {
          return compareSection(0, getMinLength());
        };

        var doStrict = function doStrict(_ref) {
          var _ref$strict = _ref.strict,
              strict = _ref$strict === void 0 ? false : _ref$strict;
          return strict ? compareStrict() : (0, _empty.emptyResult)();
        };

        var compareA1Remains = function compareA1Remains() {
          return compareSection(getMinLength(), a1.length);
        };

        var compareA2Remains = function compareA2Remains() {
          return compareSection(a1.length, a2.length);
        };

        var compareStrict = function compareStrict() {
          return (0, _empty.mergeResult)(compareA1Remains(), compareA2Remains());
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

var _default = arrayComparator;
exports.default = _default;