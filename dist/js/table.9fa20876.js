(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"3f0e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._v(" TABLE "),n("EditableSpan",{model:{value:e.table.name,callback:function(t){e.$set(e.table,"name",t)},expression:"table.name"}}),n("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[n("b-icon-plus"),e._v(" Add a row")],1),n("b-table",{attrs:{hover:"",items:e.items,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRecordSelected}}),n("b-modal",{attrs:{id:"modal-record"},on:{ok:e.onValidModal},scopedSlots:e._u([{key:"modal-title",fn:function(){return[n("EditableSpan",{model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})]},proxy:!0}])},[n("p",{staticClass:"my-4"},[e._v("Hello from modal!")])])],1)},l=[],a=(n("d3b7"),{name:"Table",components:{EditableSpan:function(){return n.e("chunk-573cb764").then(n.bind(null,"1cd0"))}},data:function(){return{items:[{name:"record1",fields:"?",url:""},{name:"record2",fields:"?",url:""},{name:"record3",fields:"?",url:""},{name:"record4",fields:"?",url:""}],record:{}}},methods:{add:function(){this.items.unshift({name:"new record",fields:"?",url:""})},onValidModal:function(){console.log(this.record)},onRecordSelected:function(e){console.log(e),e.length>0&&(this.record=e[0],this.$bvModal.show("modal-record"))}},computed:{table:{get:function(){return this.$store.state.table.table},set:function(){}}}}),r=a,d=n("2877"),c=Object(d["a"])(r,o,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=table.9fa20876.js.map