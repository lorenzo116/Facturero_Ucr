/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/facturero.global.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/facturero.global.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modern-normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/modern-normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: red;\n}\n\nhtml {\n  box-sizing: border-box;\n  /*font-size: 62.5%;*/\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n* {\n  font-family: \"Roboto\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/style/facturero.global.scss"],"names":[],"mappings":"AAIA;EACI,iBAAA;AADJ;;AAGA;EACI,sBAAA;EACA,oBAAA;AAAJ;;AAEI;EACE,mBAAA;AACN;;AACI;EACE,iCAAA;AAEN","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\r\n@import url('./modern-normalize.css');\r\n\r\n\r\n:root{\r\n    --main-color: red;\r\n}\r\nhtml {\r\n    box-sizing: border-box;\r\n    /*font-size: 62.5%;*/\r\n    }\r\n    *, *:before, *:after {\r\n      box-sizing: inherit;\r\n    }\r\n    *{\r\n      font-family: 'Roboto', sans-serif;\r\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/modern-normalize.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/modern-normalize.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size (opinionated).\r\n*/\r\n\r\nhtml {\r\n\tline-height: 1.15; /* 1 */\r\n\t-webkit-text-size-adjust: 100%; /* 2 */\r\n\t-moz-tab-size: 4; /* 3 */\r\n\ttab-size: 4; /* 3 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\n/**\r\n1. Remove the margin in all browsers.\r\n2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\r\n\r\nbody {\r\n\tmargin: 0; /* 1 */\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji'; /* 2 */\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\ttext-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}", "",{"version":3,"sources":["webpack://./src/style/modern-normalize.css"],"names":[],"mappings":"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;;;;CAIC;;AAED;CACC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;CACtC,gBAAgB,EAAE,MAAM;CACxB,WAAW,EAAE,MAAM;AACpB;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,SAAS,EAAE,MAAM;CACjB;;;;;;;;;kBASiB,EAAE,MAAM;AAC1B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AACvB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,iCAAiC;AAClC;;AAEA;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;AAC9B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;CAEC,oBAAoB;AACrB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;CACC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,8BAA8B;AAC/B;;AAEA;;;CAGC;;AAED;CACC,gBAAgB;AACjB;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB","sourcesContent":["/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size (opinionated).\r\n*/\r\n\r\nhtml {\r\n\tline-height: 1.15; /* 1 */\r\n\t-webkit-text-size-adjust: 100%; /* 2 */\r\n\t-moz-tab-size: 4; /* 3 */\r\n\ttab-size: 4; /* 3 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\n/**\r\n1. Remove the margin in all browsers.\r\n2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\r\n\r\nbody {\r\n\tmargin: 0; /* 1 */\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji'; /* 2 */\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\ttext-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/js/components/button/button.component.html":
/*!********************************************************!*\
  !*** ./src/js/components/button/button.component.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--<input type=\"submit\" value=\"Enviar\" class=\"fa-button\">-->\r\n<button class=\"fa-button\">Enviar</button>";

/***/ }),

/***/ "./src/js/components/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/js/components/header/header.component.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n   \r\n    <header class=\"flex justify-between items-center\">\r\n        <a href=\"#\" class=\"logo\">\r\n\r\n            \r\n        </a>\r\n\r\n        <button type=\"button\" class=\"btn-menu\" id=\"btnmenu\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n                stroke=\"currentColor\">\r\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" />\r\n            </svg>\r\n        </button>\r\n\r\n        <nav class=\"menu\" id=\"menu\">\r\n            <ul class=\"flex\">\r\n                <li  id=\"nuevas\"><a href=\"#\">Crear Factura</a></li>\r\n                <li id=\"populares\"><a href=\"#\">Reservaciones</a></li>\r\n                <li id=\"cartelera\"><a href=\"#\">Cartelera </a></li>\r\n                <li id=\"genero\"><a href=\"#\">Género </a></li>\r\n                <li><a href=\"#\">Acerca de</a></li>\r\n            </ul>\r\n\r\n        </nav>\r\n\r\n        <button type=\"button\" class=\"btn-buscar\" id=\"btnbuscar\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 md:h-36 md:w-36\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n                stroke=\"currentColor\">\r\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n                    d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" />\r\n            </svg>\r\n        </button>\r\n\r\n\r\n        <form class=\"form\" id=\"form\">\r\n            <input type=\"text\" placeholder=\"Search\" id=\"search\" class=\"search\">\r\n\r\n        </form>\r\n\r\n    </header>\r\n\r\n";

/***/ }),

