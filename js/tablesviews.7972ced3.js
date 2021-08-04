(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tablesviews"],{"4ce4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("h2",[e._v(e._s(e.name)+" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-base",modifiers:{"modal-base":!0}}],attrs:{variant:"outline-info",size:"sm"}},[a("b-icon-pen")],1),a("ForkButton",{attrs:{url:e.base}})],1),a("a",{attrs:{href:e.base,target:"_blank"}},[e._v("base "),a("b-icon-link45deg")],1),e._v(" | "),a("a",{attrs:{href:"https://scenaristeur.github.io/ipgs?url="+e.base,target:"_blank"}},[e._v("base graphe "),a("b-icon-gear-wide-connected")],1),a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""},on:{input:e.tabChanged},scopedSlots:e._u([{key:"tabs-end",fn:function(){return[a("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(t){return t.preventDefault(),e.addTable.apply(null,arguments)}}},[a("b",[e._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[a("div",{staticClass:"text-center text-muted"},[e._v(" There is no Table for this Base"),a("br"),e._v(" Add a new one with the "),a("b",[e._v("+")]),e._v(" button. ")])]},proxy:!0}])},e._l(e.tables,(function(t,n){return a("b-tab",{key:"dyn-tab-"+n,staticClass:"p-0",scopedSlots:e._u([{key:"title",fn:function(){return[a("small",[a("Label",{attrs:{url:t,tick:e.tick}}),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-table",modifiers:{"modal-table":!0}}],staticClass:"ml-2",attrs:{variant:"outline-info",size:"sm"},on:{click:function(a){return e.setTableName(t)}}},[a("b-icon-pen",{attrs:{btn:""}})],1)],1)]},proxy:!0}],null,!0)},[a("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"},on:{click:e.newField}},[e._v("Add a Field")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-fields",modifiers:{"modal-fields":!0}}],attrs:{pill:"",variant:"outline-primary",size:"sm"}},[e._v("Edit Fields")]),a("TableView",{attrs:{url:t,fields:e.fields,default_fields:e.default_fields}})],1)})),1)],1),a("hr"),e._v(" Fields : "+e._s(e.fields)+" "),a("hr"),a("b-modal",{attrs:{id:"modal-base",title:"Rename"},on:{ok:e.edit_base_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the base"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-modal",{attrs:{id:"modal-table",title:"Rename"},on:{ok:e.edit_table_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the table"},model:{value:e.table_name,callback:function(t){e.table_name=t},expression:"table_name"}})],1),a("b-modal",{attrs:{id:"modal-fields",title:"Fields"},on:{ok:e.edit_fields}},[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},e._l(e.fields,(function(t,n){return a("div",{key:n},[0!=t.modifiable?a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+n,expression:"'accordion-'+index"}],attrs:{block:"",variant:"info"}},[e._v(e._s(t.key))])],1),a("b-collapse",{attrs:{id:"accordion-"+n,visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[a("b-input-group",{attrs:{prepend:"key"}},[a("b-form-input",{model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"field.key"}})],1),a("b-input-group",{attrs:{prepend:"type"}},[a("b-form-select",{attrs:{options:e.fields_types},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"field.type"}})],1),a("b-row",[a("b-form-group",{staticClass:"b-col p-2",attrs:{label:"Property Type"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.ariaDescribedby;return[a("b-form-checkbox",{attrs:{"aria-describedby":r,name:"propertyType",value:"DatatypeProperty"},model:{value:t.propertyType,callback:function(a){e.$set(t,"propertyType",a)},expression:"field.propertyType"}},[e._v("DatatypeProperty")]),a("b-form-checkbox",{attrs:{"aria-describedby":r,name:"propertyType",value:"ObjectProperty"},model:{value:t.propertyType,callback:function(a){e.$set(t,"propertyType",a)},expression:"field.propertyType"}},[e._v("ObjectProperty")])]}}],null,!0)}),a("b-form-group",{staticClass:"b-col p-2",attrs:{label:"Property Functionality"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.ariaDescribedby2;return[a("b-form-checkbox",{attrs:{"aria-describedby":r,name:"propertyFunctionality",value:"FunctionalProperty"},model:{value:t.propertyFunctionality,callback:function(a){e.$set(t,"propertyFunctionality",a)},expression:"field.propertyFunctionality"}},[e._v("FunctionalProperty")]),a("b-form-checkbox",{attrs:{"aria-describedby":r,name:"propertyFunctionality",value:"InverseFunctionalProperty"},model:{value:t.propertyFunctionality,callback:function(a){e.$set(t,"propertyFunctionality",a)},expression:"field.propertyFunctionality"}},[e._v("InverseFunctionalProperty")])]}}],null,!0)})],1),a("b-form-checkbox",{model:{value:t.multiple,callback:function(a){e.$set(t,"multiple",a)},expression:"field.multiple"}},[e._v(" Allow Multiple")]),a("b-input-group",{attrs:{prepend:"default value"}},[a("b-form-input",{model:{value:t.default,callback:function(a){e.$set(t,"default",a)},expression:"field.default"}})],1),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.remove(t)}}},[e._v("Remove")])],1),a("small",[e._v(e._s(t))])],1)],1)],1):e._e()],1)})),0)]),a("RecordModal",{attrs:{fields:e.fields}})],1)},r=[],i=a("1da1"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("4de4"),a("2f62")),l=a("6655"),s=a.n(l),c={name:"TablesView",components:{TableView:function(){return a.e("chunk-76fa3d31").then(a.bind(null,"a928"))},Label:function(){return a.e("chunk-2d20fb75").then(a.bind(null,"b58d"))},RecordModal:function(){return a.e("chunk-21b781a8").then(a.bind(null,"0ab4"))},ForkButton:function(){return a.e("chunk-2d209533").then(a.bind(null,"a927"))}},data:function(){return{name:"",table_name:"",tick:new Date,default_fields:[{key:"label",modifiable:!1,stickyColumn:!0,isRowHeader:!0,variant:"primary"},{key:"notes"},{key:"attachments"},{key:"url",modifiable:!1}],fields:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},methods:{newField:function(){this.fields.push({key:"new field"})},remove:function(e){console.log(e),this.fields=this.fields.filter((function(t){return t.key!==e.key}))},tabChanged:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("TAB CHANGED",e),console.log(t.tables[e]),t.table=t.tables[e],console.log(t.table),a.next=6,s.a[t.table]["https://www.w3.org/ns/ui#FieldList"];case 6:n=a.sent,r=void 0==n?t.default_fields:JSON.parse(n),console.log(r),t.fields=r;case 10:case"end":return a.stop()}}),a)})))()},edit_fields:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fields",e.fields),console.log(e.table),t.next=4,s.a[e.table]["https://www.w3.org/ns/ui#FieldList"].set(JSON.stringify(e.fields));case 4:case"end":return t.stop()}}),t)})))()},edit_base_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a[e.base].label.set(e.name);case 2:case"end":return t.stop()}}),t)})))()},edit_table_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a[e.table].label.set(e.table_name);case 2:e.$store.dispatch("table/getTables");case 3:case"end":return t.stop()}}),t)})))()},setTableName:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.table=e,a.next=3,s.a[e].label;case 3:n=a.sent,t.table_name="".concat(n);case 5:case"end":return a.stop()}}),a)})))()},addTable:function(){var e={path:this.storage+this.privacy+"/table/tables/",name:"___table name___",base:this.base};this.$store.dispatch("table/addTable",e)}},watch:{base:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},tables:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tick=new Date;case 1:case"end":return t.stop()}}),t)})))()}},computed:Object(o["b"])({fields_types:function(e){return e.field.fields_types},tables:function(e){return e.table.tables},base:function(e){return e.table.base},storage:function(e){return e.solid.storage},privacy:function(e){return e.table.privacy}})},u=c,b=a("2877"),d=Object(b["a"])(u,n,r,!1,null,null,null);t["default"]=d.exports},"4de4":function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").filter,i=a("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=tablesviews.7972ced3.js.map