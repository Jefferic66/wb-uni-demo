(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-navbar-demo11"],{6212:function(A,B,Q){"use strict";Q.r(B);var g=Q("7764"),E=Q("af6f");for(var c in E)["default"].indexOf(c)<0&&function(A){Q.d(B,A,(function(){return E[A]}))}(c);Q("911a");var t,w=Q("f0c5"),n=Object(w["a"])(E["default"],g["b"],g["c"],!1,null,"327a48d4",null,!1,g["a"],t);B["default"]=n.exports},"6f15":function(A,B,Q){"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var g={data:function(){return{scrollTop:0}},onPageScroll:function(A){this.scrollTop=A.scrollTop}},E=g;B.default=E},7764:function(A,B,Q){"use strict";Q.d(B,"b",(function(){return E})),Q.d(B,"c",(function(){return c})),Q.d(B,"a",(function(){return g}));var g={wbPage:Q("3d57").default},E=function(){var A=this,B=A.$createElement,Q=A._self._c||B;return Q("wb-page",{attrs:{config:A.config,"scroll-top":A.scrollTop},on:{clickBtn:function(B){arguments[0]=B=A.$handleEvent(B),A.onClickBtn.apply(void 0,arguments)}}},[Q("v-uni-view",{staticClass:"ctn"},A._l(A.icons,(function(B,g){return Q("v-uni-view",{key:g,staticClass:"icons"},[Q("v-uni-view",{staticClass:"hxicon",domProps:{innerHTML:A._s(B)}}),Q("v-uni-text",[A._v(A._s(B))])],1)})),1),Q("v-uni-view",{staticStyle:{clear:"both"}}),Q("v-uni-view",{staticStyle:{"font-size":"18px",margin:"30px 16px 16px",color:"#f0ad4e","text-align":"center"}},[A._v("如何导入字体文件？下面手把手教学。")]),Q("v-uni-view",{staticStyle:{"font-size":"18px",margin:"16px",color:"#f0ad4e","text-align":"center"}},[A._v("建议打开源文件查看教程")]),Q("v-uni-text",{},[A._v("1、在 https://www.iconfont.cn/ 新建自己的字体库，图标都添加好 2、然后你的字体库中有如下字符，找到 .ttf 结尾的链接，然后用浏览器下载 @font-face { font-family: 'hxicon'; src:\n    url('//at.alicdn.com/t/font_2009392_p959zum1sck.eot'); src: url('//at.alicdn.com/t/font_2009392_p959zum1sck.eot?#iefix') format('embedded-opentype'),\n    url('//at.alicdn.com/t/font_2009392_p959zum1sck.woff2') format('woff2'), url('//at.alicdn.com/t/font_2009392_p959zum1sck.woff') format('woff'),\n    url('//at.alicdn.com/t/font_2009392_p959zum1sck.ttf') format('truetype'), url('//at.alicdn.com/t/font_2009392_p959zum1sck.svg#hxicon') format('svg'); }\n    3、打开网址ttf转base64字符的网址： https://www.giftofspeed.com/base64-encoder/ 4、上传你的刚下载的ttf文件，然后复制转换好的base64字符串，新建一个iconfont.css文件 5、然后把\n    base64 粘贴到下面字符串中，然后设置一个字体名称： font-family:\"自定义字体名\"; @font-face { font-family: \"hxicon\"; src:\n    url(data:font/truetype;charset=utf-8;base64,转换的base64内容) format('truetype'); } 6、设置一个唯一的类名方便使用 .hxicon .hxicon{ font-family:\"hxicon\" !important;\n    font-size:24px;font-style:normal; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; -moz-osx-font-smoothing: grayscale; }\n    7、最后则再项目中App.vue中style标签里引入iconfont.css文件 @import \"./font/iconfont.css\"; 8、在任意组件中使用 unicode 9、这教程就完成了！\n    注意：如果是nave且为app端时，还需在javascript 中加入如下代码：可以参考wb-navbar组件源码 var domModule = weex.requireModule('dom'); // 这里的b64 为你的base64字符串 var b64 =\n    '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'\n    domModule.addRule('fontFace', { 'fontFamily': \"hxcion\", 'src': \"url('data:font/truetype;charset=utf-8;base64,\"+b64+\"')\" });")])],1)},c=[]},"8d62":function(A,B,Q){var g=Q("95f7");"string"===typeof g&&(g=[[A.i,g,""]]),g.locals&&(A.exports=g.locals);var E=Q("4f06").default;E("0885b952",g,!0,{sourceMap:!1,shadowMode:!1})},"911a":function(A,B,Q){"use strict";var g=Q("8d62"),E=Q.n(g);E.a},"95f7":function(A,B,Q){var g=Q("24fb");B=g(!1),B.push([A.i,"@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 默认主题色 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n\t如何制作字体文件？下面手把手教学。\r\n\t1、在 https://www.iconfont.cn/ 新建自己的字体库，图标都添加好\r\n\t2、然后你的字体库中有如下字符，找到 .ttf 结尾的链接，然后用浏览器下载\r\n\t@font-face {\r\n\t  font-family: 'hxicon';\r\n\t  src: url('//at.alicdn.com/t/font_2009392_p959zum1sck.eot');\r\n\t  src: url('//at.alicdn.com/t/font_2009392_p959zum1sck.eot?#iefix') format('embedded-opentype'),\r\n\t  url('//at.alicdn.com/t/font_2009392_p959zum1sck.woff2') format('woff2'),\r\n\t  url('//at.alicdn.com/t/font_2009392_p959zum1sck.woff') format('woff'),\r\n\t  url('//at.alicdn.com/t/font_2009392_p959zum1sck.ttf') format('truetype'),\r\n\t  url('//at.alicdn.com/t/font_2009392_p959zum1sck.svg#hxicon') format('svg');\r\n\t}\r\n\t\r\n\t3、打开网址ttf转base64字符的网址： https://www.giftofspeed.com/base64-encoder/ \r\n\t4、上传你的刚下载的ttf文件，然后复制转换好的base64字符串，新建一个iconfont.css文件\r\n\t\r\n\t5、然后把 base64 粘贴到下面字符串中，然后设置一个字体名称：font-family:\"自定义字体名\";\r\n\t@font-face {  \r\n\t  font-family: \"hxicon\";  \r\n\t  src: url(data:font/truetype;charset=utf-8;base64,转换的base64内容) format('truetype');  \r\n\t}\r\n\t6、设置一个唯一的类名方便使用 .hxicon\r\n\t.hxicon{\r\n\t\tfont-family:\"hxicon\" !important;\r\n\t\tfont-size:24px;font-style:normal;\r\n\t\t-webkit-font-smoothing: antialiased;\r\n\t\t-webkit-text-stroke-width: 0.2px;\r\n\t\t-moz-osx-font-smoothing: grayscale;\r\n\t}\r\n\t7、最后则再项目中App.vue中引入iconfont.css文件\r\n\t<style>  \r\n\t\t@import \"./font/iconfont.css\";  \r\n\t</style>\r\n\t8、在任意组件中使用\r\n\t<view class=\"hxicon\">&#xe679;</view>\r\n\t\r\n\t9、这教程就完成了！\r\n\t10、下面未注释部分为实例\r\n\t\r\n\t如果是app端时，还需在 javascript 中加入\r\n\t\r\n\tvar domModule = weex.requireModule('dom');\r\n\tvar b64 = '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'\r\n\tdomModule.addRule('fontFace', {\r\n\t\t'fontFamily': \"hxcion\",\r\n\t\t 'src': \"url('data:font/truetype;charset=utf-8;base64,\"+b64+\"')\"\r\n\t});\r\n\tvar he = require('he');\r\n */@font-face{font-family:hxicon;\r\n\t/* project id 2009392 */src:url(data:font/truetype;charset=utf-8;base64,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) format(\"truetype\")}.hxicon[data-v-327a48d4]{font-family:hxicon,custom-icon!important;font-size:20px;font-style:normal;\r\n-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale\n}.ctn[data-v-327a48d4]{display:block}.icons[data-v-327a48d4]{padding:16px 0;display:flex;flex:1;flex-direction:column;float:left;text-align:center;width:33.3333vw}.icons uni-text[data-v-327a48d4]{font-size:18px}.hxicon[data-v-327a48d4]{font-size:40px}",""]),A.exports=B},af6f:function(A,B,Q){"use strict";Q.r(B);var g=Q("be19"),E=Q.n(g);for(var c in g)["default"].indexOf(c)<0&&function(A){Q.d(B,A,(function(){return g[A]}))}(c);B["default"]=E.a},be19:function(A,B,Q){"use strict";var g=Q("ee27").default;Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var E=g(Q("6f15")),c={mixins:[E.default],data:function(){return{config:{color:"#ffffff",backgroundColor:[1,["#6970ff","#ff55ff"]],font:"hxicon",rightButton:[{key:"定位",icon:"&#xe651;",position:"left"},{key:"收藏",icon:"&#xe64c;",position:"left"},{key:"设置",icon:"&#xe68a;",position:"left"},{key:"关闭",icon:"&#xe646;",position:"left"},{key:"搜索",icon:"&#xe65c;",position:"left"},{key:"btn5",icon:"&#xe6eb;",position:"left"},{key:"btn6",icon:"&#xe674;",position:"left"}]},icons:["&#xe646;","&#xe64b;","&#xe64c;","&#xe650;","&#xe651;","&#xe65c;","&#xe661;","&#xe68a;","&#xe6ea;","&#xe6eb;","&#xe679;","&#xe6a3;","&#xe62a;","&#xe674;"]}},methods:{onClickBtn:function(A){uni.showToast({title:"key为 ".concat(A.key," 的按钮"),icon:"none",duration:1300})}}};B.default=c}}]);