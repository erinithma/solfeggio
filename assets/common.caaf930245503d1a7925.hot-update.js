webpackHotUpdate("common",{

/***/ "./js/components/piano/keys.js":
/*!*************************************!*\
  !*** ./js/components/piano/keys.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const */ \"./js/const/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ \"./js/common/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/index.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_5__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n\\n    cursor: pointer;\\n    border-radius: 0 0 2px 2px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    align-items: center;\\n\\n    background-color: \", \";\\n    border-bottom: 1px solid black;\\n    border-left: 1px solid #777;\\n    border-right: 1px solid black;\\n    background-size: 100%;\\n    height: 100%;\\n    width: 100%;\\n\\n    &:hover {\\n        \", \"\\n    }\\n\\n    \", \"\\n\\n    \", \"\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n\\n    cursor: pointer;\\n    border-radius: 0 0 2px 2px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    align-items: center;\\n\\n    \", \"\\n\\n    border-bottom: 1px solid black;\\n    border-left: 1px solid black;\\n    border-right: 1px solid black;\\n    position: absolute;\\n    left: 50%;\\n    width: 60%;\\n    margin-left: 20%;\\n    top: 0;\\n    z-index: 1;\\n    height: 65%;\\n  \\n    &:hover {\\n        \", \"\\n    }\\n  \\n    \", \"\\n\\n    \", \"\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    margin-bottom: 4px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\nvar Spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function (_ref) {\n  var className = _ref.className;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_5__[\"ClipLoader\"], {\n    sizeUnit: \"px\",\n    size: 14,\n    color: '#ccc',\n    loading: true\n  }));\n})(_templateObject());\n\nvar Key =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Key, _React$Component);\n\n  function Key() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Key);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Key)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onDown\", function () {\n      _this.props.down(_this.props.index);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onUp\", function () {\n      _this.props.up(_this.props.index);\n    });\n\n    return _this;\n  }\n\n  _createClass(Key, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          className = _this$props.className,\n          children = _this$props.children,\n          child = _this$props.child,\n          index = _this$props.index,\n          loaded = _this$props.loaded;\n      var spinner = loaded < index ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner, null) : null;\n      return Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"detectTouch\"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"\".concat(className, \" note\"),\n        onTouchStart: this.onDown,\n        onTouchEnd: this.onUp\n      }, child, children, spinner) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"\".concat(className, \" note\"),\n        onMouseDown: this.onDown,\n        onMouseUp: this.onUp\n      }, child, children, spinner);\n    }\n  }]);\n\n  return Key;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nfunction connectWith(component) {\n  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state, ownProps) {\n    return {\n      pressed: state.sound.get(\"pressedKeys\")[ownProps.index],\n      lastTouchIndex: state.sound.get(\"lastTouchIndex\"),\n      loaded: state.sound.get(\"loaded\"),\n      color: state.sound.get(\"result\") ? state.sound.get(\"result\").colors[ownProps.index] : null,\n      child: state.sound.get(\"result\") && state.sound.get(\"result\").children ? state.sound.get(\"result\").children[ownProps.index] : null\n    };\n  }, function (dispatch) {\n    return {\n      down: function down(index) {\n        return dispatch({\n          type: _const__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_DOWN,\n          payload: {\n            index: index,\n            fromMouse: !Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"detectTouch\"])()\n          }\n        });\n      },\n      up: function up(index) {\n        return dispatch({\n          type: _const__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_UP,\n          payload: {\n            index: index\n          }\n        });\n      }\n    };\n  })(component);\n}\n\nvar BlackKey = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Key)(_templateObject2(), function (props) {\n  return \"background-color: \".concat(props.theme.blacks[0], \";\");\n}, function (props) {\n  return \"background-color: \".concat(props.theme.blacks[1], \";\");\n}, function (props) {\n  return props.color === 'red' ? \"background-color: \".concat(props.theme.dangerDark, \" !important;\") : props.color === 'green' ? \"background-color: \".concat(props.theme.successDark, \" !important;\") : props.color === 'yellow' ? \"background-color: \".concat(props.theme.yellowDark, \" !important;\") : '';\n}, function (props) {\n  return props.pressed ? \"\\n            height: 63%;\\n            background: linear-gradient(to bottom, \".concat(props.theme.blacks[0], \", \").concat(props.theme.blacks[2], \"); \\n        \") : '';\n});\nvar WhiteKey = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Key)(_templateObject3(), function (props) {\n  return \"\".concat(props.theme.whites[0]);\n}, function (props) {\n  return \"background-color: \".concat(props.theme.whites[1], \";\");\n}, function (props) {\n  return props.color === 'red' ? \"background-color: \".concat(props.theme.danger, \" !important;\") : props.color === 'green' ? \"background-color: \".concat(props.theme.success, \" !important;\") : props.color === 'yellow' ? \"background-color: \".concat(props.theme.yellow, \" !important;\") : '';\n}, function (props) {\n  return props.pressed ? \"\\n            height: 98%;\\n            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);\\n            background: linear-gradient(to bottom, \".concat(props.theme.whites[0], \", \").concat(props.theme.whites[2], \"); \\n        \") : '';\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  White: connectWith(WhiteKey),\n  Black: connectWith(BlackKey)\n});\n\n//# sourceURL=webpack:///./js/components/piano/keys.js?");

/***/ })

})