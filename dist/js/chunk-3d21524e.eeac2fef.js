(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d21524e"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),l=n("1d80"),a=n("4840"),u=n("8aa5"),o=n("50c4"),s=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,g=Math.min,v=4294967295,h=!f((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(l(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,c);var a,u,o,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,f+"g");while(a=d.call(h,r)){if(u=h.lastIndex,u>g&&(s.push(r.slice(g,a.index)),a.length>1&&a.index<r.length&&p.apply(s,a.slice(1)),o=a[0].length,g=u,s.length>=c))break;h.lastIndex===a.index&&h.lastIndex++}return g===r.length?!o&&h.test("")||s.push(""):s.push(r.slice(g)),s.length>c?s.slice(0,c):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=l(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,i,n):r.call(String(i),t,n)},function(e,i){var l=n(r,e,this,i,r!==t);if(l.done)return l.value;var d=c(e),f=String(this),p=a(d,RegExp),x=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),E=new p(h?d:"^(?:"+d.source+")",b),y=void 0===i?v:i>>>0;if(0===y)return[];if(0===f.length)return null===s(E,f)?[f]:[];var R=0,I=0,w=[];while(I<f.length){E.lastIndex=h?I:0;var S,m=s(E,h?f:f.slice(I));if(null===m||(S=g(o(E.lastIndex+(h?0:I)),f.length))===R)I=u(f,I,x);else{if(w.push(f.slice(R,I)),w.length===y)return w;for(var _=1;_<=m.length-1;_++)if(w.push(m[_]),w.length===y)return w;I=R=S}}return w.push(f.slice(R)),w}]}),!h)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),l=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==i(e))}},4840:function(e,t,n){var r=n("825a"),i=n("1c0b"),c=n("b622"),l=c("species");e.exports=function(e,t){var n,c=r(e).constructor;return void 0===c||void 0==(n=r(c)[l])?t:i(n)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,l=String.prototype.replace,a=c,u=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=u||s||o;d&&(a=function(e){var t,n,i,a,d=this,f=o&&d.sticky,p=r.call(d),g=d.source,v=0,h=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),s&&(n=new RegExp("^"+g+"$(?!\\s)",p)),u&&(t=d.lastIndex),i=c.call(f?n:d,h),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:u&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&l.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),e.exports=a},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,n){var r=n("83ab"),i=n("d039"),c=n("5135"),l=Object.defineProperty,a={},u=function(e){throw e};e.exports=function(e,t){if(c(a,e))return a[e];t||(t={});var n=[][e],o=!!c(t,"ACCESSORS")&&t.ACCESSORS,s=c(t,0)?t[0]:u,d=c(t,1)?t[1]:void 0;return a[e]=!!n&&!i((function(){if(o&&!r)return!0;var e={length:-1};o?l(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,s,d)}))}},c1a7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.user?n("div",{staticClass:"solid-track-session"},[n("i",[n("small",[e._v("Logged as : "),n("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.user))])])])]):e._e()},i=[],c=(n("fb6a"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),l=n("00e8"),a=n.n(l),u={name:"SolidTrackSession",data:function(){return{user:null,webId:null}},created:function(){var e=this;a.a.trackSession(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?(e.webId=n.webId,e.user=n.webId.split("/").slice(2,3)[0],console.log("The user is ".concat(n.webId)),e.$store.dispatch("solid/setWebId",e.webId)):(e.user=null,console.log("The user is not logged in"),e.$store.dispatch("solid/setWebId",null));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},o=u,s=n("2877"),d=Object(s["a"])(o,r,i,!1,null,null,null);t["default"]=d.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),l=n("9263"),a=n("9112"),u=c("species"),o=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var g=c(e),v=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!v||!h||"replace"===e&&(!o||!s||f)||"split"===e&&!p){var x=/./[g],b=n(g,""[e],(function(e,t,n,r,i){return t.exec===l?v&&!i?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=b[0],y=b[1];r(String.prototype,e,E),r(RegExp.prototype,g,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&a(RegExp.prototype[g],"sham",!0)}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),l=n("23cb"),a=n("50c4"),u=n("fc6a"),o=n("8418"),s=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),v=s("species"),h=[].slice,x=Math.max;r({target:"Array",proto:!0,forced:!p||!g},{slice:function(e,t){var n,r,s,d=u(this),f=a(d.length),p=l(e,f),g=l(void 0===t?f:t,f);if(c(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,p,g);for(r=new(void 0===n?Array:n)(x(g-p,0)),s=0;p<g;p++,s++)p in d&&o(r,s,d[p]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-3d21524e.eeac2fef.js.map