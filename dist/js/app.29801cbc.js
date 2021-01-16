(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({about:"about",backlog:"backlog",bases:"bases",kanbanboard:"kanbanboard",tablesviews:"tablesviews",templates:"templates",workspaces:"workspaces"}[e]||e)+"."+{about:"d0897bc7",backlog:"a49e3b44",bases:"a50740f8","chunk-3021a89c":"4a4084ac","chunk-a72e91f0":"560cf5f6",kanbanboard:"2ec3c7f9",tablesviews:"ed1d446f",templates:"55b4c096",workspaces:"4d0aaa43","chunk-0e88118b":"313e8177","chunk-2d20fb75":"ce13b8a1","chunk-2d226c5a":"db412975","chunk-33fa39da":"000e9dcf","chunk-188475f0":"0ed7123b","chunk-199387ba":"845be031","chunk-4a5f46a6":"d9c728ec","chunk-8cbc85f4":"55257ddc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={bases:1,"chunk-a72e91f0":1,"chunk-0e88118b":1,"chunk-33fa39da":1,"chunk-8cbc85f4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",backlog:"backlog",bases:"bases",kanbanboard:"kanbanboard",tablesviews:"tablesviews",templates:"templates",workspaces:"workspaces"}[e]||e)+"."+{about:"31d6cfe0",backlog:"31d6cfe0",bases:"5975915a","chunk-3021a89c":"31d6cfe0","chunk-a72e91f0":"44553381",kanbanboard:"31d6cfe0",tablesviews:"31d6cfe0",templates:"31d6cfe0",workspaces:"31d6cfe0","chunk-0e88118b":"4ee9f3c0","chunk-2d20fb75":"31d6cfe0","chunk-2d226c5a":"31d6cfe0","chunk-33fa39da":"40424b30","chunk-188475f0":"31d6cfe0","chunk-199387ba":"31d6cfe0","chunk-4a5f46a6":"31d6cfe0","chunk-8cbc85f4":"6773d80b"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ess-table/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("MenuBar"),n("router-view"),n("SolidTrackSession")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header container"},[n("h1",[e._v("Ess table")]),n("p",{staticClass:"lead"},[e._v("Kanban & Tables on Solid.")])])}],c=(n("d3b7"),{name:"app",components:{SolidTrackSession:function(){return n.e("chunk-3021a89c").then(n.bind(null,"c1a7"))},MenuBar:function(){return n.e("chunk-a72e91f0").then(n.bind(null,"c247"))}}}),s=c,i=(n("034f"),n("2877")),u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,d=n("9483");Object(d["a"])("".concat("/ess-table/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; please close the app & re-open.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f");r["default"].use(p["a"]);var f=[{path:"/",name:"Backlog",alias:"/backlog",component:function(){return n.e("backlog").then(n.bind(null,"301c"))}},{path:"/board",name:"Kanban",component:function(){return n.e("kanbanboard").then(n.bind(null,"6904"))}},{path:"/workspaces",name:"Workspaces",component:function(){return n.e("workspaces").then(n.bind(null,"9b19"))}},{path:"/tables",name:"Tables",component:function(){return n.e("tablesviews").then(n.bind(null,"4ce4"))}},{path:"/bases",name:"Bases",component:function(){return n.e("bases").then(n.bind(null,"03d0"))}},{path:"/templates",name:"Templates",component:function(){return n.e("templates").then(n.bind(null,"98ca"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],b="/ess-table",m=new p["a"]({routes:f,mode:"history",base:b,linkActiveClass:"active"}),h=m,g=n("2f62"),w=(n("2ca0"),function(e){e.subscribe((function(e,t){console.log(e),e.type.startsWith("kanban")&&void 0!=t.kanban?localStorage.setItem("ess-kanban",JSON.stringify(t.kanban)):e.type.startsWith("workspace")&&void 0!=t.workspace&&localStorage.setItem("ess-workspace",JSON.stringify(t.workspace))}))}),k=function(){return{breadcrumb:[{text:"Workspaces",href:"#"},{text:"Bases",href:"#"},{text:"Tables",href:"#"},{text:"Records"}]}},v={},x={},y={setWebId:function(e,t){console.log(t),e.webId=t}},O={namespaced:!0,state:k,getters:v,actions:x,mutations:y},j=(n("96cf"),n("1da1")),S=n("6655"),I=n.n(S),R=function(){return{webId:null,storage:null}},P={},T={setWebId:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit("setWebId",t),null==t){n.next=9;break}return e.commit("setWebId",t),n.next=5,I.a[t].storage;case 5:r=n.sent,e.commit("setStorage","".concat(r)),n.next=11;break;case 9:e.commit("setWebId",null),e.commit("setStorage",null);case 11:case"end":return n.stop()}}),n)})))()}},B={setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t}},W={namespaced:!0,state:R,getters:P,actions:T,mutations:B},E=(n("99af"),n("b0c0"),n("668b")),A=n("00e8"),N=n.n(A),_=n("7fed"),M=n.n(_),C=n("11c1"),F=n("9b92"),$=new M.a(N.a),D=function(){return{privacy:"public",workspaces:[],workspace:null,bases:[],base:{},tables:[],table:{},record:{},tick_workspaces:new Date,recordTick:new Date}},L={},J={addWorkspace:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(C["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:Workspace.\n    <> dct:created "').concat(c,'".'),n.next=7,$.postFile(a,s,"text/turtle");case 7:console.log(a),r("getWorkspaces");case 9:case"end":return n.stop()}}),n)})))()},addBase:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(C["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:DataBase.\n    <> dct:created "').concat(c,'".'),n.next=7,$.postFile(a,s,"text/turtle");case 7:return n.next=9,I.a[t.workspace]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(F["namedNode"])(a));case 9:return n.next=11,I.a[a]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(F["namedNode"])(t.workspace));case 11:r("getBases");case 12:case"end":return n.stop()}}),n)})))()},addTable:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(C["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:Table.\n    <> dct:created "').concat(c,'".'),n.next=7,$.postFile(a,s,"text/turtle");case 7:return console.log(a),n.next=10,I.a[t.base]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(F["namedNode"])(a));case 10:return n.next=12,I.a[a]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(F["namedNode"])(t.base));case 12:r("getTables");case 13:case"end":return n.stop()}}),n)})))()},getWorkspaces:function(e){var t=arguments;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:e.rootState.solid.storage+e.state.privacy+"/table/workspaces/",n.next=3,$.itemExists(r);case 3:if(n.sent){n.next=6;break}return n.next=6,$.createFolder(r);case 6:return n.next=8,$.readFolder(r);case 8:a=n.sent,console.log(a.files),e.commit("setWorkspaces",a.files);case 11:case"end":return n.stop()}}),n)})))()},getBases:function(e){var t=arguments;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]?t[1]:e.state.workspace,a=[],o=!0,c=!1,n.prev=4,i=Object(E["a"])(I.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,i.next();case 8:return u=n.sent,o=u.done,n.next=12,u.value;case 12:if(l=n.sent,o){n.next=19;break}d=l,a.push("".concat(d));case 16:o=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),c=!0,s=n.t0;case 25:if(n.prev=25,n.prev=26,o||null==i.return){n.next=30;break}return n.next=30,i.return();case 30:if(n.prev=30,!c){n.next=33;break}throw s;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setBases",a);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()},setBase:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("setBase",t),r=[],a=!0,o=!1,n.prev=4,s=Object(E["a"])(I.a[t]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,s.next();case 8:return i=n.sent,a=i.done,n.next=12,i.value;case 12:if(u=n.sent,a){n.next=19;break}l=u,r.push("".concat(l));case 16:a=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),o=!0,c=n.t0;case 25:if(n.prev=25,n.prev=26,a||null==s.return){n.next=30;break}return n.next=30,s.return();case 30:if(n.prev=30,!o){n.next=33;break}throw c;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setTables",r);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()},getTables:function(e){var t=arguments;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]?t[1]:e.state.base,a=[],o=!0,c=!1,n.prev=4,i=Object(E["a"])(I.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,i.next();case 8:return u=n.sent,o=u.done,n.next=12,u.value;case 12:if(l=n.sent,o){n.next=19;break}d=l,a.push("".concat(d));case 16:o=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),c=!0,s=n.t0;case 25:if(n.prev=25,n.prev=26,o||null==i.return){n.next=30;break}return n.next=30,i.return();case 30:if(n.prev=30,!c){n.next=33;break}throw s;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setTables",a);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()}},q={togglePrivacy:function(e){e.privacy="public"==e.privacy?"private":"public"},setWorkspaces:function(e,t){console.log(t),e.workspaces=t},setBases:function(e,t){e.bases=t},setWorkspace:function(e,t){e.workspace=t},setBase:function(e,t){console.log(t),e.base=t},setTables:function(e,t){e.tables=t},setTable:function(e,t){console.log(t),e.table=t},setRecord:function(e,t){e.record=t},setRecordTick:function(e,t){console.log(t),e.recordTick=t}},z={namespaced:!0,state:D,getters:L,actions:J,mutations:q},K=(n("c740"),n("4160"),n("a434"),n("159b"),function(){return{items:{todo:[],inProgress:[],done:[]},nextId:1}}),U={},G={},H={addItem:function(e,t){e.items.todo.push(Object.assign(t,{id:e.nextId})),e.nextId+=1},updateItems:function(e,t){var n=t.items,r=t.id;e.items[r]=n},initializeStore:function(){var e=localStorage.getItem("ess-kanban");if(null!=e){var t=this.state;t.kanban=JSON.parse(e),this.replaceState(Object.assign(this.state,t))}},removeItem:function(e,t){[e.items.todo,e.items.inProgress,e.items.done].forEach((function(e){var n=e.findIndex((function(e){return e.id===t.id}));n>-1&&e.splice(n,1)}))}},Q={namespaced:!0,state:K,getters:U,actions:G,mutations:H},V=function(){return{items:{todo:[],inProgress:[],done:[]},workspaces:[],nextId:1}},X={},Y={addItem:function(e,t){var n=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.rootState.solid.storage+e.rootState.table.privacy+"/table/workspaces/",o=a+Object(C["v4"])()+"#it",r.next=4,n._vm.$createWorkspace({url:o,name:t.text});case 4:c=r.sent,console.log(o,c),e.commit("addItem",t);case 7:case"end":return r.stop()}}),r)})))()}},Z={addItem:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.items.todo.push(Object.assign(t,{id:e.nextId})),e.workspaces.push(Object.assign(t,{id:e.nextId})),e.nextId+=1;case 3:case"end":return n.stop()}}),n)})))()},updateItems:function(e,t){var n=t.items,r=t.id;e.items[r]=n},initializeStore:function(){var e=localStorage.getItem("ess-workspace");if(null!=e){var t=this.state;t.workspace=JSON.parse(e),this.replaceState(Object.assign(this.state,t))}},removeItem:function(e,t){[e.items.todo,e.items.inProgress,e.items.done].forEach((function(e){var n=e.findIndex((function(e){return e.id===t.id}));n>-1&&e.splice(n,1)}))}},ee={namespaced:!0,state:V,getters:X,actions:Y,mutations:Z};r["default"].use(g["a"]);var te=new g["a"].Store({plugins:[w],state:{},mutations:{},actions:{},modules:{app:O,solid:W,table:z,kanban:Q,workspace:ee}}),ne=n("5f5b"),re=n("b1e0"),ae=(n("f9e3"),n("2dd8"),n("63f8"),n("ddbf")),oe=n.n(ae),ce=n("d4ec"),se=n("bee2"),ie=n("257e"),ue=n("262e"),le=n("2caf"),de=n("ade3"),pe=n("dfab"),fe=n.n(pe),be=function(e){Object(ue["a"])(n,e);var t=Object(le["a"])(n);function n(){var e;Object(ce["a"])(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(de["a"])(Object(ie["a"])(e),"bases",[]),Object(de["a"])(Object(ie["a"])(e),"activeBase",""),e}return Object(se["a"])(n,[{key:"setActiveBase",value:function(e){this.activeBase=e}}]),n}(pe["SolidModel"]);Object(de["a"])(be,"ldpContainer",!0),Object(de["a"])(be,"rdfContexts",{lifecycle:"http://purl.org/vocab/lifecycle/schema#"}),Object(de["a"])(be,"rdfsClasses",["lifecycle:TaskGroup"]),Object(de["a"])(be,"fields",{name:{type:ae["FieldType"].String,rdfProperty:"rdfs:label",required:!0}}),Object(de["a"])(be,"classFields",["Base"]);var me="https://spoggy-test5.solidcommunity.net/public/table/workspaces/";ae["Soukai"].loadModels({Workspace:be});var he={install:function(e){e.workspaces=[],e.workspace=null,e.mixin({created:function(){console.log("solid-workspace plugin"),this.ws=te.state.table.workspaces,e.prototype.$myAddedProperty="Example Property",e.prototype.$myAddedMethod=function(){return e.prototype.$myAddedProperty},e.prototype.$createWorkspace=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,be.create(t);case 2:return e.next=4,be.from(me).all();case 4:n=e.sent,console.log("Workspaces",n),n.forEach((function(e){console.log("WS LABEL",e.name)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getWorkspaces=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,be.from(t).all();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})}},ge={install:function(e){e.bases=[],e.base=null,e.mixin({created:function(){}})}},we={install:function(e){e.tables=[],e.table=null,e.mixin({created:function(){}})}},ke={install:function(e){e.records=[],e.record=null,e.mixin({created:function(){}})}},ve=function(e){Object(ue["a"])(n,e);var t=Object(le["a"])(n);function n(){return Object(ce["a"])(this,n),t.apply(this,arguments)}return n}(pe["SolidModel"]);Object(de["a"])(ve,"rdfsClasses",["http://xmlns.com/foaf/0.1/Person"]),Object(de["a"])(ve,"fields",{name:{type:ae["FieldType"].String,rdfProperty:"http://xmlns.com/foaf/0.1/name"}}),fe.a.loadSolidModels(),ae["Soukai"].loadModels({Person:ve}),ae["Soukai"].useEngine(new pe["SolidEngine"](N.a.fetch.bind(N.a)));var xe="https://spoggy-test5.solidcommunity.net/public/table/test/persons/",ye={install:function(e){e.bases=[],e.base=null,e.mixin({created:function(){return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),e.prototype.$createPerson=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"inconnu",e.next=3,ve.at(xe).create({name:t});case 3:return e.next=5,ve.from(xe).all();case 5:n=e.sent,console.log("Persons",n),n.forEach((function(e){console.log("NAme",e.name)}));case 8:case"end":return e.stop()}}),e)})))}},Oe={install:function(e,t){e.use(he,t),e.use(ge,t),e.use(we,t),e.use(ke,t),e.use(ye,t),e.mixin({created:function(){}})}},je=function(e){Object(ue["a"])(n,e);var t=Object(le["a"])(n);function n(){return Object(ce["a"])(this,n),t.apply(this,arguments)}return n}(ae["Model"]),Se=function(e){Object(ue["a"])(n,e);var t=Object(le["a"])(n);function n(){var e;Object(ce["a"])(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(de["a"])(Object(ie["a"])(e),"newPostTitle",""),e}return Object(se["a"])(n,[{key:"postsRelationship",value:function(){return this.hasMany(je,"authorId")}}]),n}(ae["Model"]);r["default"].use(ne["a"]),r["default"].use(re["a"]),r["default"].config.productionTip=!1,r["default"].use(Oe),oe.a.loadModel("User",Se),oe.a.loadModel("Post",je),new r["default"]({router:h,store:te,render:function(e){return e(l)},created:function(){te.commit("kanban/initializeStore"),te.commit("workspace/initializeStore")}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.29801cbc.js.map