(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-navbar-demo9"],{"14b1":function(t,n,o){"use strict";o.r(n);var e=o("2ecf"),f=o.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=f.a},"2ecf":function(t,n,o){"use strict";var e=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=e(o("6f15")),i={mixins:[f.default],data:function(){return{config:{title:["过渡到透明",""],backTxt:"",color:["#fff","000"],backgroundColor:[1,["#a9a1ff","#6970ff","#ff55ff","#ff9999"]],slideBackgroundColor:[0,["#a9a1ff","#6970ff","#ff55ff","#ff9999"]],slideHeight:200,statusBarBackground:["",""],rightButton:[{key:"btn1",color:"#fff",icon:"&#xe651;",position:"left"},{key:"btn3",color:"#fff",icon:"&#xe6eb;",position:"left"},{key:"btn2",icon:"",color:"#fff",txt:"保存",position:"left"}]},doc:"没到过新疆的人，闭上眼睛想想跳入脑海中的新疆元素肯定是草原、骆驼、马、羊和扎着许多小辫的维吾尔族姑娘。",doc2:"其实现在新疆的城市和内地没任何区别，千篇一律，千人一面，乏善可陈。但是，新疆和内地确实不同，城市之外有荒无人烟的辽阔戈壁，浩瀚如海的沙漠，碧波荡漾的草原，还有宝石般的高山湖泊，巍峨的天山昆仑和阿勒泰山及纵横交错的河流及广阔田野。"}},methods:{onClickBtn:function(t){uni.showToast({title:"key为 ".concat(t.key," 的按钮"),icon:"none",duration:1300})}}};n.default=i},"6f15":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{scrollTop:0}},onPageScroll:function(t){this.scrollTop=t.scrollTop}},f=e;n.default=f},bc76:function(t,n,o){"use strict";o.d(n,"b",(function(){return f})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var e={wbPage:o("3d57").default},f=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("wb-page",{attrs:{config:t.config,"scroll-top":t.scrollTop},on:{clickBtn:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickBtn.apply(void 0,arguments)}}},[o("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:"/static/img/test/xj.jpg",mode:""}}),t._l(4,(function(n,e){return o("v-uni-view",{key:e,staticStyle:{background:"#FFFFFF",padding:"0 15px 15px"}},[o("v-uni-text",[t._v(t._s(n)+"."+t._s(t.doc))]),o("v-uni-view",{staticStyle:{"padding-top":"15px"}}),o("v-uni-text",[t._v(t._s(t.doc2))])],1)}))],2)},i=[]},da97:function(t,n,o){"use strict";o.r(n);var e=o("bc76"),f=o("14b1");for(var i in f)["default"].indexOf(i)<0&&function(t){o.d(n,t,(function(){return f[t]}))}(i);var c,a=o("f0c5"),r=Object(a["a"])(f["default"],e["b"],e["c"],!1,null,"f0f5a8c0",null,!1,e["a"],c);n["default"]=r.exports}}]);