/***/ "./src/js/components/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/js/components/login/login.component.html ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<form action=\"\" method=\"\">\r\n    <h1>Login</h1>\r\n    <fa-textfield for=\"email\" text=\"Email\"></fa-textfield>\r\n    <fa-textfield for=\"password\" text=\"Password\" type=\"password\"></fa-textfield>\r\n    <fa-button text=\"Aceptar\"></fa-button>\r\n</form>";

/***/ }),

/***/ "./src/js/components/textflied/textfield.component.html":
/*!**************************************************************!*\
  !*** ./src/js/components/textflied/textfield.component.html ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"group\">\r\n    <input type=\"text\" required id=\"\">\r\n    <span class=\"highlight\"></span>\r\n    <span class=\"bar\"></span>\r\n    <label for=\"\"></label>\r\n</div>";

/***/ }),

/***/ "./src/js/components/button/button.component.css":
/*!*******************************************************!*\
  !*** ./src/js/components/button/button.component.css ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "button{\r\n    position: relative;\r\n    display: inline-block;\r\n    align-self: flex-end;\r\n    background: #5264AE;\r\n    width: 150px;\r\n    height: 50px;\r\n    color: #E1F5FE;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin: 1rem;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n}\r\nbutton:active {\r\n    outline: none;\r\n    border: none;\r\n  }\r\nspan {\r\n  position: absolute;\r\n  background: #747ea7;\r\n  transform: translate(-50%,-50%);\r\n  pointer-events: none;\r\n  border-radius: 50%;\r\n  animation: animate 1s linear forwards;\r\n  mix-blend-mode: difference;\r\n}\r\n@keyframes animate\r\n{\r\n  0%\r\n  {\r\n    width: 0px;\r\n    height: 0px;\r\n    opacity: 0.5;\r\n  }\r\n  100%\r\n  {\r\n    width: 500px;\r\n    height: 500px;\r\n    opacity: 0;\r\n  }\r\n}";

/***/ }),

/***/ "./src/js/components/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/js/components/header/header.component.css ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "header{\r\n    padding:1rem;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    background-color: var(--secondary-color);\r\n}\r\n.flex{\r\n  display: flex;\r\n  \r\n}\r\n\r\n.justify-between{\r\n\r\n    justify-content: space-between;\r\n}\r\n.justify-center{\r\n\r\n    justify-content: center;\r\n}\r\n.items-center{\r\n    align-items: center;\r\n}\r\n.btn-menu{\r\n    background-color:  #958BB6;\r\n    color: white;\r\n    border: none;\r\n    padding: auto;;\r\n    \r\n}\r\n.btn-buscar svg{\r\n    width: 32px;\r\n    height: 32px;\r\n   \r\n}\r\n.btn-buscar{\r\n    background-color:  #958BB6;\r\n    color: white;\r\n    border: none;\r\n    margin-left: auto;\r\n    display: block;\r\n}";

/***/ }),

/***/ "./src/js/components/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/js/components/login/login.component.css ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/**/\r\nform{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin-top: 100px;\r\n}\r\nh1{\r\n    margin-bottom: 100px;\r\n}";

/***/ }),

/***/ "./src/js/components/textflied/textfield.component.css":
/*!*************************************************************!*\
  !*** ./src/js/components/textflied/textfield.component.css ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n/* form starting stylings ------------------------------- */\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\ninput \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:#5264AE; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n  left:50%;\r\n}\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  -moz-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@-moz-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}";

/***/ }),

/***/ "./src/style/facturero.global.scss":
/*!*****************************************!*\
  !*** ./src/style/facturero.global.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facturero_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./facturero.global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/facturero.global.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facturero_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facturero_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facturero_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facturero_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/components/button/button.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/button/button.component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonWebComponent": () => (/* binding */ ButtonWebComponent)
/* harmony export */ });
/* harmony import */ var _button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.html */ "./src/js/components/button/button.component.html");
/* harmony import */ var _button_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component.css */ "./src/js/components/button/button.component.css");
/* harmony import */ var _button_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_component_css__WEBPACK_IMPORTED_MODULE_1__);



class ButtonWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_button_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_button_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('text');
        this.shadowRoot.querySelector('button').addEventListener('click', function (e) {

            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
        
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
        
            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    }
}

customElements.define('fa-button', ButtonWebComponent)


/***/ }),

/***/ "./src/js/components/header/header.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/header/header.component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWebComponent": () => (/* binding */ HeaderWebComponent)
/* harmony export */ });
/* harmony import */ var _header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html */ "./src/js/components/header/header.component.html");
/* harmony import */ var _header_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ "./src/js/components/header/header.component.css");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_css__WEBPACK_IMPORTED_MODULE_1__);



class HeaderWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_header_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_header_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-header', HeaderWebComponent)


/***/ }),

/***/ "./src/js/components/login/login.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/login/login.component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginWebComponent": () => (/* binding */ LoginWebComponent)
/* harmony export */ });
/* harmony import */ var _login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html */ "./src/js/components/login/login.component.html");
/* harmony import */ var _login_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "./src/js/components/login/login.component.css");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_css__WEBPACK_IMPORTED_MODULE_1__);



class LoginWebComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${(_login_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_login_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
    }
}

customElements.define('fa-login', LoginWebComponent)


/***/ }),

/***/ "./src/js/components/textflied/textfield.component.js":
/*!************************************************************!*\
  !*** ./src/js/components/textflied/textfield.component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextfieldWebComponent": () => (/* binding */ TextfieldWebComponent)
/* harmony export */ });
/* harmony import */ var _textfield_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textfield.component.html */ "./src/js/components/textflied/textfield.component.html");
/* harmony import */ var _textfield_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_textfield_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _textfield_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textfield.component.css */ "./src/js/components/textflied/textfield.component.css");
/* harmony import */ var _textfield_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_textfield_component_css__WEBPACK_IMPORTED_MODULE_1__);



class TextfieldWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_textfield_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_textfield_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        this.shadowRoot.querySelector('label').htmlFor = this.getAttribute('for');
        this.shadowRoot.querySelector('label').innerHTML = this.getAttribute('text');
        this.shadowRoot.querySelector('input').id = this.getAttribute('for');
        this.shadowRoot.querySelector('input').name = this.getAttribute('for');
        if(this.getAttribute('type')){
            this.shadowRoot.querySelector('input').type = this.getAttribute('type')
        }
    }
}

customElements.define('fa-textfield', TextfieldWebComponent)


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button.component */ "./src/js/components/button/button.component.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/js/components/header/header.component.js");
/* harmony import */ var _components_textflied_textfield_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/textflied/textfield.component */ "./src/js/components/textflied/textfield.component.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/js/components/login/login.component.js");
/* harmony import */ var _style_facturero_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../style/facturero.global.scss */ "./src/style/facturero.global.scss");





