(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/detail/detail"],{"1edf":function(t,n,a){},"46ad":function(t,n,a){"use strict";(function(t){a("fd2c");e(a("66fd"));var n=e(a("7c7a"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},"482c":function(t,n,a){"use strict";a.r(n);var e=a("6504"),u=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=u.a},"484f":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},6504:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{id:"",dataList:{}}},onLoad:function(t){console.log(t),this.id=t.id,this.getData()},methods:{getData:function(){var n=this;t.request({url:"https://mock.yonyoucloud.com/mock/16335/demo/detail",data:{id:this.id},success:function(t){n.dataList=t.data.data,console.log(n.dataList)}})}}};n.default=a}).call(this,a("543d")["default"])},"67bc":function(t,n,a){"use strict";var e=a("1edf"),u=a.n(e);u.a},"7c7a":function(t,n,a){"use strict";a.r(n);var e=a("484f"),u=a("482c");for(var c in u)"default"!==c&&function(t){a.d(n,t,(function(){return u[t]}))}(c);a("67bc");var o,i=a("f0c5"),d=Object(i["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=d.exports}},[["46ad","common/runtime","common/vendor"]]]);