(function(e){function a(a){for(var s,n,i=a[0],l=a[1],c=a[2],d=0,f=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,n=1;n<t.length;n++){var l=t[n];0!==r[l]&&(s=!1)}s&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var s={},r={app:0},o=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8c74d773"}[e]+".js"}function i(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var a=[],t=r[e];if(0!==t)if(t)a.push(t[2]);else{var s=new Promise((function(a,s){t=r[e]=[a,s]}));a.push(t[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=n(e);var c=new Error;o=function(a){l.onerror=l.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,t[1](c)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(a)},i.m=e,i.c=s,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)i.d(t,s,function(a){return e[a]}.bind(null,s));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var u=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"01f7":function(e,a,t){},"16a3":function(e,a,t){"use strict";t("cd8c")},"2fc4":function(e,a,t){},4678:function(e,a,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},4841:function(e,a,t){e.exports=t.p+"img/logo.5504c053.webp"},"53d7":function(e,a,t){"use strict";t("01f7")},"56d7":function(e,a,t){"use strict";t.r(a);var s=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],n=t("2877"),i={},l=Object(n["a"])(i,r,o,!1,null,null,null),c=l.exports,d=t("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u,f,m,b,p=t("8c4f"),j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("navbar"),t("headline"),t("Footer")],1)},v=[],h=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"Footer"}},[t("div",{staticClass:"footer"},[t("div",{attrs:{id:"button"}}),t("div",{attrs:{id:"container"}},[t("div",{attrs:{id:"cont"}},[t("div",{staticClass:"footer_center"},[t("h3",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repellendus mollitia ratione corporis? Sequi voluptatum optio illo omnis eius nisi tenetur blanditiis dolorum molestiae! Odio inventore quae praesentium fuga cum?")])])])])])])}],y={name:"Footer"},C=y,k=(t("53d7"),Object(n["a"])(C,h,g,!1,null,null,null)),w=k.exports,_=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{attrs:{id:"Headline"}},[t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"header"},[t("h1",[e._v(" LGPD GRPD Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi animi quibusdam. ")])]),e._m(0),t("lgpd")],1)},x=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"headerLogo"},[s("img",{attrs:{src:t("985c"),alt:""}})])}],O=t("1fca"),A={extends:O["a"],name:"LineChart",props:["chartdata"],data:()=>({options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white",beginAtZero:!0}}],xAxes:[{ticks:{fontColor:"white",beginAtZero:!0}}]}}}),mounted(){this.renderChart(this.chartdata,this.options)}},z=A,E=Object(n["a"])(z,u,f,!1,null,null,null),L=E.exports,M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-odometer"},[t("IOdometer",{staticClass:"iOdometer",attrs:{value:e.num,format:"(.ddd),dd"}}),t("span",{staticClass:"part"},[e._v(e._s(e.part))])],1)},N=[],S=t("acab"),P=t.n(S),q=(t("2198"),{name:"Odometer",components:{IOdometer:P.a},props:["value","part"],data(){return{num:0}},mounted(){const e=this;setTimeout(()=>{e.num=parseInt(this.value)},100)}}),D=q,F=(t("58ef"),Object(n["a"])(D,M,N,!1,null,null,null)),$=F.exports,B=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"LGPDComponent"}},[t("div",{staticClass:"flex"},[t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"cardNumber"},[t("odemeter",{attrs:{value:"54",part:""}}),t("span",{staticClass:"title"},[e._v("Multas")])],1),t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}],staticClass:"cardNumber"},[t("odemeter",{attrs:{value:"4",part:"Mi"}}),t("span",{staticClass:"title"},[e._v("Em multas")])],1)]),t("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}]},[t("h2",[e._v("Multas por segmento")]),t("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint. ")])]),t("LineChart",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}],attrs:{chartdata:e.data2}}),t("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}]},[t("h2",[e._v("Multas por mês")]),t("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint. ")])]),t("LineChart",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}],attrs:{chartdata:e.data1}}),t("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}]},[t("h2",[e._v("Valor de multas por região")]),t("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint. ")])]),t("PieChart",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:100},expression:"{ delay: 100 }",modifiers:{reset:!0}}],attrs:{chartdata:e.dataMultaRegiao}})],1)},J=[],R={extends:O["b"],name:"PieChart",props:["chartdata"],data:()=>({options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white",beginAtZero:!0}}],xAxes:[{ticks:{fontColor:"white",beginAtZero:!0}}]}}}),mounted(){this.renderChart(this.chartdata,this.options)}},T=R,H=Object(n["a"])(T,m,b,!1,null,null,null),W=H.exports,G={name:"Lgpd",components:{LineChart:L,Odemeter:$,PieChart:W},data:()=>({data2:{labels:["Mercado de Software","Seguradora","Vendas On-Line","Metrô","Empresa de comunicação"],datasets:[{label:"Multas",data:[25e5,1e6,5e5,2e5,1e5],backgroundColor:["#9d4edd","#7b2cbf","#5a189a","#3c096c","#240046"],borderColor:["#9d4edd","#7b2cbf","#5a189a","#3c096c","#240046"],borderWidth:1}]},data1:{labels:["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],datasets:[{label:"Soma das multas",data:[7,4,4,4,3,4,1,4,8,6,5,4],backgroundColor:"#2382f7",borderColor:"#2382f7",borderWidth:1}]},dataMultaRegiao:{labels:["SP","DF","MG","RS","AL","RJ","PB","RN"],datasets:[{label:"Soma das multas",data:[21,12,9,4,3,2,1,1],backgroundColor:["#3a86ff","#8338ec","#ff006e","#fb5607","#ffbe0b","#60b6fb","#1e96fc","#1360e2"],borderColor:["#3a86ff","#8338ec","#ff006e","#fb5607","#ffbe0b","#60b6fb","#1e96fc","#1360e2"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1}})},Z=G,I=Object(n["a"])(Z,B,J,!1,null,null,null),U=I.exports,V={name:"Headline",components:{LineChart:L,Odemeter:$,Lgpd:U},data:()=>({data2:{labels:["Janeiro","Feveiro","Março","Abril","Maio","Junho"],datasets:[{label:"Contagem de multas",data:[20,17,14,11,7,4],backgroundColor:["#03045e","#023e8a","#0077B6","#0096C7","#00B4D8","#48CAE4"],borderColor:["#03045e","#023e8a","#0077B6","#0096C7","#00B4D8","#48CAE4"],borderWidth:1}]},data1:{labels:["Janeiro","Feveiro","Março","Abril","Maio","Junho"],datasets:[{label:"Contagem de multas",data:[20,7,11,14,17,20],backgroundColor:["#48CAE4","#00B4D8","#0096C7","#0077B6","#023e8a","#03045e"],borderColor:["#48CAE4","#00B4D8","#0096C7","#0077B6","#023e8a","#03045e"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1}})},K=V,Q=(t("cf5e"),Object(n["a"])(K,_,x,!1,null,null,null)),X=Q.exports,Y=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("header",[s("nav",{staticClass:"hack menu"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t("4841"),alt:"Logo"}})])])])}],ae={name:"Navbar"},te=ae,se=(t("16a3"),Object(n["a"])(te,Y,ee,!1,null,null,null)),re=se.exports,oe={name:"Home",components:{Navbar:re,Headline:X,Footer:w}},ne=oe,ie=Object(n["a"])(ne,j,v,!1,null,null,null),le=ie.exports;s["a"].use(p["a"]);const ce=[{path:"/",name:"Home",component:le},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],de=new p["a"]({mode:"history",base:"/",routes:ce});var ue=de,fe=t("2f62");s["a"].use(fe["a"]);var me=new fe["a"].Store({state:{},mutations:{},actions:{},modules:{}}),be=(t("2fc4"),t("c14c"),t("4c95")),pe=t.n(be);s["a"].use(pe.a),s["a"].use(pe.a,{class:"v-scroll-reveal",duration:800,scale:2,distance:"10px",mobile:!1}),s["a"].config.productionTip=!1,new s["a"]({router:ue,store:me,render:function(e){return e(c)}}).$mount("#app")},"58ef":function(e,a,t){"use strict";t("626d")},"626d":function(e,a,t){},"985c":function(e,a,t){e.exports=t.p+"img/security_icon.8b93011a.png"},"9dfa":function(e,a,t){},c14c:function(e,a,t){},cd8c:function(e,a,t){},cf5e:function(e,a,t){"use strict";t("9dfa")}});
//# sourceMappingURL=app.479c77ed.js.map