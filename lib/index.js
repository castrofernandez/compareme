/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/whatsme/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/whatsme/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isType = _interopRequireWildcard(__webpack_require__(/*! ./is.type */ "./node_modules/whatsme/lib/is.type.js"));

var isOther = _interopRequireWildcard(__webpack_require__(/*! ./is.other */ "./node_modules/whatsme/lib/is.other.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var whats = function whats(obj) {
  return geyKey(getFirstType(obj));
};
/* Aux */


var geyKey = function geyKey() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return obj.type || '';
};

var getFirstType = function getFirstType(obj) {
  return isType.validators.find(function (_ref) {
    var check = _ref.check;
    return check(obj);
  });
};

var whatsme = _objectSpread({}, isType.exposedMethods, isOther, {
  whats: whats
});

var _default = whatsme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/whatsme/lib/is.other.js":
/*!**********************************************!*\
  !*** ./node_modules/whatsme/lib/is.other.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isNotNull", {
  enumerable: true,
  get: function get() {
    return _is.isNotNull;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function get() {
    return _is.isBoolean;
  }
});
exports.isNotEmpty = exports.isEmpty = exports.isFalsy = exports.isTruthy = exports.isSomething = exports.isDefined = void 0;

var _is = __webpack_require__(/*! ./is.type */ "./node_modules/whatsme/lib/is.type.js");

var isDefined = function isDefined(obj) {
  return !(0, _is.isUndefined)(obj);
};

exports.isDefined = isDefined;

var isSomething = function isSomething(obj) {
  return (0, _is.isNotNull)(obj) && isDefined(obj);
};

exports.isSomething = isSomething;

var isTruthy = function isTruthy(obj) {
  return !isFalsy(obj);
};

exports.isTruthy = isTruthy;

var isFalsy = function isFalsy(obj) {
  return (0, _is.isFalse)(obj) || !isSomething(obj) || (0, _is.isNaN)(obj) || obj === 0 || obj === '';
};

exports.isFalsy = isFalsy;

var isEmpty = function isEmpty(obj) {
  return isFalsy(obj) || (0, _is.isArray)(obj) && obj.length === 0 || (0, _is.isObject)(obj) && Object.keys(obj).length === 0;
};

exports.isEmpty = isEmpty;

var isNotEmpty = function isNotEmpty(obj) {
  return !isEmpty(obj);
};

exports.isNotEmpty = isNotEmpty;

/***/ }),

/***/ "./node_modules/whatsme/lib/is.type.js":
/*!*********************************************!*\
  !*** ./node_modules/whatsme/lib/is.type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exposedMethods = exports.validators = exports.isBoolean = exports.isNotNull = exports.isFunction = exports.isObject = exports.isDate = exports.isRegExp = exports.isFalse = exports.isTrue = exports.isArray = exports.isNaN = exports.isNumber = exports.isString = exports.isSymbol = exports.isUndefined = exports.isNull = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isNull = function isNull(obj) {
  return obj === null;
};

exports.isNull = isNull;

var isUndefined = function isUndefined(obj) {
  return typeof obj === 'undefined';
};

exports.isUndefined = isUndefined;

var isSymbol = function isSymbol(obj) {
  return _typeof(obj) === 'symbol' || hasSymbolPrototype(obj);
};

exports.isSymbol = isSymbol;

var isString = function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
};

exports.isString = isString;

var isNumber = function isNumber(obj) {
  return !isNaN(parseFloat(obj)) && isFinite(obj);
};

exports.isNumber = isNumber;

var isNaN = function isNaN(obj) {
  return typeof obj === 'number' && Number.isNaN(obj);
};

exports.isNaN = isNaN;

var isArray = function isArray(obj) {
  return Array.isArray(obj);
};

exports.isArray = isArray;

var isTrue = function isTrue(obj) {
  return isBoolean(obj) && obj === true;
};

exports.isTrue = isTrue;

var isFalse = function isFalse(obj) {
  return isBoolean(obj) && obj === false;
};

exports.isFalse = isFalse;

var isRegExp = function isRegExp(obj) {
  return obj instanceof RegExp;
};

exports.isRegExp = isRegExp;

var isDate = function isDate(obj) {
  return comparePrototype(obj, '[object Date]');
};

exports.isDate = isDate;

var isObject = function isObject(obj) {
  return isNotNull(obj) && _typeof(obj) === 'object';
};

exports.isObject = isObject;

var isFunction = function isFunction(obj) {
  return comparePrototype(obj, '[object Function]');
};
/* Aux */


exports.isFunction = isFunction;

var isBoolean = function isBoolean(obj) {
  return typeof obj === 'boolean';
};

exports.isBoolean = isBoolean;

var isNotNull = function isNotNull(obj) {
  return !isNull(obj);
};

