(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f26665"],{"03d0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h2",[e._v(e._s(e.name)+" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-ws",modifiers:{"modal-ws":!0}}],attrs:{variant:"outline-info",size:"sm"}},[a("b-icon-pen")],1)],1),a("hr"),a("ul",[e._l(e.bases,(function(t,n){return a("li",{key:n,staticClass:"mb-2",on:{click:function(a){return e.showTables(t)}}},[a("b-button",{attrs:{variant:"outline-info"}},[a("b-icon-pen",{staticClass:"border border-info rounded p-2",attrs:{"font-scale":"4",variant:"info"}}),a("Label",{attrs:{url:t}})],1)],1)})),a("li",[a("b-button",{attrs:{variant:"secondary"},on:{click:e.add}},[a("b-icon-plus",{staticClass:"border border-secondary rounded p-2",attrs:{"font-scale":"4",variant:"secondary"}}),e._v(" Add a base ")],1)],1)],2),a("a",{attrs:{href:e.workspace,target:"_blank"}},[e._v("workspace "),a("b-icon-link45deg")],1),a("b-modal",{attrs:{id:"modal-ws",title:"Rename"},on:{ok:e.edit_ws_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the workspace"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)},r=[],s=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),o=a("6655"),c=a.n(o),i={name:"BasesView",components:{Label:function(){return a.e("chunk-2d20fb75").then(a.bind(null,"b58d"))}},data:function(){return{name:""}},methods:{add:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={path:e.storage+e.privacy+"/table/bases/",name:"___base name___",workspace:e.workspace},console.log(a),e.$store.dispatch("table/addBase",a);case 3:case"end":return t.stop()}}),t)})))()},showTables:function(e){console.log(e),this.$store.dispatch("table/setBase",e),this.$router.push("Tables")},edit_ws_name:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.name),t.next=3,c.a[e.workspace].label.set(e.name);case 3:a=e.storage+e.privacy+"/table/workspaces/",console.log(a),e.$store.dispatch("table/getWorkspaces",a);case 6:case"end":return t.stop()}}),t)})))()}},watch:{workspace:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("table/getBases",e.workspace),t.next=3,c.a[e.workspace].label;case 3:a=t.sent,e.name="".concat(a);case 5:case"end":return t.stop()}}),t)})))()}},computed:{workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}},bases:{get:function(){return this.$store.state.table.bases},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}}}},u=i,l=(a("4ac6"),a("2877")),b=Object(l["a"])(u,n,r,!1,null,null,null);t["default"]=b.exports},"4ac6":function(e,t,a){"use strict";a("6aff")},"6aff":function(e,t,a){}}]);
//# sourceMappingURL=chunk-40f26665.819cb6f4.js.map