console.log('Hola');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksK0RBQUk7QUFDMUQsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QwQztBQUNGO0FBQ3hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNkRBQUcsQ0FBQyxZQUFZLDhEQUFJO0FBQzNELDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI4QztBQUNGO0FBQzVDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQUcsQ0FBQyxZQUFZLGtFQUFJO0FBQzFELDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEU7QUFDQTtBQUNTO0FBQ1o7QUFDN0I7QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL3N0eWxlL2ZhY3R1cmVyby5nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL3N0eWxlL21vZGVybi1ub3JtYWxpemUuY3NzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRmbGllZC90ZXh0ZmllbGQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy90ZXh0ZmxpZWQvdGV4dGZpZWxkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9zdHlsZS9mYWN0dXJlcm8uZ2xvYmFsLnNjc3M/NzZhYiIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvdGV4dGZsaWVkL3RleHRmaWVsZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BydWViYTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BydWViYTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogcmVkO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKmZvbnQtc2l6ZTogNjIuNSU7Ki9cXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9mYWN0dXJlcm8uZ2xvYmFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDSSxpQkFBQTtBQURKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUVJO0VBQ0UsbUJBQUE7QUFDTjs7QUFDSTtFQUNFLGlDQUFBO0FBRU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCcuL21vZGVybi1ub3JtYWxpemUuY3NzJyk7XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLypmb250LXNpemU6IDYyLjUlOyovXFxyXFxuICAgIH1cXHJcXG4gICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAgIH1cXHJcXG4gICAgKntcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcclxcblxcclxcbi8qXFxyXFxuRG9jdW1lbnRcXHJcXG49PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG5cXHQtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxyXFxuXFx0dGFiLXNpemU6IDQ7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5TZWN0aW9uc1xcclxcbj09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDsgLyogMSAqL1xcclxcblxcdGZvbnQtZmFtaWx5OlxcclxcblxcdFxcdHN5c3RlbS11aSxcXHJcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXHJcXG5cXHRcXHQnU2Vnb2UgVUknLFxcclxcblxcdFxcdFJvYm90byxcXHJcXG5cXHRcXHRIZWx2ZXRpY2EsXFxyXFxuXFx0XFx0QXJpYWwsXFxyXFxuXFx0XFx0c2Fucy1zZXJpZixcXHJcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcclxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Hcm91cGluZyBjb250ZW50XFxyXFxuPT09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcblxcdGhlaWdodDogMDsgLyogMSAqL1xcclxcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG49PT09PT09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcblxcdGZvbnQtZmFtaWx5OlxcclxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXHJcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXHJcXG5cXHRcXHRDb25zb2xhcyxcXHJcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXHJcXG5cXHRcXHRNZW5sbyxcXHJcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcblxcdGZvbnQtc2l6ZTogNzUlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcblxcdHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRhYnVsYXIgZGF0YVxcclxcbj09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXHJcXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Gb3Jtc1xcclxcbj09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcclxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5JbnRlcmFjdGl2ZVxcclxcbj09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbW9kZXJuLW5vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEZBQThGOztBQUU5Rjs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7OztDQUdDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7OztDQUlDOztBQUVEO0NBQ0MsaUJBQWlCLEVBQUUsTUFBTTtDQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0NBQ3RDLGdCQUFnQixFQUFFLE1BQU07Q0FDeEIsV0FBVyxFQUFFLE1BQU07QUFDcEI7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDtDQUNDLFNBQVMsRUFBRSxNQUFNO0NBQ2pCOzs7Ozs7Ozs7a0JBU2lCLEVBQUUsTUFBTTtBQUMxQjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBOztDQUVDOztBQUVEOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Ozs7Q0FJQzs7Ozs7O1dBTVUsRUFBRSxNQUFNO0NBQ2xCLGNBQWMsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOztDQUVDOztBQUVEO0NBQ0MsY0FBYztBQUNmOztBQUVBOztDQUVDOztBQUVEOztDQUVDLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDtDQUNDLGNBQWMsRUFBRSxNQUFNO0NBQ3RCLHFCQUFxQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDs7Ozs7Q0FLQyxvQkFBb0IsRUFBRSxNQUFNO0NBQzVCLGVBQWUsRUFBRSxNQUFNO0NBQ3ZCLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsU0FBUyxFQUFFLE1BQU07QUFDbEI7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsb0JBQW9CO0FBQ3JCOztBQUVBOztDQUVDOztBQUVEOzs7O0NBSUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsWUFBWTtBQUNiOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLDZCQUE2QixFQUFFLE1BQU07Q0FDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQywwQkFBMEIsRUFBRSxNQUFNO0NBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3RCOztBQUVBOzs7Q0FHQzs7QUFFRDs7Q0FFQzs7QUFFRDtDQUNDLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcclxcblxcclxcbi8qXFxyXFxuRG9jdW1lbnRcXHJcXG49PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG5cXHQtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxyXFxuXFx0dGFiLXNpemU6IDQ7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5TZWN0aW9uc1xcclxcbj09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDsgLyogMSAqL1xcclxcblxcdGZvbnQtZmFtaWx5OlxcclxcblxcdFxcdHN5c3RlbS11aSxcXHJcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXHJcXG5cXHRcXHQnU2Vnb2UgVUknLFxcclxcblxcdFxcdFJvYm90byxcXHJcXG5cXHRcXHRIZWx2ZXRpY2EsXFxyXFxuXFx0XFx0QXJpYWwsXFxyXFxuXFx0XFx0c2Fucy1zZXJpZixcXHJcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcclxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Hcm91cGluZyBjb250ZW50XFxyXFxuPT09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcblxcdGhlaWdodDogMDsgLyogMSAqL1xcclxcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG49PT09PT09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcblxcdGZvbnQtZmFtaWx5OlxcclxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXHJcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXHJcXG5cXHRcXHRDb25zb2xhcyxcXHJcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXHJcXG5cXHRcXHRNZW5sbyxcXHJcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcblxcdGZvbnQtc2l6ZTogNzUlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcblxcdHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRhYnVsYXIgZGF0YVxcclxcbj09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXHJcXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Gb3Jtc1xcclxcbj09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcclxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5JbnRlcmFjdGl2ZVxcclxcbj09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgdmFsdWU9XFxcIkVudmlhclxcXCIgY2xhc3M9XFxcImZhLWJ1dHRvblxcXCI+LS0+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiZmEtYnV0dG9uXFxcIj5FbnZpYXI8L2J1dHRvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICAgXFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibG9nb1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2E+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1tZW51XFxcIiBpZD1cXFwiYnRubWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGNsYXNzPVxcXCJoLTYgdy02XFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIGQ9XFxcIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJtZW51XFxcIiBpZD1cXFwibWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJmbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICBpZD1cXFwibnVldmFzXFxcIj48YSBocmVmPVxcXCIjXFxcIj5DcmVhciBGYWN0dXJhPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwicG9wdWxhcmVzXFxcIj48YSBocmVmPVxcXCIjXFxcIj5SZXNlcnZhY2lvbmVzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiY2FydGVsZXJhXFxcIj48YSBocmVmPVxcXCIjXFxcIj5DYXJ0ZWxlcmEgPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiZ2VuZXJvXFxcIj48YSBocmVmPVxcXCIjXFxcIj5Hw6luZXJvIDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+QWNlcmNhIGRlPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tYnVzY2FyXFxcIiBpZD1cXFwiYnRuYnVzY2FyXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgY2xhc3M9XFxcImgtNiB3LTYgbWQ6aC0zNiBtZDp3LTM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybVxcXCIgaWQ9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIiBpZD1cXFwic2VhcmNoXFxcIiBjbGFzcz1cXFwic2VhcmNoXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuXFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGFjdGlvbj1cXFwiXFxcIiBtZXRob2Q9XFxcIlxcXCI+XFxyXFxuICAgIDxoMT5Mb2dpbjwvaDE+XFxyXFxuICAgIDxmYS10ZXh0ZmllbGQgZm9yPVxcXCJlbWFpbFxcXCIgdGV4dD1cXFwiRW1haWxcXFwiPjwvZmEtdGV4dGZpZWxkPlxcclxcbiAgICA8ZmEtdGV4dGZpZWxkIGZvcj1cXFwicGFzc3dvcmRcXFwiIHRleHQ9XFxcIlBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCI+PC9mYS10ZXh0ZmllbGQ+XFxyXFxuICAgIDxmYS1idXR0b24gdGV4dD1cXFwiQWNlcHRhclxcXCI+PC9mYS1idXR0b24+XFxyXFxuPC9mb3JtPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJncm91cFxcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZCBpZD1cXFwiXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhpZ2hsaWdodFxcXCI+PC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+PC9sYWJlbD5cXHJcXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiYnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MjY0QUU7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogI0UxRjVGRTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbnNwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzc0N2VhNztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxcyBsaW5lYXIgZm9yd2FyZHM7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBhbmltYXRlXFxyXFxue1xcclxcbiAgMCVcXHJcXG4gIHtcXHJcXG4gICAgd2lkdGg6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG4gIDEwMCVcXHJcXG4gIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaGVhZGVye1xcclxcbiAgICBwYWRkaW5nOjFyZW07XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuLmZsZXh7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW57XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmp1c3RpZnktY2VudGVye1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLml0ZW1zLWNlbnRlcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ0bi1tZW51e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzk1OEJCNjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IGF1dG87O1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmJ0bi1idXNjYXIgc3Zne1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG4uYnRuLWJ1c2NhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM5NThCQjY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiovXFxyXFxuZm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5oMXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG5cXHJcXG4vKiBmb3JtIHN0YXJ0aW5nIHN0eWxpbmdzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4uZ3JvdXAgXFx0XFx0XFx0ICB7IFxcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxcclxcbiAgbWFyZ2luLWJvdHRvbTo0NXB4OyBcXHJcXG59XFxyXFxuaW5wdXQgXFx0XFx0XFx0XFx0e1xcclxcbiAgZm9udC1zaXplOjE4cHg7XFxyXFxuICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDVweDtcXHJcXG4gIGRpc3BsYXk6YmxvY2s7XFxyXFxuICB3aWR0aDozMDBweDtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc1NzU3NTtcXHJcXG59XFxyXFxuaW5wdXQ6Zm9jdXMgXFx0XFx0eyBvdXRsaW5lOm5vbmU7IH1cXHJcXG5cXHJcXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5sYWJlbCBcXHRcXHRcXHRcXHQge1xcclxcbiAgY29sb3I6Izk5OTsgXFxyXFxuICBmb250LXNpemU6MThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gIGxlZnQ6NXB4O1xcclxcbiAgdG9wOjEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcclxcbmlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwgXFx0XFx0e1xcclxcbiAgdG9wOi0yMHB4O1xcclxcbiAgZm9udC1zaXplOjE0cHg7XFxyXFxuICBjb2xvcjojNTI2NEFFO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYmFyIFxcdHsgcG9zaXRpb246cmVsYXRpdmU7IGRpc3BsYXk6YmxvY2s7IHdpZHRoOjMwMHB4OyB9XFxyXFxuLmJhcjpiZWZvcmUsIC5iYXI6YWZ0ZXIgXFx0e1xcclxcbiAgY29udGVudDonJztcXHJcXG4gIGhlaWdodDoycHg7IFxcclxcbiAgd2lkdGg6MDtcXHJcXG4gIGJvdHRvbToxcHg7IFxcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiM1MjY0QUU7IFxcclxcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG4uYmFyOmJlZm9yZSB7XFxyXFxuICBsZWZ0OjUwJTtcXHJcXG59XFxyXFxuLmJhcjphZnRlciB7XFxyXFxuICByaWdodDo1MCU7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBhY3RpdmUgc3RhdGUgKi9cXHJcXG5pbnB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLCBpbnB1dDpmb2N1cyB+IC5iYXI6YWZ0ZXIge1xcclxcbiAgd2lkdGg6NTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDo2MCU7IFxcclxcbiAgd2lkdGg6MTAwcHg7IFxcclxcbiAgdG9wOjI1JTsgXFxyXFxuICBsZWZ0OjA7XFxyXFxuICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgb3BhY2l0eTowLjU7XFxyXFxufVxcclxcblxcclxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcclxcbmlucHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbiAgYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXHJcXG5cXHRmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XFxyXFxuICB0byBcXHR7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXHJcXG5cXHRmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XFxyXFxuICB0byBcXHR7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cXHJcXG59XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mYWN0dXJlcm8uZ2xvYmFsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mYWN0dXJlcm8uZ2xvYmFsLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBodG1sIGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJztcclxuaW1wb3J0IGNzcyBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25XZWJDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9YDxzdHlsZT4ke2Nzc308L3N0eWxlPmAgKyBodG1sO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5pbm5lckhUTUwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGV4dCcpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgeCA9IGUuY2xpZW50WCAtIGUudGFyZ2V0Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGxldCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmlwcGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgcmlwcGxlcy5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbiAgICAgICAgICAgIHJpcHBsZXMuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocmlwcGxlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmlwcGxlcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtYnV0dG9uJywgQnV0dG9uV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50LmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtaGVhZGVyJywgSGVhZGVyV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJztcclxuaW1wb3J0IGNzcyBmcm9tICcuL2xvZ2luLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke2Nzc308L3N0eWxlPmAgKyBodG1sO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtbG9naW4nLCBMb2dpbldlYkNvbXBvbmVudClcclxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi90ZXh0ZmllbGQuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4vdGV4dGZpZWxkLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRmaWVsZFdlYkNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID1gPHN0eWxlPiR7Y3NzfTwvc3R5bGU+YCArIGh0bWw7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJykuaHRtbEZvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignbGFiZWwnKS5pbm5lckhUTUwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGV4dCcpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLm5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJyk7XHJcbiAgICAgICAgaWYodGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnR5cGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZhLXRleHRmaWVsZCcsIFRleHRmaWVsZFdlYkNvbXBvbmVudClcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEJ1dHRvbldlYkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGVhZGVyV2ViQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXh0ZmllbGRXZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRmbGllZC90ZXh0ZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luV2ViQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0ICcuLy4uL3N0eWxlL2ZhY3R1cmVyby5nbG9iYWwuc2Nzcyc7XHJcbmNvbnNvbGUubG9nKCdIb2xhJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==