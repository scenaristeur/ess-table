(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspace"],{"20b0":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._v(" Workspace "),s("EditableSpan",{model:{value:e.workspace.name,callback:function(t){e.$set(e.workspace,"name",t)},expression:"workspace.name"}}),e._v(" / "+e._s(e.workspace.bases.length)+" bases "),s("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[s("b-icon-plus"),e._v(" Add a base")],1),s("br"),e._v(" [ start with template, import a spreadsheet, start from scratch] "),s("b-table",{attrs:{hover:"",items:e.workspace.bases,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(tables)",fn:function(t){return[e._v(" "+e._s(t.item.tables.length)+" ")]}}])})],1)},n=[],o=(s("d3b7"),{name:"Workspace",components:{EditableSpan:function(){return s.e("chunk-573cb764").then(s.bind(null,"1cd0"))}},data:function(){return{}},created:function(){this.workspace=this.$store.state.table.workspace,console.log(this.workspace)},methods:{add:function(){this.workspace.bases.unshift({name:"new base",tables:[],url:""}),this.$store.commit("table/setWorkspaces",this.workspaces)},onRowSelected:function(e){console.log(e),this.$store.commit("table/setBase",e[0]),this.$router.push("Base")}},computed:{workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}}}}),c=o,r=s("2877"),l=Object(r["a"])(c,a,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=workspace.d31ed1a7.js.map