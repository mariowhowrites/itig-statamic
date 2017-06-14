/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DistributionsTable_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DistributionsTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DistributionsTable_vue__);


var app = new Vue({
    el: '#app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_0__DistributionsTable_vue___default.a);
    }
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            states: [],
            search: '',
            sortKey: 'euip',
            reverse: false,
            columns: ['State', 'EUIP', 'Percentage', 'IR Allocation', 'Infrastructure Allocation', 'Total State Allocation'],
            url: location.protocol + '//' + location.host
        };
    },

    computed: {
        filteredStates: function filteredStates() {
            return _.filter(this.states, this.searchContains);
        }
    },
    filters: {},
    methods: {
        getStates: function getStates() {
            var _this = this;

            axios.get(this.url + '/!/PHPtoVue/collection').then(function (res) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _.values(res.data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var state = _step.value;

                        _this.states.push(state);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                _this.sortBy('euip');
            });
        },
        capitalize: function capitalize(val) {

            // gotta love those edges
            if ('d.c.' === val) {
                return 'D.C.';
            }

            // we have a slug. take the -'s out, capitalize each word, put spaces in.
            return _.map(val.split('-'), function (str) {
                return _.capitalize(str);
            }).join(" ");
        },
        sortBy: function sortBy(column) {
            column = column.toLowerCase();
            // is column equal to state? convert to slug, to match Statamic data. TODO: update data model
            column = column == 'state' ? 'slug' : column;
            // if we're already sorting by this category, reverse order
            if (this.sortKey == column) {
                this.states = this.states.reverse();
            } else {
                this.states = _.sortBy(this.states, column).reverse();
                this.sortKey = column;
            }
        },
        searchContains: function searchContains(value) {
            //return true if the provided value contains the search query. As -1 indicates no match, anything else means a match.
            return value.slug.search(this.search.toLowerCase()) != -1;
        }
    },
    created: function created() {
        console.log(this.url);
        this.getStates();
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\mario\\Code\\statamic\\itig-statamic\\site\\themes\\itig\\core\\js\\components\\DistributionsTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DistributionsTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41008c8a", Component.options)
  } else {
    hotAPI.reload("data-v-41008c8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "distributions-table section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('table', {
    staticClass: "table is-bordered is-striped"
  }, [_c('thead', [_c('tr', _vm._l((_vm.columns), function(column) {
    return _c('th', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.sortBy(column)
        }
      }
    }, [_vm._v("\n                        " + _vm._s(column) + "\n                        ")])])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.filteredStates), function(state) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.capitalize(state.slug)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(state.euip))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(state.percentage))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(state.ir_allocation))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(state.infrastructure_allocation))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(state.total_state_allocation))])])
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41008c8a", module.exports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);