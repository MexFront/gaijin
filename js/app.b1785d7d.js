(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-65ff4afd":"590792a0"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-65ff4afd":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-65ff4afd":"d0088ae3"}[t]+".css",i=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],f.parentNode.removeChild(f),a(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){s[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,a[1](r)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/gaijin/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"30db":function(t,e,a){"use strict";var n=a("a4c0"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("f5df");var n=a("a026"),s=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Mainpage")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"page__tank"}),t._m(0),t._m(1),t._m(2),a("main",{staticClass:"content"},[t._m(3),t._m(4),a("h2",{staticClass:"content__gallery-sm"},[t._v("Видео и изображения")]),a("div",{staticClass:"content__gallery"},t._l(t.gallery,function(e){return a("div",{key:e.id,staticClass:"content__gallery-preview",on:{click:function(a){return t.openModal(e)}}},[a("img",{attrs:{alt:e.description,src:e.preview}})])}),0)]),t._m(5),t.showModal?a("Modal",{staticClass:"page__modal",on:{close:t.closeModal}},[a("h2",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.img.description))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("img",{attrs:{src:t.img.full,alt:t.img.description}})])]):t._e()],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__logo"},[a("img",{attrs:{src:"images/gaijin-logo.png",alt:"Gaijin"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__pegi"},[a("img",{attrs:{src:"images/pegi.png",alt:"Pegi info"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:"images/war-thunder_logo.png",alt:"War Thunder"}})]),a("div",{staticClass:"header__language"},[a("ul",{staticClass:"header__languagepicker"},[a("a",{attrs:{href:"#ru"}},[a("li",[a("img",{attrs:{src:"images/russia-flag-icon-32.png"}})])]),a("a",{attrs:{href:"#tr"}},[a("li",[a("img",{attrs:{src:"images/turkey-flag-icon-32.png"}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content__header"},[a("img",{staticClass:"content__header-img-big",attrs:{src:"images/header_ru.png",alt:"free starter pack"}}),a("img",{staticClass:"content__header-img-sm",attrs:{src:"images/header_ru_m.png",alt:"free starter pack"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content__bonuses"},[a("h2",{staticClass:"content__bonuses-header"},[t._v("Выберите ваш\n        "),a("span",{staticClass:"_font_yellow"},[t._v("бесплатный")]),t._v(" бонус\n      ")]),a("div",{staticClass:"content__bonuses-container"},[a("div",{staticClass:"content__bonuses-airplane"},[a("div",{staticClass:"content__bonuses-airplane-container"},[a("div",{staticClass:"content__bonuses-airplane-name"},[t._v("Thach's")]),a("div",{staticClass:"content__bonuses-airplane-model"},[t._v("F2A-1 Buffalo")]),a("div",{staticClass:"content__bonuses-airplane-bonus _font_yellow"},[t._v("+3 дня премиума")])]),a("div",{staticClass:"content__bonuses-airplane-container"},[a("img",{staticClass:"content__bonuses-airplane-img",attrs:{src:"images/f2a-1-buffalo.png",alt:"F2a-1-buffalo"}})])]),a("div",{staticClass:"content__bonuses-star"},[a("div",{staticClass:"content__bonuses-star-text"},[t._v("OR")])]),a("div",{staticClass:"content__bonuses-tank"},[a("div",{staticClass:"content__bonuses-tank-container"},[a("div",{staticClass:"content__bonuses-tank-name"},[t._v("Light tank")]),a("div",{staticClass:"content__bonuses-tank-model"},[t._v("M2A4")]),a("div",{staticClass:"content__bonuses-tank-bonus _font_yellow"},[t._v("+3 дня премиума")])]),a("div",{staticClass:"content__bonuses-tank-container"},[a("img",{staticClass:"content__bonuses-tank-img",attrs:{src:"images/light-tank-m2a4.png",alt:"light-tank-m2a4"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("span",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Privacy Policy")])]),a("span",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("EULA")])]),a("span",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Terms of Use")])]),a("span",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Customer Support")])])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper",on:{click:t.onWrapperClick}},[a("div",{staticClass:"modal-container",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default header\n          ")])],2),a("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2),a("div",{staticClass:"modal-footer"},[t._t("footer",[a("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("\n              OK\n            ")])])],2)])])])])},u=[],d={name:"Modal",data:function(){return{}},methods:{onWrapperClick:function(){this.$emit("close")}}},f=d,p=(a("30db"),a("2877")),_=Object(p["a"])(f,c,u,!1,null,null,null),g=_.exports,m={name:"Mainpage",components:{Modal:g},data:function(){return{gallery:[{preview:"images/gallery/1.jpg",full:"images/gallery/1-big.jpg",id:1,description:"first"},{preview:"images/gallery/2.jpg",full:"images/gallery/2-big.jpg",id:2,description:"second"},{preview:"images/gallery/3.jpg",full:"images/gallery/3-big.jpg",id:3,description:"third"}],showModal:!1,img:{preview:"",full:"",id:null,description:""}}},methods:{closeModal:function(){this.showModal=!1,this.img.preview="",this.img.full="",this.img.id=null,this.img.description=""},openModal:function(t){this.img.preview=t.preview,this.img.full=t.full,this.img.id=t.id,this.img.description=t.description,this.showModal=!0}}},v=m,h=(a("feac"),Object(p["a"])(v,o,l,!1,null,null,null)),b=h.exports,C={name:"app",components:{Mainpage:b}},y=C,k=Object(p["a"])(y,i,r,!1,null,null,null),w=k.exports;a.e("chunk-65ff4afd").then(a.t.bind(null,"5903",7)),n["a"].use(s["a"]);var j=[{path:"/",component:b}],M=new s["a"]({routes:j,mode:"history"});n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:M,components:{App:w},template:"<App/>"})},a4c0:function(t,e,a){},cf41:function(t,e,a){},feac:function(t,e,a){"use strict";var n=a("cf41"),s=a.n(n);s.a}});
//# sourceMappingURL=app.b1785d7d.js.map