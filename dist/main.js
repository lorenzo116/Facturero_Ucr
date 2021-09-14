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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: red;\n  --secondary-color:#968BE2;\n}", "",{"version":3,"sources":["webpack://./src/style/facturero.global.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,yBAAA;AACJ","sourcesContent":[":root{\r\n    --main-color: red;\r\n    --secondary-color:#968BE2;\r\n}"],"sourceRoot":""}]);
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

module.exports = "<div>\r\n    <button>hola</button>\r\n</div>";

/***/ }),

/***/ "./src/js/components/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/js/components/header/header.component.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "    <header >\r\n        <img class=\"logo\" src=\"../src/img/logo_192.png\" alt=\"\">\r\n        <nav class=\"menu\" id=\"menu\">\r\n            <ul class=\"flex\">\r\n                <li  id=\"nuevas\"><a href=\"#\">Crear Factura</a></li>\r\n                <li id=\"populares\"><a href=\"#\">Reservaciones</a></li>\r\n            </ul>\r\n\r\n        </nav>\r\n        <a href=\"\">Cerrar Sesion</a>\r\n\r\n    </header>\r\n\r\n";

/***/ }),

/***/ "./src/js/components/logincard.component/logincard.component.html":
/*!************************************************************************!*\
  !*** ./src/js/components/logincard.component/logincard.component.html ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "    <form class=\"card justify-between items-center\">        \r\n            <img class=\"logo\" src=\"../src/img/logo_192.png\" alt=\"\">\r\n            <label >Iniciar sesion</label>\r\n            <input type=\"text\" placeholder=\"Usuario\">\r\n            <input type=\"password\" placeholder=\"Contraseña\">\r\n            <div class=\"registrarse\">\r\n                <a href=\"\">Registrarse</a>\r\n                <button>Acceptar</button>\r\n            </div>  \r\n            <a class=\"olvido\" href=\"./src/views/registrarse.html\">¿Olvido su contraseña o su usuario?<a>\r\n    </div></div>";

/***/ }),

/***/ "./src/js/components/navegation.drawer/navegation.drawer.component.html":
/*!******************************************************************************!*\
  !*** ./src/js/components/navegation.drawer/navegation.drawer.component.html ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <div class=\"profile\">\r\n        <p>Este campo es para la informacion de la cuenta que esta logeada</p>\r\n    </div>\r\n    <div class=\"menu\">\r\n        <nav class=\"lista\">\r\n            <ul>\r\n                <li><a href=\"\"> Administrar datos de los clientes</a></li>\r\n                <li><a href=\"\"> Administrar datos de los Usuarios</a></li>\r\n                <li><a href=\"\"> Administrar permisos y accesos</a></li>\r\n                <li><a href=\"\"> Administrar datos del hotel</a></li>\r\n                <li><a href=\"\"> Administrar datos especiales</a></li>\r\n                <li><a href=\"\"> Configuracion</a></li>\r\n                \r\n            </ul>\r\n        </nav>\r\n    </div>\r\n    \r\n</div>";

/***/ }),

/***/ "./src/js/components/signincard.components/signincard.component.html":
/*!***************************************************************************!*\
  !*** ./src/js/components/signincard.components/signincard.component.html ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<form class =\"card\">\r\n    <div class=\"data\">       \r\n\r\n        <h4>Registrarse</h4>\r\n        <div class=\"names\">\r\n                <input type=\"text\" class=\"firstname\" placeholder=\"Nombre\">\r\n                <input type=\"text\" class=\"lastname\" placeholder=\"Apellido\">\r\n        </div>            \r\n        <input type=\"text\" placeholder=\"Usuario\">\r\n        <input type=\"password\" placeholder=\"Contraseña\">\r\n        <div class=\"check\">\r\n            <input type=\"checkbox\" class=\"mostrar\"> \r\n            <label>Mostrar contraseña</label>\r\n        </div>\r\n        <div>\r\n                <button>Atras</button>\r\n                <button>Siguiente</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"logo-info\">\r\n        <img src=\"../src/img/logo_192.png\" alt=\"\"> \r\n        <p>Si necesita ayuda, comuniquese con el gerente</p>\r\n    </div>\r\n            \r\n</div>";

/***/ }),

