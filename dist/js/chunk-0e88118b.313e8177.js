(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e88118b"],{"004a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-item"},[n("form",{staticClass:"mb-3",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("b-form-input",{attrs:{placeholder:"Add something to the "+t.namespace},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}},model:{value:t.itemText,callback:function(e){t.itemText=e},expression:"itemText"}})],1)])},i=[],a={name:"NewItemForm",props:["namespace"],data:function(){return{itemText:""}},methods:{submitForm:function(){this.itemText&&("kanban"==this.namespace?this.$store.commit(this.namespace+"/addItem",{text:this.itemText}):(console.log("route",this.$route),this.$store.dispatch(this.namespace+"/addItem",{text:this.itemText})),this.itemText="")}}},o=a,m=(n("f6a2"),n("2877")),c=Object(m["a"])(o,s,i,!1,null,null,null);e["default"]=c.exports},ac5c:function(t,e,n){},f6a2:function(t,e,n){"use strict";n("ac5c")}}]);
//# sourceMappingURL=chunk-0e88118b.313e8177.js.map