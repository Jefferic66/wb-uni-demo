(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-zping-index"],{1048:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("6f15")),o={mixins:[a.default],data:function(){return{config:{title:"z-paging",color:"#ffffff",backgroundColor:[1,"#6970ff"],rightButton:[{key:"btn1",color:"#eee",txt:"文档",position:"left"}]},demoList:[{head:"单分页",list:[{title:"普通",note:"最简化的单分页示例",url:"./single"},{title:"页面滚动",note:"使用页面滚动示例",url:"./singleWithPage"}]},{head:"滑块切换",list:[{title:"全屏显示",note:"全屏或指定高度，包含了自定义下拉刷新与上拉加载、自定义返回顶部按钮演示、显示最后更新时间演示",url:"./tabsScroller-z-paging"},{title:"全屏显示自定义",note:"全屏或指定高度，包含了自定义下拉刷新与上拉加载、自定义返回顶部按钮演示、显示最后更新时间演示",url:"./scroll-tab-swiper-demo"},{title:"顶部吸附方式",note:"顶部吸附方式，包含了自定义下拉刷新与上拉加载、自定义返回顶部按钮演示",url:"./sticky-and-scroll-tab-demo"}]}]}},onResize:function(){console.log("1"),uni.getSystemInfo({success:function(t){console.log(t.windowWidth),console.log(t.windowHeight),t.windowWidth>t.windowHeight?console.log("横屏"):console.log("竖屏")}})},onLoad:function(){},onShow:function(){},methods:{onRightBtn:function(t){this.openBrowser("https://ext.dcloud.net.cn/plugin?id=3935")},navigate:function(t){uni.navigateTo({url:t})}}};e.default=o},"1afb":function(t,e,n){"use strict";n.r(e);var r=n("2876"),a=n("6e2c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d9c2");var i,l=n("f0c5"),c=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"8cda85fa",null,!1,r["a"],i);e["default"]=c.exports},"264f":function(t,e,n){"use strict";n.r(e);var r=n("6cdb"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},2876:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uIcon:n("2925").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-cell",class:{"u-border-bottom":t.borderBottom,"u-border-top":t.borderTop,"u-col-center":t.center,"u-cell--required":t.required},style:{backgroundColor:t.bgColor},attrs:{"hover-stay-time":"150","hover-class":t.hoverClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.icon?n("u-icon",{staticClass:"u-cell__left-icon-wrap",attrs:{size:t.iconSize,name:t.icon,"custom-style":t.iconStyle}}):n("v-uni-view",{staticClass:"u-flex"},[t._t("icon")],2),n("v-uni-view",{staticClass:"u-cell_title",style:[{width:t.titleWidth?t.titleWidth+"rpx":"auto"},t.titleStyle]},[""!==t.title?[t._v(t._s(t.title))]:t._t("title"),t.label||t.$slots.label?n("v-uni-view",{staticClass:"u-cell__label",style:[t.labelStyle]},[""!==t.label?[t._v(t._s(t.label))]:t._t("label")],2):t._e()],2),n("v-uni-view",{staticClass:"u-cell__value",style:[t.valueStyle]},[""!==t.value?[t._v(t._s(t.value))]:t._t("default")],2),t.$slots["right-icon"]?n("v-uni-view",{staticClass:"u-flex u-cell_right"},[t._t("right-icon")],2):t._e(),t.arrow?n("u-icon",{staticClass:"u-icon-wrap u-cell__right-icon-wrap",style:[t.arrowStyle],attrs:{name:"arrow-right"}}):t._e()],1)},o=[]},"29db":function(t,e,n){"use strict";n.r(e);var r=n("e5ad"),a=n("79a5");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b719");var i,l=n("f0c5"),c=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"2cb2a935",null,!1,r["a"],i);e["default"]=c.exports},"3f33":function(t,e,n){"use strict";n.r(e);var r=n("70df"),a=n("264f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7097");var i,l=n("f0c5"),c=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"25155fea",null,!1,r["a"],i);e["default"]=c.exports},"6cdb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-cell-group",props:{title:{type:String,default:""},border:{type:Boolean,default:!0},titleStyle:{type:Object,default:function(){return{}}}},data:function(){return{index:0}}};e.default=r},"6e2c":function(t,e,n){"use strict";n.r(e);var r=n("a9c7"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"6f15":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{scrollTop:0}},onPageScroll:function(t){this.scrollTop=t.scrollTop}},a=r;e.default=a},"702b":function(t,e,n){var r=n("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 默认主题色 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-cell[data-v-8cda85fa]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;position:relative;box-sizing:border-box;width:100%;padding:%?26?% %?32?%;font-size:%?28?%;line-height:%?54?%;color:#606266;background-color:#fff;text-align:left}.u-cell_title[data-v-8cda85fa]{font-size:%?28?%}.u-cell__left-icon-wrap[data-v-8cda85fa]{margin-right:%?10?%;font-size:%?32?%}.u-cell__right-icon-wrap[data-v-8cda85fa]{margin-left:%?10?%;color:#969799;font-size:%?28?%}.u-cell__left-icon-wrap[data-v-8cda85fa],\r\n.u-cell__right-icon-wrap[data-v-8cda85fa]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;height:%?48?%}.u-cell-border[data-v-8cda85fa]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;border-bottom:1px solid #e4e7ed;right:0;left:0;top:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.u-cell-border[data-v-8cda85fa]{position:relative}.u-cell__label[data-v-8cda85fa]{margin-top:%?6?%;font-size:%?26?%;line-height:%?36?%;color:#909399;word-wrap:break-word}.u-cell__value[data-v-8cda85fa]{overflow:hidden;text-align:right;vertical-align:middle;color:#909399;font-size:%?26?%}.u-cell__title[data-v-8cda85fa],\r\n.u-cell__value[data-v-8cda85fa]{flex:1}.u-cell--required[data-v-8cda85fa]{overflow:visible;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center}.u-cell--required[data-v-8cda85fa]:before{position:absolute;content:"*";left:8px;margin-top:%?4?%;font-size:14px;color:#fa3534}.u-cell_right[data-v-8cda85fa]{line-height:1}',""]),t.exports=e},7097:function(t,e,n){"use strict";var r=n("eea9"),a=n.n(r);a.a},"70df":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-cell-box"},[t.title?n("v-uni-view",{staticClass:"u-cell-title",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-cell-item-box",class:{"u-border-bottom u-border-top":t.border}},[t._t("default")],2)],1)},o=[]},"73d4":function(t,e,n){var r=n("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 默认主题色 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.foot[data-v-2cb2a935]{height:40px}.tit[data-v-2cb2a935]{font-size:18px}.list[data-v-2cb2a935]{flex-direction:column;background-color:#fff;margin-top:10px}.list-head[data-v-2cb2a935]{position:relative;background-color:#f8f8f8;padding:10px 22px;color:#333}.list-head-before[data-v-2cb2a935]{position:absolute;left:13px;top:10px;bottom:10px;width:3px;background-color:#d8d8d8;border-radius:8px}.list-item[data-v-2cb2a935]{position:relative;flex-direction:column;margin:0 0 0 13px;padding:10px 60px 10px 0}.list-item[data-v-2cb2a935]:last-child{border-bottom-width:0}.title[data-v-2cb2a935]{font-size:14px;margin-bottom:4px;color:#333}.note[data-v-2cb2a935]{font-size:12px;color:#999}.icon_ctn[data-v-2cb2a935]{position:absolute;justify-items:center;right:13px;top:0;bottom:0;align-items:center;flex-direction:row}.hxicon[data-v-2cb2a935]{color:#d8d8d8;font-size:%?60?%}.ctn[data-v-2cb2a935]{background-color:#f1f1f1}',""]),t.exports=e},"79a5":function(t,e,n){"use strict";n.r(e);var r=n("1048"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},a9c7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r={name:"u-cell-item",props:{icon:{type:String,default:""},title:{type:[String,Number],default:""},value:{type:[String,Number],default:""},label:{type:[String,Number],default:""},borderBottom:{type:Boolean,default:!0},borderTop:{type:Boolean,default:!1},hoverClass:{type:String,default:"u-cell-hover"},arrow:{type:Boolean,default:!0},center:{type:Boolean,default:!1},required:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:""},arrowDirection:{type:String,default:"right"},titleStyle:{type:Object,default:function(){return{}}},valueStyle:{type:Object,default:function(){return{}}},labelStyle:{type:Object,default:function(){return{}}},bgColor:{type:String,default:"transparent"},index:{type:[String,Number],default:""},useLabelSlot:{type:Boolean,default:!1},iconSize:{type:[Number,String],default:34},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{arrowStyle:function(){var t={};return"up"==this.arrowDirection?t.transform="rotate(-90deg)":"down"==this.arrowDirection?t.transform="rotate(90deg)":t.transform="rotate(0deg)",t}},methods:{click:function(){this.$emit("click",this.index)}}};e.default=r},ad68:function(t,e,n){var r=n("702b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("c7dae34e",r,!0,{sourceMap:!1,shadowMode:!1})},afc8:function(t,e,n){var r=n("73d4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("2b7b88a0",r,!0,{sourceMap:!1,shadowMode:!1})},b719:function(t,e,n){"use strict";var r=n("afc8"),a=n.n(r);a.a},d9c2:function(t,e,n){"use strict";var r=n("ad68"),a=n.n(r);a.a},e5ad:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={wbPage:n("3d57").default,uCellGroup:n("3f33").default,uCellItem:n("1afb").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wb-page",{staticClass:"ctn",attrs:{config:t.config,"scroll-top":t.scrollTop},on:{clickBtn:function(e){arguments[0]=e=t.$handleEvent(e),t.onRightBtn.apply(void 0,arguments)}}},[t._l(t.demoList,(function(e,r){return n("u-cell-group",{key:r,staticClass:"u-p-b-20",attrs:{border:!0,title:e.head,"title-style":{"font-size":"36rpx","background-color":"#fff",color:"#333"}}},t._l(e.list,(function(e,r){return n("u-cell-item",{key:r,attrs:{title:e.title,"border-top":!1,label:e.note},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigate(e.url)}}})})),1)})),n("v-uni-view",{staticClass:"foot"})],2)},o=[]},e740:function(t,e,n){var r=n("4bad");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* COOL-UNI 颜色变量 */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 默认主题色 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-cell-box[data-v-25155fea]{width:100%}.u-cell-title[data-v-25155fea]{padding:%?30?% %?32?% %?10?% %?32?%;font-size:%?30?%;text-align:left;color:#909399}.u-cell-item-box[data-v-25155fea]{background-color:#fff;flex-direction:row}',""]),t.exports=e},eea9:function(t,e,n){var r=n("e740");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("09c6da56",r,!0,{sourceMap:!1,shadowMode:!1})}}]);