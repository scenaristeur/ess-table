(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"3f0e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._v(" TABLE "),r("EditableSpan",{model:{value:e.table.name,callback:function(t){e.$set(e.table,"name",t)},expression:"table.name"}}),r("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[r("b-icon-plus"),e._v(" Add a record")],1),e._v(" Privacy: "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.togglePrivacy}},[e._v(e._s(e.privacy))]),r("br"),r("b-table",{attrs:{hover:"",items:e.records,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRecordSelected}}),e._v(" Storage : "+e._s(e.storage)),r("br"),e._v(" Path: "+e._s(e.path)+" "),r("b-modal",{attrs:{id:"modal-record"},on:{ok:e.onValidModal},scopedSlots:e._u([{key:"modal-title",fn:function(){return[r("EditableSpan",{model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})]},proxy:!0}])},[r("p",{staticClass:"my-4"},[e._v("Hello from modal!")])])],1)},a=[],s=(r("4160"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),c=r("668b"),o=r("6655"),i=r.n(o),l=r("9b92"),u=r("00e8"),d=r.n(u),p=r("7fed"),b=r.n(p),f=r("11c1"),h=new b.a(d.a),m={name:"Table",components:{EditableSpan:function(){return r.e("chunk-e9a5d8de").then(r.bind(null,"1cd0"))}},data:function(){return{items:[{name:"record1",notes:[],attachements:[]},{name:"record2",notes:[],attachements:[]},{name:"record3",notes:[],attachements:[]},{name:"record4",notes:[],attachements:[]}],privacy:null,records:[],record:{}}},created:function(){this.workspace=this.$store.state.table.workspace,this.base=this.$store.state.table.base,this.table=this.$store.state.table.table,console.log(this.workspace),this.privacy="public"},methods:{add:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.path+Object(f["v4"])()+".ttl",n=new Date,a=n.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "New Record".\n    <> rdf:type dbo:Record.\n    <> dct:created "'.concat(a,'".'),t.next=6,h.postFile(r,s,"text/turtle");case 6:return console.log(r),t.next=9,i.a[e.table.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(l["namedNode"])(r));case 9:return t.next=11,i.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(l["namedNode"])(e.table.url));case 11:e.update();case 12:case"end":return t.stop()}}),t)})))()},update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.readFolder(e.path);case 2:e.folder=t.sent,console.log(e.folder.files),e.records=[],e.folder.files.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,o,l,u,d,p,b,f,h,m,w,v,g,x,k,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a[r.url].label;case 2:n=t.sent,a=[],s=[],o=!0,l=!1,t.prev=7,d=Object(c["a"])(i.a[r.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasNote"]);case 9:return t.next=11,d.next();case 11:return p=t.sent,o=p.done,t.next=15,p.value;case 15:if(b=t.sent,o){t.next=22;break}f=b,a.push("".concat(f));case 19:o=!0,t.next=9;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](7),l=!0,u=t.t0;case 28:if(t.prev=28,t.prev=29,o||null==d.return){t.next=33;break}return t.next=33,d.return();case 33:if(t.prev=33,!l){t.next=36;break}throw u;case 36:return t.finish(33);case 37:return t.finish(28);case 38:h=!0,m=!1,t.prev=40,v=Object(c["a"])(i.a[r.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasAttachement"]);case 42:return t.next=44,v.next();case 44:return g=t.sent,h=g.done,t.next=48,g.value;case 48:if(x=t.sent,h){t.next=55;break}k=x,s.push("".concat(k));case 52:h=!0,t.next=42;break;case 55:t.next=61;break;case 57:t.prev=57,t.t1=t["catch"](40),m=!0,w=t.t1;case 61:if(t.prev=61,t.prev=62,h||null==v.return){t.next=66;break}return t.next=66,v.return();case 66:if(t.prev=66,!m){t.next=69;break}throw w;case 69:return t.finish(66);case 70:return t.finish(61);case 71:console.log("n",a),y={name:"".concat(n),notes:a,attachements:s,url:r.url},e.records.push(y);case 74:case"end":return t.stop()}}),t,null,[[7,24,28,38],[29,,33,37],[40,57,61,71],[62,,66,70]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()},onValidModal:function(){console.log(this.record)},onRecordSelected:function(e){console.log(e),e.length>0&&(this.record=e[0],this.$bvModal.show("modal-record"))},togglePrivacy:function(){this.privacy="public"==this.privacy?"private":"public"}},computed:{table:{get:function(){return this.$store.state.table.table},set:function(){}},base:{get:function(){return this.$store.state.table.base},set:function(){}},workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/records/"},set:function(){}}}},w=m,v=r("2877"),g=Object(v["a"])(w,n,a,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=table.4bdb296e.js.map