'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeResult = exports.emptyComparator = exports.emptyResult = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var emptyResult = function emptyResult() {
  return {
    success: true,
    differences: []
  };
};

exports.emptyResult = emptyResult;

var emptyComparator = function emptyComparator() {
  return {
    compare: function compare() {
      return emptyResult();
    }
  };
};

exports.emptyComparator = emptyComparator;

var mergeResult = function mergeResult(res1, res2) {
  return Object.assign(res1, {
    success: res1.success && res2.success,
    differences: [].concat(_toConsumableArray(res1.differences), _toConsumableArray(res2.differences))
  });
};

exports.mergeResult = mergeResult;