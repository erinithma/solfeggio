webpackHotUpdate("common",{

/***/ "./js/reducer/sound.js":
/*!*****************************!*\
  !*** ./js/reducer/sound.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.es.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ \"./js/common/index.js\");\n/* harmony import */ var _modes_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modes/play */ \"./js/modes/play.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ \"./js/const/index.js\");\n\n\n\n\nvar Sound = Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"Record\"])({\n  mode: new _modes_play__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n  result: null,\n  total: null,\n  state: 'empty',\n  pressedKeys: Object(_common__WEBPACK_IMPORTED_MODULE_1__[\"fill\"])(),\n  currentOctave: 2,\n  lastTouchIndex: -1,\n  size: Object(_common__WEBPACK_IMPORTED_MODULE_1__[\"getSize\"])(),\n  counter: 0,\n  offset: getOffset(2),\n  tempOffset: null,\n  loaded: 0\n});\n\nfunction getOffset(index) {\n  switch (Object(_common__WEBPACK_IMPORTED_MODULE_1__[\"getSize\"])()) {\n    case 'sm':\n      return index * -300;\n\n    case 'md':\n      return (index === 0 ? 0 : index - 1) * -173;\n\n    default:\n      return 0;\n  }\n}\n\nfunction setOffset(sound, index) {\n  return sound.set(\"offset\", getOffset(index));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var sound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Sound();\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n  var currentOctave = sound.get(\"currentOctave\");\n\n  switch (type) {\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PROGRESS:\n      return sound.set(\"loaded\", payload.count);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOAD_SOUND:\n      return sound.set(\"state\", \"loading\");\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOAD_SOUND + _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].READY:\n      return sound.set(\"state\", \"loaded\");\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].KEY_DOWN:\n      if (payload.fromMouse) {\n        sound = sound.set(\"lastTouchIndex\", payload.index);\n      }\n\n      return sound.update('pressedKeys', function (pressedKeys) {\n        return pressedKeys.map(function (v, i) {\n          return i === payload.index ? true : v;\n        });\n      });\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].KEY_UP:\n      return sound.update('pressedKeys', function (pressedKeys) {\n        return pressedKeys.map(function (v, i) {\n          return i === payload.index ? false : v;\n        });\n      });\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SELECT_OCTAVE:\n      return setOffset(sound.set(\"currentOctave\", payload.index), payload.index);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].INCREMENT_OCTAVE:\n      return function (index) {\n        return setOffset(sound.set(\"currentOctave\", index), index);\n      }(currentOctave >= 4 ? 0 : currentOctave + 1);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DECREMENT_OCTAVE:\n      return function (index) {\n        return setOffset(sound.set(\"currentOctave\", index), index);\n      }(currentOctave <= 0 ? 4 : currentOctave - 1);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SET_SIZE:\n      return sound.get(\"size\") !== payload.size ? setOffset(sound.set(\"size\", payload.size), currentOctave) : sound;\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SET_MODE:\n      return sound.set(\"mode\", payload.mode).set(\"total\", null);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MODE_SHOW_RESULT:\n      return sound.set(\"result\", sound.get(\"mode\").getResult());\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MODE_HIDE_RESULT:\n      return sound.set(\"result\", null);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MODE_SHOW_TOTAL:\n      return sound.set(\"total\", payload.result);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MODE_HIDE_TOTAL:\n      return sound.set(\"total\", null);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MODE_COUNT:\n      return sound.set(\"counter\", payload.count);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SCROLL_TEMP:\n      return sound.set(\"tempOffset\", payload.value);\n\n    case _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CLEAR_SCROLL:\n      return sound.set(\"tempOffset\", null);\n\n    default:\n      return sound;\n  }\n});\n\n//# sourceURL=webpack:///./js/reducer/sound.js?");

/***/ })

})