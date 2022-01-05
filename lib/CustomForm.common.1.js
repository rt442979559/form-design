((typeof self !== 'undefined' ? self : this)["webpackJsonpCustomForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCustomForm"] || []).push([[1],{

/***/ "4891":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a16b0f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widget-form/widget-form-list/wg-formlist.vue?vue&type=template&id=43db8661&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Draggable',{staticClass:"widget-form-list wg-padding",class:{'widget-empty': _vm.item.list.length === 0},attrs:{"group":{ name:'widget',put:!_vm.dragWg.hasOwnProperty('list')},"ghostClass":"ghost","swapThreshold":0.6,"animation":100},on:{"add":_vm.handleWidgetAdd},model:{value:(_vm.item.list),callback:function ($$v) {_vm.$set(_vm.item, "list", $$v)},expression:"item.list"}},[_vm._l((_vm.item.list),function(formItem,i){return [_c('WidgetFormList',{key:formItem.key,attrs:{"item":formItem,"index":i,"data":_vm.item.list}})]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widget-form/widget-form-list/wg-formlist.vue?vue&type=template&id=43db8661&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: external "Vuex"
var external_Vuex_ = __webpack_require__("5880");

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__("289a");
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// EXTERNAL MODULE: ./src/components/widget-form/widget-form-list/index.vue + 99 modules
var widget_form_list = __webpack_require__("eb85");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widget-form/widget-form-list/wg-formlist.vue?vue&type=script&lang=js&


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



/* harmony default export */ var wg_formlistvue_type_script_lang_js_ = ({
  name: 'FormList',
  components: {
    Draggable: external_vuedraggable_default.a,
    WidgetFormList: widget_form_list["a" /* default */]
  },
  props: {
    item: Object,
    index: Number,
    data: Array
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(external_Vuex_["mapState"])({
    selectWg: function selectWg(state) {
      return state.common.selectWg;
    },
    dragWg: function dragWg(state) {
      return state.common.dragWg;
    }
  })),
  methods: {
    handleWidgetAdd: function handleWidgetAdd(evt) {
      var newIndex = evt.newIndex;
      this.$store.commit('setSelectWg', this.item.list[newIndex]);
      this.$store.commit('setConfigTab', "widget");
    }
  }
});
// CONCATENATED MODULE: ./src/components/widget-form/widget-form-list/wg-formlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var widget_form_list_wg_formlistvue_type_script_lang_js_ = (wg_formlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/widget-form/widget-form-list/wg-formlist.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widget_form_list_wg_formlistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wg_formlist = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);