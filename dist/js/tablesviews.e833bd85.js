(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tablesviews"],{"4ce4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("h2",[e._v(e._s(e.name)+" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-base",modifiers:{"modal-base":!0}}],attrs:{variant:"outline-info",size:"sm"}},[a("b-icon-pen")],1)],1),a("a",{attrs:{href:e.base,target:"_blank"}},[e._v("base "),a("b-icon-link45deg")],1),a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""},on:{input:e.tabChanged},scopedSlots:e._u([{key:"tabs-end",fn:function(){return[a("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(t){return t.preventDefault(),e.addTable(t)}}},[a("b",[e._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[a("div",{staticClass:"text-center text-muted"},[e._v(" There is no Table for this Base"),a("br"),e._v(" Add a new one with the "),a("b",[e._v("+")]),e._v(" button. ")])]},proxy:!0}])},e._l(e.tables,(function(t,n){return a("b-tab",{key:"dyn-tab-"+n,scopedSlots:e._u([{key:"title",fn:function(){return[a("small",[a("Label",{attrs:{url:t,tick:e.tick}}),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-table",modifiers:{"modal-table":!0}}],staticClass:"ml-2",attrs:{variant:"outline-info",size:"sm"},on:{click:function(a){return e.setTableName(t)}}},[a("b-icon-pen",{attrs:{btn:""}})],1)],1)]},proxy:!0}],null,!0)},[a("hr"),a("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"},on:{click:e.newField}},[e._v("Add a Field")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-fields",modifiers:{"modal-fields":!0}}],attrs:{pill:"",variant:"outline-primary",size:"sm"}},[e._v("Edit Fields")]),a("TableView",{attrs:{url:t,fields:e.fields}})],1)})),1)],1),a("hr"),e._v(" Fields : "+e._s(e.fields)+" "),a("hr"),a("b-modal",{attrs:{id:"modal-base",title:"Rename"},on:{ok:e.edit_base_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the base"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-modal",{attrs:{id:"modal-table",title:"Rename"},on:{ok:e.edit_table_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the table"},model:{value:e.table_name,callback:function(t){e.table_name=t},expression:"table_name"}})],1),a("b-modal",{attrs:{id:"modal-fields",title:"Fields"},on:{ok:e.edit_fields}},[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},e._l(e.fields,(function(t,n){return a("div",{key:n},[0!=t.modifiable?a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+n,expression:"'accordion-'+index"}],attrs:{block:"",variant:"info"}},[e._v(e._s(t.key))])],1),a("b-collapse",{attrs:{id:"accordion-"+n,visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[a("b-input-group",{attrs:{prepend:"key"}},[a("b-form-input",{model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"field.key"}})],1),a("b-input-group",{attrs:{prepend:"type"}},[a("b-form-select",{attrs:{options:e.field_types},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"field.type"}})],1),a("b-input-group",{attrs:{prepend:"default value"}},[a("b-form-input",{model:{value:t.default,callback:function(a){e.$set(t,"default",a)},expression:"field.default"}})],1),e._v(" "+e._s(t)+" "),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.remove(t)}}},[e._v("Remove")])],1)],1)],1)],1):e._e()],1)})),0)]),a("RecordModal",{attrs:{fields:e.fields}})],1)},r=[],i=(a("4de4"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),s=a("6655"),o=a.n(s),l={name:"TablesView",components:{TableView:function(){return a.e("chunk-2d209534").then(a.bind(null,"a928"))},Label:function(){return a.e("chunk-2d20fb75").then(a.bind(null,"b58d"))},RecordModal:function(){return a.e("chunk-7e012628").then(a.bind(null,"0ab4"))}},data:function(){return{name:"",table_name:"",tick:new Date,field_types:[{value:"single_line_text",text:"Single Line Text"},{value:"single_select",text:"Single Select"},{value:"link",text:"Link to another Record or Resource"},{value:"numeric",text:"Numeric"},{value:"boolean",text:"Boolean"},{value:"tristate",text:"Tristate"},{value:"phone",text:"Phone"},{value:"location",text:"Location"}],default_fields:[{key:"label",sortable:!0,modifiable:!1,stickyColumn:!0,isRowHeader:!0,variant:"primary"},{key:"notes",sortable:!0,modifiable:!1},{key:"attachments",modifiable:!1,variant:"secondary"},{key:"url",modifiable:!1,variant:"secondary"}],fields:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},methods:{newField:function(){this.fields.push({key:"new field"})},remove:function(e){console.log(e),this.fields=this.fields.filter((function(t){return t.key!==e.key}))},tabChanged:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("TAB CHANGED",e),console.log(t.tables[e]),t.table=t.tables[e],console.log(t.table),a.next=6,o.a[t.table]["https://www.w3.org/ns/ui#FieldList"];case 6:if(n=a.sent,void 0!=n){a.next=11;break}a.t0=t.default_fields,a.next=16;break;case 11:return a.t1=JSON,a.next=14,o.a[t.table]["https://www.w3.org/ns/ui#FieldList"];case 14:a.t2=a.sent,a.t0=a.t1.parse.call(a.t1,a.t2);case 16:r=a.t0,console.log(r),t.fields=r;case 19:case"end":return a.stop()}}),a)})))()},edit_fields:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fields",e.fields),console.log(e.table),t.next=4,o.a[e.table]["https://www.w3.org/ns/ui#FieldList"].set(JSON.stringify(e.fields));case 4:case"end":return t.stop()}}),t)})))()},edit_base_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a[e.base].label.set(e.name);case 2:case"end":return t.stop()}}),t)})))()},edit_table_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a[e.table].label.set(e.table_name);case 2:e.$store.dispatch("table/getTables");case 3:case"end":return t.stop()}}),t)})))()},setTableName:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.table=e,a.next=3,o.a[e].label;case 3:n=a.sent,t.table_name="".concat(n);case 5:case"end":return a.stop()}}),a)})))()},addTable:function(){var e={path:this.storage+this.privacy+"/table/tables/",name:"___table name___",base:this.base};this.$store.dispatch("table/addTable",e)}},watch:{base:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},tables:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tick=new Date;case 1:case"end":return t.stop()}}),t)})))()}},computed:{tables:{get:function(){return this.$store.state.table.tables},set:function(){}},base:{get:function(){return this.$store.state.table.base},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}}}},c=l,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=d.exports},"4de4":function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").filter,i=a("1dde"),s=a("ae40"),o=i("filter"),l=s("filter");n({target:"Array",proto:!0,forced:!o||!l},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},ae40:function(e,t,a){var n=a("83ab"),r=a("d039"),i=a("5135"),s=Object.defineProperty,o={},l=function(e){throw e};e.exports=function(e,t){if(i(o,e))return o[e];t||(t={});var a=[][e],c=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:l,d=i(t,1)?t[1]:void 0;return o[e]=!!a&&!r((function(){if(c&&!n)return!0;var e={length:-1};c?s(e,1,{enumerable:!0,get:l}):e[1]=1,a.call(e,u,d)}))}}}]);
//# sourceMappingURL=tablesviews.e833bd85.js.map