/***/ "./src/js/components/button/button.component.css":
/*!*******************************************************!*\
  !*** ./src/js/components/button/button.component.css ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "div{\r\n    background-color: var(--main-color,blue);\r\n}\r\n";

/***/ }),

/***/ "./src/js/components/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/js/components/header/header.component.css ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "header{\r\n    padding:1rem;\r\n    display:flex;\r\n    justify-content:space-between;\r\n    background-color: var(--secondary-color);\r\n}\r\n.menu{\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 0;\r\n    \r\n    width: 100%;\r\n    top: 65px; \r\n}\r\n.menu ul{\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.menu ul li a{\r\n    padding: .5rem 1rem;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n}\r\n.menu ul li a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n.btn-menu{\r\n    background-color:  #958BB6;\r\n    color: white;\r\n    border: none;\r\n    padding: auto;;\r\n    \r\n}\r\n.btn-buscar svg{\r\n    width: 32px;\r\n    height: 32px;\r\n   \r\n}\r\n.btn-buscar{\r\n    background-color:  #958BB6;\r\n    color: white;\r\n    border: none;\r\n    margin-left: auto;\r\n    display: block;\r\n}\r\nimg{\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\na{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    text-decoration: none;\r\n}";

/***/ }),

/***/ "./src/js/components/logincard.component/logincard.component.css":
/*!***********************************************************************!*\
  !*** ./src/js/components/logincard.component/logincard.component.css ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".card{\r\n    background-color: white;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    border-style: solid;\r\n    border-width: thin;\r\n    border-color: gray;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: auto;\r\n    width: 400px;\r\n}\r\nlabel{\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\ninput{\r\n    background-color: rgb(213, 213, 228);\r\n    width: 200px;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    text-align: left;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    background-color: transparent;\r\n    margin: 10px;\r\n    border-style: solid;\r\n}\r\nimg{\r\n    text-align: center;\r\n    margin-top: 10%;\r\n    width: 110px;\r\n    height: 110px;\r\n}\r\na{\r\n    color: black;\r\n    text-decoration: none;\r\n    margin: 10px;\r\n}\r\nbutton{\r\n    width: 75px;\r\n    height: 30;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    margin: 10px;\r\n}\r\nimg{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.buttom{\r\ndisplay: flex;\r\njustify-content: center;\r\n}\r\n\r\n";

/***/ }),

/***/ "./src/js/components/navegation.drawer/navegation.drawer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/js/components/navegation.drawer/navegation.drawer.component.css ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "div{\r\n    background-color: lightpink;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n.profile{\r\n    width: 100%;\r\n    height: 250px;\r\n    border-style: solid;\r\n    border-width: thin;\r\n}\r\n.menu{\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\na{\r\n    padding: .5rem 1rem;\r\n    color: black;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    font: optional;\r\n}\r\na:hover{\r\n    text-decoration: underline;\r\n}\r\nul{\r\n    height: 100%;\r\n    list-style: none;\r\n    display: block;\r\n}\r\n\r\nmenu::-webkit-scrollbar {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nmenu::-webkit-scrollbar:vertical {\r\n\r\n    width:10px;\r\n}\r\n\r\nmenu::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {\r\n    display: none;\r\n} \r\n\r\nmenu::-webkit-scrollbar:horizontal {\r\n    height: 10px;\r\n\r\n}\r\nmenu::-webkit-scrollbar-thumb {\r\n    background-color: #797979;\r\n    border-radius: 20px;\r\n    border: 2px solid #f1f2f3;\r\n    margin: 1rem;\r\n}\r\n\r\nmenu::-webkit-scrollbar-track {\r\n    border-radius: 10px;  \r\n    margin: 1rem;\r\n}\r\n \r\n ";

/***/ }),

/***/ "./src/js/components/signincard.components/signincard.component.css":
/*!**************************************************************************!*\
  !*** ./src/js/components/signincard.components/signincard.component.css ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".card{\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    border-style: solid;\r\n    border-width: thin;\r\n    border-color: gray;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 500px;\r\n    \r\n}\r\ninput{\r\n    background-color: rgb(213, 213, 228);\r\n    width: 245px;\r\n    height: 30px;\r\n    font-family: inherit;\r\n    text-align: left;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    background-color: transparent;\r\n    border-style: solid;\r\n    margin: 10px;\r\n}\r\n.names{\r\n    display: flex;\r\n}\r\n.firstname{\r\n    width: 110px;\r\n}\r\n.lastname{\r\n    width: 110px;\r\n}\r\n.mostrar{\r\nwidth: 20px;\r\n}\r\n.check{\r\n    align-items: center;\r\n    display: flex;\r\n    margin: 10px;\r\n}\r\nlabel{\r\n    margin: 5px;\r\n}\r\nbutton{\r\n    width: 75px;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    margin: 10px;\r\n    height: 30;\r\n}\r\n.data{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nimg{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\np{\r\n    font-size: 10px;\r\n}\r\nh4{\r\n    margin: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.logo-info{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    margin: auto;\r\n    }";

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

/***/ "./src/js/components/logincard.component/logincard.component.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/logincard.component/logincard.component.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCardWebComponent": () => (/* binding */ LoginCardWebComponent)
/* harmony export */ });
/* harmony import */ var _logincard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logincard.component.html */ "./src/js/components/logincard.component/logincard.component.html");
/* harmony import */ var _logincard_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logincard_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logincard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logincard.component.css */ "./src/js/components/logincard.component/logincard.component.css");
/* harmony import */ var _logincard_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logincard_component_css__WEBPACK_IMPORTED_MODULE_1__);



class LoginCardWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_logincard_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_logincard_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-logincard', LoginCardWebComponent)


/***/ }),

/***/ "./src/js/components/navegation.drawer/navegation.drawer.component.js":
/*!****************************************************************************!*\
  !*** ./src/js/components/navegation.drawer/navegation.drawer.component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavegationDrawerWebComponent": () => (/* binding */ NavegationDrawerWebComponent)
/* harmony export */ });
/* harmony import */ var _navegation_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navegation.drawer.component.html */ "./src/js/components/navegation.drawer/navegation.drawer.component.html");
/* harmony import */ var _navegation_drawer_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navegation_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navegation_drawer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navegation.drawer.component.css */ "./src/js/components/navegation.drawer/navegation.drawer.component.css");
/* harmony import */ var _navegation_drawer_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navegation_drawer_component_css__WEBPACK_IMPORTED_MODULE_1__);



class NavegationDrawerWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_navegation_drawer_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_navegation_drawer_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-navdrawer', NavegationDrawerWebComponent)


/***/ }),

/***/ "./src/js/components/signincard.components/signincard.component.js":
/*!*************************************************************************!*\
  !*** ./src/js/components/signincard.components/signincard.component.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInCardWebComponent": () => (/* binding */ SignInCardWebComponent)
/* harmony export */ });
/* harmony import */ var _signincard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signincard.component.html */ "./src/js/components/signincard.components/signincard.component.html");
/* harmony import */ var _signincard_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signincard_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signincard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signincard.component.css */ "./src/js/components/signincard.components/signincard.component.css");
/* harmony import */ var _signincard_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signincard_component_css__WEBPACK_IMPORTED_MODULE_1__);



class SignInCardWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${(_signincard_component_css__WEBPACK_IMPORTED_MODULE_1___default())}</style>` + (_signincard_component_html__WEBPACK_IMPORTED_MODULE_0___default());
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-signincard', SignInCardWebComponent)


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
/* harmony import */ var _components_logincard_component_logincard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/logincard.component/logincard.component */ "./src/js/components/logincard.component/logincard.component.js");
/* harmony import */ var _components_signincard_components_signincard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/signincard.components/signincard.component */ "./src/js/components/signincard.components/signincard.component.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/js/components/header/header.component.js");
/* harmony import */ var _components_navegation_drawer_navegation_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navegation.drawer/navegation.drawer.component */ "./src/js/components/navegation.drawer/navegation.drawer.component.js");
/* harmony import */ var _style_facturero_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../style/facturero.global.scss */ "./src/style/facturero.global.scss");






console.log('Hola');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHNEO0FBQ0Y7QUFDcEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5RUFBRyxDQUFDLFlBQVksMEVBQUk7QUFDMUQsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QrQztBQUNGO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0VBQUcsQ0FBQyxZQUFZLG1FQUFJO0FBQzFELDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEU7QUFDbUI7QUFDSTtBQUN2QjtBQUNnQztBQUNoRTtBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL1BydWViYTEvLi9zcmMvc3R5bGUvZmFjdHVyZXJvLmdsb2JhbC5zY3NzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9naW5jYXJkLmNvbXBvbmVudC9sb2dpbmNhcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmVnYXRpb24uZHJhd2VyL25hdmVnYXRpb24uZHJhd2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9zaWduaW5jYXJkLmNvbXBvbmVudHMvc2lnbmluY2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ2luY2FyZC5jb21wb25lbnQvbG9naW5jYXJkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmVnYXRpb24uZHJhd2VyL25hdmVnYXRpb24uZHJhd2VyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL3NpZ25pbmNhcmQuY29tcG9uZW50cy9zaWduaW5jYXJkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9zdHlsZS9mYWN0dXJlcm8uZ2xvYmFsLnNjc3M/NzZhYiIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BydWViYTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ2luY2FyZC5jb21wb25lbnQvbG9naW5jYXJkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9QcnVlYmExLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2ZWdhdGlvbi5kcmF3ZXIvbmF2ZWdhdGlvbi5kcmF3ZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovL1BydWViYTEvLi9zcmMvanMvY29tcG9uZW50cy9zaWduaW5jYXJkLmNvbXBvbmVudHMvc2lnbmluY2FyZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BydWViYTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BydWViYTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QcnVlYmExL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUHJ1ZWJhMS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogcmVkO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6Izk2OEJFMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2ZhY3R1cmVyby5nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiByZWQ7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiM5NjhCRTI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxidXR0b24+aG9sYTwvYnV0dG9uPlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIgICAgPGhlYWRlciA+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4uL3NyYy9pbWcvbG9nb18xOTIucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJtZW51XFxcIiBpZD1cXFwibWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJmbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICBpZD1cXFwibnVldmFzXFxcIj48YSBocmVmPVxcXCIjXFxcIj5DcmVhciBGYWN0dXJhPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwicG9wdWxhcmVzXFxcIj48YSBocmVmPVxcXCIjXFxcIj5SZXNlcnZhY2lvbmVzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj5DZXJyYXIgU2VzaW9uPC9hPlxcclxcblxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiICAgIDxmb3JtIGNsYXNzPVxcXCJjYXJkIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcXFwiPiAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuLi9zcmMvaW1nL2xvZ29fMTkyLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCA+SW5pY2lhciBzZXNpb248L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiVXN1YXJpb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29udHJhc2XDsWFcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdHJhcnNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj5SZWdpc3RyYXJzZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5BY2NlcHRhcjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PiAgXFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm9sdmlkb1xcXCIgaHJlZj1cXFwiLi9zcmMvdmlld3MvcmVnaXN0cmFyc2UuaHRtbFxcXCI+wr9PbHZpZG8gc3UgY29udHJhc2XDsWEgbyBzdSB1c3VhcmlvPzxhPlxcclxcbiAgICA8L2Rpdj48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZVxcXCI+XFxyXFxuICAgICAgICA8cD5Fc3RlIGNhbXBvIGVzIHBhcmEgbGEgaW5mb3JtYWNpb24gZGUgbGEgY3VlbnRhIHF1ZSBlc3RhIGxvZ2VhZGE8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZW51XFxcIj5cXHJcXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcImxpc3RhXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPiBBZG1pbmlzdHJhciBkYXRvcyBkZSBsb3MgY2xpZW50ZXM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+IEFkbWluaXN0cmFyIGRhdG9zIGRlIGxvcyBVc3VhcmlvczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj4gQWRtaW5pc3RyYXIgcGVybWlzb3MgeSBhY2Nlc29zPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPiBBZG1pbmlzdHJhciBkYXRvcyBkZWwgaG90ZWw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+IEFkbWluaXN0cmFyIGRhdG9zIGVzcGVjaWFsZXM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+IENvbmZpZ3VyYWNpb248L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzID1cXFwiY2FyZFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGFcXFwiPiAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDxoND5SZWdpc3RyYXJzZTwvaDQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZmlyc3RuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tYnJlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJsYXN0bmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkFwZWxsaWRvXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc3VhcmlvXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvbnRyYXNlw7FhXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJtb3N0cmFyXFxcIj4gXFxyXFxuICAgICAgICAgICAgPGxhYmVsPk1vc3RyYXIgY29udHJhc2XDsWE8L2xhYmVsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkF0cmFzPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24+U2lndWllbnRlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ28taW5mb1xcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vc3JjL2ltZy9sb2dvXzE5Mi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gXFxyXFxuICAgICAgICA8cD5TaSBuZWNlc2l0YSBheXVkYSwgY29tdW5pcXVlc2UgY29uIGVsIGdlcmVudGU8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIFxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IsYmx1ZSk7XFxyXFxufVxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJoZWFkZXJ7XFxyXFxuICAgIHBhZGRpbmc6MXJlbTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuLm1lbnV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0b3A6IDY1cHg7IFxcclxcbn1cXHJcXG4ubWVudSB1bHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51IHVsIGxpIGF7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4ubWVudSB1bCBsaSBhOmhvdmVye1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0bi1tZW51e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzk1OEJCNjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IGF1dG87O1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmJ0bi1idXNjYXIgc3Zne1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG4uYnRuLWJ1c2NhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM5NThCQjY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmltZ3tcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuYXtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcbmxhYmVse1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTMsIDIxMywgMjI4KTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuaW1ne1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICBoZWlnaHQ6IDExMHB4O1xcclxcbn1cXHJcXG5he1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLmJ1dHRvbXtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuLnByb2ZpbGV7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcbi5tZW51e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5he1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250OiBvcHRpb25hbDtcXHJcXG59XFxyXFxuYTpob3ZlcntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcbnVse1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWVudTo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xcclxcblxcclxcbiAgICB3aWR0aDoxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tZW51Ojotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LC5jb250ZW5lZG9yOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxubWVudTo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxubWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMmYzO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbm1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcbiBcXHJcXG4gXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbmlucHV0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEzLCAyMTMsIDIyOCk7XFxyXFxuICAgIHdpZHRoOiAyNDVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcbi5uYW1lc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmZpcnN0bmFtZXtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbn1cXHJcXG4ubGFzdG5hbWV7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG59XFxyXFxuLm1vc3RyYXJ7XFxyXFxud2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5jaGVja3tcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5sYWJlbHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzA7XFxyXFxufVxcclxcbi5kYXRhe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWd7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxucHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5oNHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbmZve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmFjdHVyZXJvLmdsb2JhbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmFjdHVyZXJvLmdsb2JhbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaHRtbCBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9idXR0b24uY29tcG9uZW50LmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtYnV0dG9uJywgQnV0dG9uV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50LmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtaGVhZGVyJywgSGVhZGVyV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2xvZ2luY2FyZC5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9sb2dpbmNhcmQuY29tcG9uZW50LmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5DYXJkV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtbG9naW5jYXJkJywgTG9naW5DYXJkV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL25hdmVnYXRpb24uZHJhd2VyLmNvbXBvbmVudC5odG1sJztcclxuaW1wb3J0IGNzcyBmcm9tICcuL25hdmVnYXRpb24uZHJhd2VyLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmVnYXRpb25EcmF3ZXJXZWJDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9YDxzdHlsZT4ke2Nzc308L3N0eWxlPmAgKyBodG1sO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmYS1uYXZkcmF3ZXInLCBOYXZlZ2F0aW9uRHJhd2VyV2ViQ29tcG9uZW50KVxyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL3NpZ25pbmNhcmQuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4vc2lnbmluY2FyZC5jb21wb25lbnQuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5DYXJkV2ViQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPWA8c3R5bGU+JHtjc3N9PC9zdHlsZT5gICsgaHRtbDtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZmEtc2lnbmluY2FyZCcsIFNpZ25JbkNhcmRXZWJDb21wb25lbnQpXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBCdXR0b25XZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ2FyZFdlYkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW5jYXJkLmNvbXBvbmVudC9sb2dpbmNhcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25JbkNhcmRXZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZ25pbmNhcmQuY29tcG9uZW50cy9zaWduaW5jYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJXZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdmVnYXRpb25EcmF3ZXJXZWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmVnYXRpb24uZHJhd2VyL25hdmVnYXRpb24uZHJhd2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgJy4vLi4vc3R5bGUvZmFjdHVyZXJvLmdsb2JhbC5zY3NzJztcclxuY29uc29sZS5sb2coJ0hvbGEnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9