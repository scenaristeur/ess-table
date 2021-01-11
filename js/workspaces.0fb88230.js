(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspaces"],{"9b19":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._v(" Workspaces "),r("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[r("b-icon-plus"),e._v(" Add a workspace")],1),e._v(" Privacy: "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.togglePrivacy}},[e._v(e._s(e.privacy))]),r("br"),r("b-table",{attrs:{hover:"",items:e.workspaces,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(t){return[r("a",{attrs:{href:t.item.url,target:"_blank"}},[e._v(e._s(t.item.url.substring(t.item.url.lastIndexOf("/")+1)))])]}},{key:"cell(bases)",fn:function(t){return[e._v(" "+e._s(t.item.bases.length)+" ")]}}])}),e._v(" Storage : "+e._s(e.storage)),r("br"),e._v(" Path: "+e._s(e.path)+" ")],1)},a=[],s=(r("4160"),r("159b"),r("96cf"),r("1da1")),c=r("668b"),o=r("6655"),i=r.n(o),u=r("00e8"),l=r.n(u),p=r("7fed"),f=r.n(p),d=r("11c1"),h=new f.a(l.a),b={name:"Workspaces",data:function(){return{privacy:null}},created:function(){this.workspaces=[],this.privacy="public"},methods:{add:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.path+Object(d["v4"])()+".ttl",n=new Date,a=n.toISOString(),s='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "New Workspace".\n      <> rdf:type dbo:Workspace.\n      <> dct:created "'.concat(a,'".'),t.next=6,h.postFile(r,s,"text/turtle");case 6:console.log(r),e.update();case 8:case"end":return t.stop()}}),t)})))()},update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.readFolder(e.path);case 2:e.folder=t.sent,console.log(e.folder.files),e.workspaces=[],e.folder.files.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,o,u,l,p,f,d,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a[r.url].label;case 2:n=t.sent,a=[],s=!0,o=!1,t.prev=6,l=Object(c["a"])(i.a[r.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 8:return t.next=10,l.next();case 10:return p=t.sent,s=p.done,t.next=14,p.value;case 14:if(f=t.sent,s){t.next=21;break}d=f,a.push("".concat(d));case 18:s=!0,t.next=8;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](6),o=!0,u=t.t0;case 27:if(t.prev=27,t.prev=28,s||null==l.return){t.next=32;break}return t.next=32,l.return();case 32:if(t.prev=32,!o){t.next=35;break}throw u;case 35:return t.finish(32);case 36:return t.finish(27);case 37:console.log("b",a),h={name:"".concat(n),url:r.url,bases:a},e.workspaces.push(h);case 40:case"end":return t.stop()}}),t,null,[[6,23,27,37],[28,,32,36]])})));return function(e){return t.apply(this,arguments)}}()),console.log(e.workspaces);case 7:case"end":return t.stop()}}),t)})))()},onRowSelected:function(e){console.log(e),this.$store.commit("table/setWorkspace",e[0]),this.$router.push("Workspace")},togglePrivacy:function(){this.privacy="public"==this.privacy?"private":"public"}},watch:{path:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.privacy||null==e.storage){t.next=8;break}return t.next=3,h.itemExists(e.path);case 3:if(t.sent){t.next=6;break}return t.next=6,h.createFolder(e.path);case 6:return t.next=8,e.update();case 8:case"end":return t.stop()}}),t)})))()}},computed:{workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/workspaces/"},set:function(){}}}},w=b,v=r("2877"),g=Object(v["a"])(w,n,a,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=workspaces.0fb88230.js.map