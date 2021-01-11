(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["base"],{"50ea":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._v(" Base : "),r("EditableSpan",{model:{value:e.base.name,callback:function(t){e.$set(e.base,"name",t)},expression:"base.name"}}),e._v(" / "+e._s(e.base.tables.length)+" tables "),r("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[r("b-icon-plus"),e._v(" Add a table")],1),e._v(" Privacy: "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.togglePrivacy}},[e._v(e._s(e.privacy))]),r("br"),r("b-table",{attrs:{hover:"",items:e.tables,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(t){return[r("a",{attrs:{href:t.item.url,target:"_blank"}},[e._v(e._s(t.item.url.substring(t.item.url.lastIndexOf("/")+1)))])]}},{key:"cell(records)",fn:function(t){return[e._v(" "+e._s(t.item.records.length)+" ")]}}])}),e._v(" Storage : "+e._s(e.storage)),r("br"),e._v(" Path: "+e._s(e.path)+" ")],1)},a=[],s=(r("4160"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),c=r("668b"),o=r("6655"),i=r.n(o),l=r("9b92"),u=r("00e8"),b=r.n(u),d=r("7fed"),p=r.n(d),f=r("11c1"),h=new p.a(b.a),w={name:"Base",components:{EditableSpan:function(){return r.e("chunk-e9a5d8de").then(r.bind(null,"1cd0"))}},data:function(){return{privacy:null,tables:[]}},created:function(){this.workspace=this.$store.state.table.workspace,this.base=this.$store.state.table.base,console.log(this.workspace),this.privacy="public",this.update()},methods:{add:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.path+Object(f["v4"])()+".ttl",n=new Date,a=n.toISOString(),s='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "New Table".\n      <> rdf:type dbo:Table.\n      <> dct:created "'.concat(a,'".'),t.next=6,h.postFile(r,s,"text/turtle");case 6:return console.log(r),t.next=9,i.a[e.base.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(l["namedNode"])(r));case 9:return t.next=11,i.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(l["namedNode"])(e.base.url));case 11:e.update();case 12:case"end":return t.stop()}}),t)})))()},update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.readFolder(e.path);case 2:e.folder=t.sent,console.log(e.folder.files),e.tables=[],e.folder.files.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,o,l,u,b,d,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a[r.url].label;case 2:n=t.sent,a=[],s=!0,o=!1,t.prev=6,u=Object(c["a"])(i.a[r.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 8:return t.next=10,u.next();case 10:return b=t.sent,s=b.done,t.next=14,b.value;case 14:if(d=t.sent,s){t.next=21;break}p=d,a.push("".concat(p));case 18:s=!0,t.next=8;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](6),o=!0,l=t.t0;case 27:if(t.prev=27,t.prev=28,s||null==u.return){t.next=32;break}return t.next=32,u.return();case 32:if(t.prev=32,!o){t.next=35;break}throw l;case 35:return t.finish(32);case 36:return t.finish(27);case 37:console.log("r",a),f={name:"".concat(n),url:r.url,records:a},e.tables.push(f);case 40:case"end":return t.stop()}}),t,null,[[6,23,27,37],[28,,32,36]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()},onRowSelected:function(e){console.log(e),this.$store.commit("table/setTable",e[0]),this.$router.push("Table")},togglePrivacy:function(){this.privacy="public"==this.privacy?"private":"public"}},computed:{base:{get:function(){return this.$store.state.table.base},set:function(){}},workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/tables/"},set:function(){}}}},v=w,m=r("2877"),g=Object(m["a"])(v,n,a,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=base.6f860d13.js.map