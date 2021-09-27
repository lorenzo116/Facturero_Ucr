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

module.exports = "<form action=\"\" method=\"\">\r\n    <h1>Login</h1>\r\n    <fa-textfield for=\"email\" text=\"Email\"></fa-textfield>\r\n    <fa-textfield for=\"password\" text=\"Password\" type=\"password\"></fa-textfield>\r\n    <fa-button></fa-button>\r\n</form>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFJO0FBQzFELDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMEM7QUFDRjtBQUN4QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDZEQUFHLENBQUMsWUFBWSw4REFBSTtBQUMzRCw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCOEM7QUFDRjtBQUM1QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlFQUFHLENBQUMsWUFBWSxrRUFBSTtBQUMxRCwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBFO0FBQ0E7QUFDUztBQUNaO0FBQzdCO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9zdHlsZS9mYWN0dXJlcm8uZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9zdHlsZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy90ZXh0ZmxpZWQvdGV4dGZpZWxkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvdGV4dGZsaWVkL3RleHRmaWVsZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvc3R5bGUvZmFjdHVyZXJvLmdsb2JhbC5zY3NzPzc2YWIiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRmbGllZC90ZXh0ZmllbGQuY29tcG9uZW50LmpzIiwid2VicGFjazovL1BydWViYTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kZXJuLW5vcm1hbGl6ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IHJlZDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLypmb250LXNpemU6IDYyLjUlOyovXFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvZmFjdHVyZXJvLmdsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFSTtFQUNFLG1CQUFBO0FBQ047O0FBQ0k7RUFDRSxpQ0FBQTtBQUVOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnLi9tb2Rlcm4tbm9ybWFsaXplLmNzcycpO1xcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLW1haW4tY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qZm9udC1zaXplOiA2Mi41JTsqL1xcclxcbiAgICB9XFxyXFxuICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgICB9XFxyXFxuICAgICp7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKlxcclxcbkRvY3VtZW50XFxyXFxuPT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuXFx0LW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcclxcblxcdHRhYi1zaXplOiA0OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2VjdGlvbnNcXHJcXG49PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7IC8qIDEgKi9cXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHRzeXN0ZW0tdWksXFxyXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxyXFxuXFx0XFx0J1NlZ29lIFVJJyxcXHJcXG5cXHRcXHRSb2JvdG8sXFxyXFxuXFx0XFx0SGVsdmV0aWNhLFxcclxcblxcdFxcdEFyaWFsLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsXFxyXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXHJcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuR3JvdXBpbmcgY29udGVudFxcclxcbj09PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4qL1xcclxcblxcclxcbmhyIHtcXHJcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuPT09PT09PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcclxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAsXFxyXFxucHJlIHtcXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxyXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxyXFxuXFx0XFx0Q29uc29sYXMsXFxyXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxyXFxuXFx0XFx0TWVubG8sXFxyXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxyXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG5cXHRmb250LXNpemU6IDc1JTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcblxcdGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG5cXHR0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UYWJ1bGFyIGRhdGFcXHJcXG49PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxyXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcclxcbiovXFxyXFxuXFxyXFxudGFibGUge1xcclxcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuRm9ybXNcXHJcXG49PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4qL1xcclxcblxcclxcbjotbW96LWZvY3VzcmluZyB7XFxyXFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXHJcXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei11aS1pbnZhbGlkIHtcXHJcXG5cXHRib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSW50ZXJhY3RpdmVcXHJcXG49PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21vZGVybi1ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhGQUE4Rjs7QUFFOUY7OztDQUdDOztBQUVEOztDQUVDOztBQUVEOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtDQUNDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtDQUN0QyxnQkFBZ0IsRUFBRSxNQUFNO0NBQ3hCLFdBQVcsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOzs7Q0FHQzs7QUFFRDs7O0NBR0M7O0FBRUQ7Q0FDQyxTQUFTLEVBQUUsTUFBTTtDQUNqQjs7Ozs7Ozs7O2tCQVNpQixFQUFFLE1BQU07QUFDMUI7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDtDQUNDLFNBQVMsRUFBRSxNQUFNO0NBQ2pCLGNBQWMsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOzs7Q0FHQzs7QUFFRDs7Q0FFQzs7QUFFRDtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7OztDQUdDOztBQUVEOzs7O0NBSUM7Ozs7OztXQU1VLEVBQUUsTUFBTTtDQUNsQixjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOzs7Q0FHQzs7QUFFRDs7O0NBR0M7O0FBRUQ7Q0FDQyxjQUFjLEVBQUUsTUFBTTtDQUN0QixxQkFBcUIsRUFBRSxNQUFNO0FBQzlCOztBQUVBOzs7Q0FHQzs7QUFFRDs7O0NBR0M7O0FBRUQ7Ozs7O0NBS0Msb0JBQW9CLEVBQUUsTUFBTTtDQUM1QixlQUFlLEVBQUUsTUFBTTtDQUN2QixpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ2xCOztBQUVBOztDQUVDOztBQUVEOztDQUVDLG9CQUFvQjtBQUNyQjs7QUFFQTs7Q0FFQzs7QUFFRDs7OztDQUlDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7OztDQUdDOztBQUVEO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDOztBQUVEO0NBQ0MsVUFBVTtBQUNYOztBQUVBOztDQUVDOztBQUVEO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBOztDQUVDOztBQUVEOztDQUVDLFlBQVk7QUFDYjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQyw2QkFBNkIsRUFBRSxNQUFNO0NBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7OztDQUdDOztBQUVEO0NBQ0MsMEJBQTBCLEVBQUUsTUFBTTtDQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKlxcclxcbkRvY3VtZW50XFxyXFxuPT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuXFx0LW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcclxcblxcdHRhYi1zaXplOiA0OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2VjdGlvbnNcXHJcXG49PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7IC8qIDEgKi9cXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHRzeXN0ZW0tdWksXFxyXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxyXFxuXFx0XFx0J1NlZ29lIFVJJyxcXHJcXG5cXHRcXHRSb2JvdG8sXFxyXFxuXFx0XFx0SGVsdmV0aWNhLFxcclxcblxcdFxcdEFyaWFsLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsXFxyXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXHJcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuR3JvdXBpbmcgY29udGVudFxcclxcbj09PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4qL1xcclxcblxcclxcbmhyIHtcXHJcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuPT09PT09PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcclxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAsXFxyXFxucHJlIHtcXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxyXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxyXFxuXFx0XFx0Q29uc29sYXMsXFxyXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxyXFxuXFx0XFx0TWVubG8sXFxyXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxyXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG5cXHRmb250LXNpemU6IDc1JTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcblxcdGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG5cXHR0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UYWJ1bGFyIGRhdGFcXHJcXG49PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxyXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcclxcbiovXFxyXFxuXFxyXFxudGFibGUge1xcclxcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuRm9ybXNcXHJcXG49PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4qL1xcclxcblxcclxcbjotbW96LWZvY3VzcmluZyB7XFxyXFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXHJcXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei11aS1pbnZhbGlkIHtcXHJcXG5cXHRib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSW50ZXJhY3RpdmVcXHJcXG49PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHZhbHVlPVxcXCJFbnZpYXJcXFwiIGNsYXNzPVxcXCJmYS1idXR0b25cXFwiPi0tPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImZhLWJ1dHRvblxcXCI+RW52aWFyPC9idXR0b24+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgIFxcclxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxvZ29cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tbWVudVxcXCIgaWQ9XFxcImJ0bm1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBjbGFzcz1cXFwiaC02IHctNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBkPVxcXCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L3N2Zz5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwibWVudVxcXCIgaWQ9XFxcIm1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZmxleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAgaWQ9XFxcIm51ZXZhc1xcXCI+PGEgaHJlZj1cXFwiI1xcXCI+Q3JlYXIgRmFjdHVyYTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcInBvcHVsYXJlc1xcXCI+PGEgaHJlZj1cXFwiI1xcXCI+UmVzZXJ2YWNpb25lczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcImNhcnRlbGVyYVxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+Q2FydGVsZXJhIDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcImdlbmVyb1xcXCI+PGEgaHJlZj1cXFwiI1xcXCI+R8OpbmVybyA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFjZXJjYSBkZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgICAgICA8L25hdj5cXHJcXG5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWJ1c2NhclxcXCIgaWQ9XFxcImJ0bmJ1c2NhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGNsYXNzPVxcXCJoLTYgdy02IG1kOmgtMzYgbWQ6dy0zNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L3N2Zz5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcblxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiIGlkPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCIgaWQ9XFxcInNlYXJjaFxcXCIgY2xhc3M9XFxcInNlYXJjaFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuXFxyXFxuICAgIDwvaGVhZGVyPlxcclxcblxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBhY3Rpb249XFxcIlxcXCIgbWV0aG9kPVxcXCJcXFwiPlxcclxcbiAgICA8aDE+TG9naW48L2gxPlxcclxcbiAgICA8ZmEtdGV4dGZpZWxkIGZvcj1cXFwiZW1haWxcXFwiIHRleHQ9XFxcIkVtYWlsXFxcIj48L2ZhLXRleHRmaWVsZD5cXHJcXG4gICAgPGZhLXRleHRmaWVsZCBmb3I9XFxcInBhc3N3b3JkXFxcIiB0ZXh0PVxcXCJQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiPjwvZmEtdGV4dGZpZWxkPlxcclxcbiAgICA8ZmEtYnV0dG9uPjwvZmEtYnV0dG9uPlxcclxcbjwvZm9ybT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JvdXBcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcmVxdWlyZWQgaWQ9XFxcIlxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoaWdobGlnaHRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImJhclxcXCI+PC9zcGFuPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPjwvbGFiZWw+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImJ1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTI2NEFFO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6ICNFMUY1RkU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5zcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM3NDdlYTc7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGZvcndhcmRzO1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZVxcclxcbntcXHJcXG4gIDAlXFxyXFxuICB7XFxyXFxuICAgIHdpZHRoOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxuICAxMDAlXFxyXFxuICB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImhlYWRlcntcXHJcXG4gICAgcGFkZGluZzoxcmVtO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcbi5mbGV4e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVue1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5qdXN0aWZ5LWNlbnRlcntcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5pdGVtcy1jZW50ZXJ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idG4tbWVudXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM5NThCQjY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiBhdXRvOztcXHJcXG4gICAgXFxyXFxufVxcclxcbi5idG4tYnVzY2FyIHN2Z3tcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuLmJ0bi1idXNjYXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjOTU4QkI2O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqL1xcclxcbmZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuaDF7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuLyogZm9ybSBzdGFydGluZyBzdHlsaW5ncyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLmdyb3VwIFxcdFxcdFxcdCAgeyBcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcXHJcXG4gIG1hcmdpbi1ib3R0b206NDVweDsgXFxyXFxufVxcclxcbmlucHV0IFxcdFxcdFxcdFxcdHtcXHJcXG4gIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgcGFkZGluZzoxMHB4IDEwcHggMTBweCA1cHg7XFxyXFxuICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgd2lkdGg6MzAwcHg7XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM3NTc1NzU7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzIFxcdFxcdHsgb3V0bGluZTpub25lOyB9XFxyXFxuXFxyXFxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxubGFiZWwgXFx0XFx0XFx0XFx0IHtcXHJcXG4gIGNvbG9yOiM5OTk7IFxcclxcbiAgZm9udC1zaXplOjE4cHg7XFxyXFxuICBmb250LXdlaWdodDpub3JtYWw7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICBsZWZ0OjVweDtcXHJcXG4gIHRvcDoxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhY3RpdmUgc3RhdGUgKi9cXHJcXG5pbnB1dDpmb2N1cyB+IGxhYmVsLCBpbnB1dDp2YWxpZCB+IGxhYmVsIFxcdFxcdHtcXHJcXG4gIHRvcDotMjBweDtcXHJcXG4gIGZvbnQtc2l6ZToxNHB4O1xcclxcbiAgY29sb3I6IzUyNjRBRTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmJhciBcXHR7IHBvc2l0aW9uOnJlbGF0aXZlOyBkaXNwbGF5OmJsb2NrOyB3aWR0aDozMDBweDsgfVxcclxcbi5iYXI6YmVmb3JlLCAuYmFyOmFmdGVyIFxcdHtcXHJcXG4gIGNvbnRlbnQ6Jyc7XFxyXFxuICBoZWlnaHQ6MnB4OyBcXHJcXG4gIHdpZHRoOjA7XFxyXFxuICBib3R0b206MXB4OyBcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDojNTI2NEFFOyBcXHJcXG4gIHRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXFxyXFxuICAtbW96LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcXHJcXG59XFxyXFxuLmJhcjpiZWZvcmUge1xcclxcbiAgbGVmdDo1MCU7XFxyXFxufVxcclxcbi5iYXI6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6NTAlOyBcXHJcXG59XFxyXFxuXFxyXFxuLyogYWN0aXZlIHN0YXRlICovXFxyXFxuaW5wdXQ6Zm9jdXMgfiAuYmFyOmJlZm9yZSwgaW5wdXQ6Zm9jdXMgfiAuYmFyOmFmdGVyIHtcXHJcXG4gIHdpZHRoOjUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6NjAlOyBcXHJcXG4gIHdpZHRoOjEwMHB4OyBcXHJcXG4gIHRvcDoyNSU7IFxcclxcbiAgbGVmdDowO1xcclxcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gIG9wYWNpdHk6MC41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhY3RpdmUgc3RhdGUgKi9cXHJcXG5pbnB1dDpmb2N1cyB+IC5oaWdobGlnaHQge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxyXFxuICAtbW96LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXHJcXG4gIGFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcclxcblxcdGZyb20geyBiYWNrZ3JvdW5kOiM1MjY0QUU7IH1cXHJcXG4gIHRvIFxcdHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmFjdHVyZXJvLmdsb2JhbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmFjdHVyZXJvLmdsb2JhbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaHRtbCBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9idXR0b24uY29tcG9uZW50LmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBsZXQgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJpcHBsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHJpcHBsZXMuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG4gICAgICAgICAgICByaXBwbGVzLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHJpcHBsZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJpcHBsZXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZhLWJ1dHRvbicsIEJ1dHRvbldlYkNvbXBvbmVudClcclxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlcldlYkNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID1gPHN0eWxlPiR7Y3NzfTwvc3R5bGU+YCArIGh0bWw7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZhLWhlYWRlcicsIEhlYWRlcldlYkNvbXBvbmVudClcclxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9sb2dpbi5jb21wb25lbnQuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbldlYkNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZhLWxvZ2luJywgTG9naW5XZWJDb21wb25lbnQpXHJcbiIsImltcG9ydCBodG1sIGZyb20gJy4vdGV4dGZpZWxkLmNvbXBvbmVudC5odG1sJztcclxuaW1wb3J0IGNzcyBmcm9tICcuL3RleHRmaWVsZC5jb21wb25lbnQuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0ZmllbGRXZWJDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9YDxzdHlsZT4ke2Nzc308L3N0eWxlPmAgKyBodG1sO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpLmh0bWxGb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJykuaW5uZXJIVE1MID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW5wdXQnKS5pZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW5wdXQnKS5uYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpO1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJykpe1xyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW5wdXQnKS50eXBlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmYS10ZXh0ZmllbGQnLCBUZXh0ZmllbGRXZWJDb21wb25lbnQpXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBCdXR0b25XZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhlYWRlcldlYkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGV4dGZpZWxkV2ViQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0ZmxpZWQvdGV4dGZpZWxkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dpbldlYkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCAnLi8uLi9zdHlsZS9mYWN0dXJlcm8uZ2xvYmFsLnNjc3MnO1xyXG5jb25zb2xlLmxvZygnSG9sYScpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=