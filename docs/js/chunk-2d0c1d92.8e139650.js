(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d92"],{4891:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Draggable",{staticClass:"widget-form-list wg-padding",class:{"widget-empty":0===t.item.list.length},attrs:{group:{name:"widget",put:!t.dragWg.hasOwnProperty("list")},ghostClass:"ghost",swapThreshold:.6,animation:100},on:{add:t.handleWidgetAdd},model:{value:t.item.list,callback:function(e){t.$set(t.item,"list",e)},expression:"item.list"}},[t._l(t.item.list,(function(e,s){return[i("WidgetFormList",{key:e.key,attrs:{item:e,index:s,data:t.item.list}})]}))],2)},n=[],a=(i("a9e3"),i("5530")),o=i("5880"),r=i("289a"),d=i.n(r),l=i("eb85"),m={name:"FormList",components:{Draggable:d.a,WidgetFormList:l["a"]},props:{item:Object,index:Number,data:Array},computed:Object(a["a"])({},Object(o["mapState"])({selectWg:function(t){return t.common.selectWg},dragWg:function(t){return t.common.dragWg}})),methods:{handleWidgetAdd:function(t){var e=t.newIndex;this.$store.commit("setSelectWg",this.item.list[e]),this.$store.commit("setConfigTab","widget")}}},c=m,g=i("2877"),u=Object(g["a"])(c,s,n,!1,null,null,null);e["default"]=u.exports}}]);