(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209534"],{a928:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("Add Record")]),e._v(" FFFIIIEEELLLLDDDSSS : "+e._s(e.fields)+" "),r("b-table",{attrs:{hover:"",items:e.records,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRecordSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(e){return[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"}},[r("a",{attrs:{href:e.item.url,target:"_blank"}},[r("b-icon-link45deg")],1)])]}}])}),r("a",{attrs:{href:e.url,target:"_blank"}},[e._v("table "),r("b-icon-link45deg")],1),r("br")],1)},c=[],o=(r("96cf"),r("1da1")),a=r("668b"),s=r("6655"),i=r.n(s),l=r("9b92"),d=r("00e8"),u=r.n(d),p=r("7fed"),f=r.n(p),b=r("11c1"),h=new f.a(u.a),w={name:"TableView",props:["url","fields"],data:function(){return{records:[]}},created:function(){this.getRecords()},methods:{getRecords:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o,s,l,d,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("getrec"),e.records=[],r=!0,n=!1,t.prev=4,o=Object(a["a"])(i.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return t.next=8,o.next();case 8:return s=t.sent,r=s.done,t.next=12,s.value;case 12:if(l=t.sent,r){t.next=22;break}return d=l,t.next=17,i.a[d].label;case 17:u=t.sent,e.records.push({label:u,url:"".concat(d)});case 19:r=!0,t.next=6;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](4),n=!0,c=t.t0;case 28:if(t.prev=28,t.prev=29,r||null==o.return){t.next=33;break}return t.next=33,o.return();case 33:if(t.prev=33,!n){t.next=36;break}throw c;case 36:return t.finish(33);case 37:return t.finish(28);case 38:case"end":return t.stop()}}),t,null,[[4,24,28,38],[29,,33,37]])})))()},onRecordSelected:function(e){e.length>0&&(this.record=e[0],console.log(this.record),this.$store.commit("table/setRecord",this.record),this.$bvModal.show("modal-record"))},add:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.storage+e.privacy+"/table/records/"+Object(b["v4"])()+".ttl",n=new Date,c=n.toISOString(),o='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "__New Record__".\n      <> rdf:type dbo:Record.\n      <> dct:created "'.concat(c,'".'),t.next=6,h.postFile(r,o,"text/turtle");case 6:return console.log(r,e.url),t.next=9,i.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(l["namedNode"])(r));case 9:return t.next=11,i.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(l["namedNode"])(e.url));case 11:e.getRecords();case 12:case"end":return t.stop()}}),t)})))()}},watch:{url:function(){console.log("tables URL",this.url)},recordTick:function(){console.log(this.recordTick)}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}},recordTick:{get:function(){return this.$store.state.table.recordTick},set:function(){}}}},g=w,m=r("2877"),v=Object(m["a"])(g,n,c,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d209534.6f12ea94.js.map