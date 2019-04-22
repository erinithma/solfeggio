webpackHotUpdate("common",{

/***/ "./js/common/storage.js":
/*!******************************!*\
  !*** ./js/common/storage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar NAME = \"so_storage\";\n\nfunction init() {\n  if (!localStorage.getItem(NAME)) localStorage.setItem(NAME, JSON.stringify({\n    common: {\n      total: 10\n    },\n    modes: {}\n  }));\n}\n\nfunction get() {\n  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  init();\n  var json = JSON.parse(localStorage.getItem(NAME));\n\n  if (mode === null) {\n    return json.common;\n  } else if (typeof mode === \"string\") {\n    return json.modes[mode];\n  }\n\n  throw \"invalid argument 'mode'\";\n}\n\nfunction set(data) {\n  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  init();\n  var allData = JSON.parse(localStorage.getItem(NAME));\n\n  if (mode === null) {\n    var json = get();\n    json = Object.assign({}, json, data);\n    allData.common = json;\n    localStorage.setItem(NAME, JSON.stringify(allData));\n  } else if (typeof mode === \"string\") {\n    var _json = get(mode) || {};\n\n    _json = Object.assign(_json, data);\n    allData.modes[mode] = _json;\n    localStorage.setItem(NAME, JSON.stringify(allData));\n  }\n\n  throw \"invalid argument 'mode'\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: get,\n  set: set\n});\n\n//# sourceURL=webpack:///./js/common/storage.js?");

/***/ })

})