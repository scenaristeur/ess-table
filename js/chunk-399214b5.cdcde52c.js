(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399214b5"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),l=n("825a"),c=n("1d80"),a=n("4840"),u=n("8aa5"),o=n("50c4"),s=n("14c3"),d=n("9263"),f=n("9f7f"),p=f.UNSUPPORTED_Y,g=[].push,h=Math.min,v=4294967295;r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),l=void 0===n?v:n>>>0;if(0===l)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,l);var a,u,o,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=new RegExp(e.source,f+"g");while(a=d.call(h,r)){if(u=h.lastIndex,u>p&&(s.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&g.apply(s,a.slice(1)),o=a[0].length,p=u,s.length>=l))break;h.lastIndex===a.index&&h.lastIndex++}return p===r.length?!o&&h.test("")||s.push(""):s.push(r.slice(p)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,e,this,i,r!==t);if(c.done)return c.value;var d=l(e),f=String(this),g=a(d,RegExp),x=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"g":"y"),E=new g(p?"^(?:"+d.source+")":d,b),y=void 0===i?v:i>>>0;if(0===y)return[];if(0===f.length)return null===s(E,f)?[f]:[];var I=0,R=0,w=[];while(R<f.length){E.lastIndex=p?0:R;var m,_=s(E,p?f.slice(R):f);if(null===_||(m=h(o(E.lastIndex+(p?R:0)),f.length))===I)R=u(f,R,x);else{if(w.push(f.slice(I,R)),w.length===y)return w;for(var S=1;S<=_.length-1;S++)if(w.push(_[S]),w.length===y)return w;R=I=m}}return w.push(f.slice(I)),w}]}),p)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var l=n.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),l=n("5692"),c=RegExp.prototype.exec,a=l("native-string-replace",String.prototype.replace),u=c,o=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=o||d||s;f&&(u=function(e){var t,n,i,l,u=this,f=s&&u.sticky,p=r.call(u),g=u.source,h=0,v=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),n=new RegExp("^(?:"+g+")",p)),d&&(n=new RegExp("^"+g+"$(?!\\s)",p)),o&&(t=u.lastIndex),i=c.call(f?n:u,v),f?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:o&&i&&(u.lastIndex=u.global?i.index+i[0].length:t),d&&i&&i.length>1&&a.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=u},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c1a7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.user?n("div",{staticClass:"solid-track-session"},[n("i",[n("small",[e._v("Logged as : "),n("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.user))])])])]):e._e()},i=[],l=n("1da1"),c=(n("96cf"),n("fb6a"),n("ac1f"),n("1276"),n("00e8")),a=n.n(c),u={name:"SolidTrackSession",data:function(){return{user:null,webId:null}},created:function(){var e=this;a.a.trackSession(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?(e.webId=n.webId,e.user=n.webId.split("/").slice(2,3)[0],console.log("The user is ".concat(n.webId)),e.$store.dispatch("solid/setWebId",e.webId)):(e.user=null,console.log("The user is not logged in"),e.$store.dispatch("solid/setWebId",null));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},o=u,s=n("2877"),d=Object(s["a"])(o,r,i,!1,null,null,null);t["default"]=d.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),l=n("b622"),c=n("9112"),a=l("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),o=function(){return"$0"==="a".replace(/./,"$0")}(),s=l("replace"),d=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,s){var p=l(e),g=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=g&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[a]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!g||!h||"replace"===e&&(!u||!o||d)||"split"===e&&!f){var v=/./[p],x=n(p,""[e],(function(e,t,n,r,i){return t.exec===RegExp.prototype.exec?g&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:o,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],E=x[1];r(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}s&&c(RegExp.prototype[p],"sham",!0)}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("861d"),l=n("e8b5"),c=n("23cb"),a=n("50c4"),u=n("fc6a"),o=n("8418"),s=n("b622"),d=n("1dde"),f=d("slice"),p=s("species"),g=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var n,r,s,d=u(this),f=a(d.length),v=c(e,f),x=c(void 0===t?f:t,f);if(l(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!l(n.prototype)?i(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,v,x);for(r=new(void 0===n?Array:n)(h(x-v,0)),s=0;v<x;v++,s++)v in d&&o(r,s,d[v]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-399214b5.cdcde52c.js.map