exports.isNotNull = isNotNull;

var getPrototype = function getPrototype(obj) {
  return Object.prototype.toString.call(obj);
};

var comparePrototype = function comparePrototype(obj, prototype) {
  return getPrototype(obj) === prototype;
};

var hasSymbolPrototype = function hasSymbolPrototype(obj) {
  return comparePrototype(obj, '[object Symbol]');
};

var validators = [{
  name: 'isNull',
  check: isNull,
  type: 'null'
}, {
  name: 'isUndefined',
  check: isUndefined,
  type: 'undefined'
}, {
  name: 'isSymbol',
  check: isSymbol,
  type: 'symbol'
}, {
  name: 'isArray',
  check: isArray,
  type: 'array'
}, {
  name: 'isString',
  check: isString,
  type: 'string'
}, {
  name: 'isNumber',
  check: isNumber,
  type: 'number'
}, {
  name: 'isNaN',
  check: isNaN,
  type: 'NaN'
}, {
  name: 'isBoolean',
  check: isBoolean,
  type: 'boolean'
}, {
  name: 'isRegExp',
  check: isRegExp,
  type: 'RegExp'
}, {
  name: 'isDate',
  check: isDate,
  type: 'Date'
}, {
  name: 'isObject',
  check: isObject,
  type: 'object'
}, {
  name: 'isFunction',
  check: isFunction,
  type: 'function'
}];
exports.validators = validators;
var exposedMethods = {
  isNull: isNull,
  isUndefined: isUndefined,
  isSymbol: isSymbol,
  isArray: isArray,
  isString: isString,
  isNumber: isNumber,
  isNaN: isNaN,
  isTrue: isTrue,
  isFalse: isFalse,
  isRegExp: isRegExp,
  isDate: isDate,
  isObject: isObject,
  isFunction: isFunction
};
exports.exposedMethods = exposedMethods;

/***/ }),

/***/ "./src/array.comparator.js":
/*!*********************************!*\
  !*** ./src/array.comparator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.comparator */ "./src/empty.comparator.js");




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
            return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(result, comparePos(i));
          }, Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])());
        };

        var checkCommon = function checkCommon() {
          return compareSection(0, getMinLength());
        };

        var doStrict = function doStrict(_ref) {
          var _ref$strict = _ref.strict,
              strict = _ref$strict === void 0 ? false : _ref$strict;
          return strict ? compareStrict() : Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])();
        };

        var compareA1Remains = function compareA1Remains() {
          return compareSection(getMinLength(), a1.length);
        };

        var compareA2Remains = function compareA2Remains() {
          return compareSection(a1.length, a2.length);
        };

        var compareStrict = function compareStrict() {
          return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(compareA1Remains(), compareA2Remains());
        };

        var mustCheckDeep = function mustCheckDeep(_ref2) {
          var _ref2$deep = _ref2.deep,
              deep = _ref2$deep === void 0 ? false : _ref2$deep,
              _ref2$strict = _ref2.strict,
              strict = _ref2$strict === void 0 ? false : _ref2$strict;
          return deep || strict;
        };

        var checkDeep = function checkDeep() {
          return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(checkCommon(), doStrict(options));
        };

        return mustCheckDeep(options) ? checkDeep() : Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])();
      }
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (arrayComparator);

/***/ }),

/***/ "./src/compare.js":
/*!************************!*\
  !*** ./src/compare.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatsme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatsme */ "./node_modules/whatsme/lib/index.js");
/* harmony import */ var whatsme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(whatsme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _empty_comparator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.comparator */ "./src/empty.comparator.js");
/* harmony import */ var _array_comparator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.comparator */ "./src/array.comparator.js");
/* harmony import */ var _object_comparator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.comparator */ "./src/object.comparator.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var withIndex = function withIndex(index, obj) {
  return whatsme__WEBPACK_IMPORTED_MODULE_0___default.a.isDefined(index) ? _objectSpread({}, obj, {
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
  var type1 = whatsme__WEBPACK_IMPORTED_MODULE_0___default.a.whats(obj1);
  var type2 = whatsme__WEBPACK_IMPORTED_MODULE_0___default.a.whats(obj2);
  var result = getResult(type1, type2, index);
  return mustGoDeep(level, options) ? Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_1__["mergeResult"])(result, getComparator(type1)(options, level, index).compare(obj1, obj2)) : result;
};

var comparators = {
  array: Object(_array_comparator__WEBPACK_IMPORTED_MODULE_2__["default"])(compare),
  object: Object(_object_comparator__WEBPACK_IMPORTED_MODULE_3__["default"])(compare)
};

var getComparator = function getComparator(type) {
  return comparators[type] || _empty_comparator__WEBPACK_IMPORTED_MODULE_1__["emptyComparator"];
};

