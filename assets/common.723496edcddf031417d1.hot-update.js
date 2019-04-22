webpackHotUpdate("common",{

/***/ "./js/view/commonSettings.js":
/*!***********************************!*\
  !*** ./js/view/commonSettings.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_piano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/piano */ \"./js/components/piano/index.js\");\n/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/switch */ \"./js/components/switch/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ \"./js/const/index.js\");\n/* harmony import */ var _modes_commonSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modes/commonSettings */ \"./js/modes/commonSettings.js\");\n/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/counter */ \"./js/components/counter/index.js\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common */ \"./js/components/common/index.js\");\n/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/storage */ \"./js/common/storage.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar Settings =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Settings, _React$Component);\n\n  function Settings(props) {\n    var _this;\n\n    _classCallCheck(this, Settings);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"save\", function () {\n      _common_storage__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set({\n        total: +_this.ref.currentRef.value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"ref\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());\n\n    _this.props.setMode();\n\n    _this.limit = _common_storage__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get().total;\n    return _this;\n  }\n\n  _createClass(Settings, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u041E\\u0431\\u0449\\u0438\\u0435 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043F\\u043E\\u043F\\u044B\\u0442\\u043E\\u043A\"), \"\\xA0\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        ref: this.ref,\n        defaultValue: this.limit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: 10\n      }, \"10\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: 20\n      }, \"20\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: 30\n      }, \"30\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: 50\n      }, \"50\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: 100\n      }, \"100\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        primary: true,\n        onClick: this.save\n      }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"));\n    }\n  }]);\n\n  return Settings;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, function (dispatch) {\n  return {\n    setMode: function setMode() {\n      return dispatch({\n        type: _const__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SET_MODE,\n        payload: {\n          mode: new _modes_commonSettings__WEBPACK_IMPORTED_MODULE_5__[\"default\"]()\n        }\n      });\n    }\n  };\n})(Settings));\n\n//# sourceURL=webpack:///./js/view/commonSettings.js?");

/***/ })

})