(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdcea"],{"2e23":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("b-card",{staticClass:"mb-2",staticStyle:{"min-width":"10rem"},attrs:{"no-body":""}},[s("b-card-title",{attrs:{tag:"h4"}},[t._v("Workspaces ")]),s("b-card-sub-title",[t._v("Privacy: "),s("b-button",{attrs:{pill:"",size:"sm",variant:"primary"},on:{click:t.togglePrivacy}},[t._v(t._s(t.privacy))]),s("br")],1),s("b-list-group",{attrs:{flush:""}},t._l(t.workspaces,(function(e){return s("b-list-group-item",{key:e.url,attrs:{button:"",size:"sm"},on:{click:function(s){return t.openWorkspace(e.url)}}},[s("Label",{attrs:{url:e.url,tick:t.tick}})],1)})),1),s("b-button",{attrs:{pill:"",variant:"outline-secondary",size:"sm"},on:{click:t.add}},[s("b-icon-plus"),t._v(" Add a workspace")],1)],1)],1)},r=[],n=(s("d3b7"),s("96cf"),s("1da1")),o={name:"Workspace",components:{Label:function(){return s.e("chunk-2d20fb75").then(s.bind(null,"b58d"))}},data:function(){return{tick:new Date}},created:function(){this.workspaces=[]},methods:{add:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("table/addWorkspace",{path:t.path,name:"___workspace name___"});case 1:case"end":return e.stop()}}),e)})))()},openWorkspace:function(t){this.$store.commit("table/setWorkspace",t)},togglePrivacy:function(){this.$store.commit("table/togglePrivacy")},getWorkspaces:function(){this.$store.dispatch("table/getWorkspaces",this.storage+this.privacy+"/table/workspaces/")}},watch:{privacy:function(){console.log(this.storage+this.privacy,this.storage),this.getWorkspaces()},storage:function(){console.log(this.storage+this.privacy),this.getWorkspaces()},workspaces:function(){console.log("must update workspaces in table",this.workspaces),this.tick=new Date}},computed:{workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/workspaces/"},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}}}},c=o,i=s("2877"),u=Object(i["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bdcea.f080b867.js.map