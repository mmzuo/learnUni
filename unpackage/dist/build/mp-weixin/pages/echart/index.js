(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/echart/index"],{"24c2":function(e,t,a){"use strict";a.r(t);var i=a("896e"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"32b9":function(e,t,a){},"49f5":function(e,t,a){"use strict";a.r(t);var i=a("f86e"),n=a("24c2");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("5f57");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports},"5f57":function(e,t,a){"use strict";var i=a("32b9"),n=a.n(i);n.a},"896e":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=o(a("2357"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s={},c={data:function(){return r({cWidth:"",cHeight:"",pixelRatio:1,serverData:""},"pixelRatio",1)},onLoad:function(t){console.log(t.id,t.time),i=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500),this.getServerData()},methods:{getServerData:function(){e.request({url:"https://mock.yonyoucloud.com/mock/16335/demo/echart",data:{},success:function(e){console.log(e.data.data),i.serverData=e.data.data;var t={categories:[],series:[]},a={series:[]},n={categories:[],series:[]};t.categories=e.data.data.Column.categories,t.series=e.data.data.Column.series,a.series=e.data.data.Pie.series,n.categories=e.data.data.LineA.categories,n.series=e.data.data.LineA.series,i.showColumn("canvasColumn",t),i.showPie("canvasPie",a),i.showLineA("canvasLineA",n)},fail:function(){console.log("网络错误，小程序端请检查合法域名")}})},showColumn:function(e,t){s[e]=new n.default({$this:i,canvasId:e,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!0,categories:t.categories,series:t.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{width:i.cWidth*i.pixelRatio*.45/t.categories.length}}})},changeData:function(){s.updateData({series:i.serverData.ColumnB.series,categories:i.serverData.ColumnB.categories})},showPie:function(e,t){s[e]=new n.default({$this:i,canvasId:e,type:"pie",fontSize:11,legend:{show:!0},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:t.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},touchPie:function(e){canvaPie.showToolTip(e,{format:function(e){return e.name+":"+e.data}})},showLineA:function(e,t){new n.default({$this:i,canvasId:e,type:"line",fontSize:11,legend:{show:!0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:5,min:10,max:180,format:function(e){return e.toFixed(0)+"元"}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(e){canvaLineA.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=c}).call(this,a("543d")["default"])},ed66:function(e,t,a){"use strict";(function(e){a("fd2c");i(a("66fd"));var t=i(a("49f5"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},f86e:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]}},[["ed66","common/runtime","common/vendor"]]]);