/* harmony default export */ __webpack_exports__["default"] = (compare);

/***/ }),

/***/ "./src/empty.comparator.js":
/*!*********************************!*\
  !*** ./src/empty.comparator.js ***!
  \*********************************/
/*! exports provided: emptyResult, emptyComparator, mergeResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyResult", function() { return emptyResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyComparator", function() { return emptyComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeResult", function() { return mergeResult; });


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

var emptyComparator = function emptyComparator() {
  return {
    compare: function compare() {
      return emptyResult();
    }
  };
};

var mergeResult = function mergeResult(res1, res2) {
  return Object.assign(res1, {
    success: res1.success && res2.success,
    differences: [].concat(_toConsumableArray(res1.differences), _toConsumableArray(res2.differences))
  });
};



/***/ }),

/***/ "./src/get.js":
/*!********************!*\
  !*** ./src/get.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare */ "./src/compare.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ "./src/properties.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UNDEFINED = 'undefined';

var createInstance = function createInstance(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instance = {
    with: function _with(obj) {
      return decorate(Object(_compare__WEBPACK_IMPORTED_MODULE_0__["default"])(value, obj, options), options);
    }
  };
  Object(_properties__WEBPACK_IMPORTED_MODULE_1__["defineProperties"])(instance, {
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

/* harmony default export */ __webpack_exports__["default"] = (get);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./src/is.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get */ "./src/get.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  is: _is__WEBPACK_IMPORTED_MODULE_0__["default"],
  get: _get__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/is.js":
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare */ "./src/compare.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ "./src/properties.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createInstance = function createInstance(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$comparison = options.comparison,
      comparison = _options$comparison === void 0 ? true : _options$comparison;
  var instance = {
    like: function like(obj) {
      return comparison === Object(_compare__WEBPACK_IMPORTED_MODULE_0__["default"])(value, obj, options).success;
    }
  };
  Object(_properties__WEBPACK_IMPORTED_MODULE_1__["defineProperties"])(instance, {
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

/* harmony default export */ __webpack_exports__["default"] = (is);

/***/ }),

/***/ "./src/object.comparator.js":
/*!**********************************!*\
  !*** ./src/object.comparator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.comparator */ "./src/empty.comparator.js");




var ind = function ind(key, index) {
  return index ? "".concat(index, ".").concat(key) : key.toString();
};

var getCommonKeys = function getCommonKeys(a, b) {
  return a.filter(function (key) {
    return b.includes(key);
  });
};

var mustCheckDeep = function mustCheckDeep(_ref) {
  var _ref$deep = _ref.deep,
      deep = _ref$deep === void 0 ? false : _ref$deep,
      _ref$strict = _ref.strict,
      strict = _ref$strict === void 0 ? false : _ref$strict;
  return deep || strict;
};

var getRemains = function getRemains() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return a.filter(function (key) {
    return !b.includes(key);
  });
};

var getKeys = function getKeys(obj) {
  return Object.keys(obj);
};

var objectComparator = function objectComparator(comparator) {
  return function (options, level, index) {
    var compKey = function compKey(o1, o2, key) {
      return comparator(o1[key], o2[key], options, level + 1, ind(key, index));
    };

    var compareByKeys = function compareByKeys(o1, o2, keys) {
      return keys.reduce(function (result, key) {
        return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(result, compKey(o1, o2, key));
      }, Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])());
    };

    var checkCommon = function checkCommon(o1, o2) {
      return compareByKeys(o1, o2, getCommonKeys(getKeys(o1), getKeys(o2)));
    };

    return {
      compare: function compare(o1, o2) {
        var o1Keys = Object.keys(o1);
        var o2Keys = Object.keys(o2);

        var doStrict = function doStrict(_ref2) {
          var _ref2$strict = _ref2.strict,
              strict = _ref2$strict === void 0 ? false : _ref2$strict;
          return strict ? compareStrict() : Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])();
        };

        var compareO1Remains = function compareO1Remains() {
          return compareByKeys(o1, o2, getRemains(o1Keys, o2Keys));
        };

        var compareO2Remains = function compareO2Remains() {
          return compareByKeys(o1, o2, getRemains(o2Keys, o1Keys));
        };

        var compareStrict = function compareStrict() {
          return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(compareO1Remains(), compareO2Remains());
        };

        var checkDeep = function checkDeep() {
          return Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["mergeResult"])(checkCommon(o1, o2), doStrict(options));
        };

        return mustCheckDeep(options) ? checkDeep() : Object(_empty_comparator__WEBPACK_IMPORTED_MODULE_0__["emptyResult"])();
      }
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (objectComparator);

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/*! exports provided: defineProperty, defineProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return defineProperties; });


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



/***/ })

/******/ });
//# sourceMappingURL=index.js.map