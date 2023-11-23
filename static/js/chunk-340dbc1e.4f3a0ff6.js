(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-340dbc1e"],{"6f84":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticClass:"add-printer-btn",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.addPrinter}},[t._v("添加打印机")]),n("el-button",{staticClass:"add-printer-btn",attrs:{icon:"el-icon-arrow-left"},on:{click:t.goBack}},[t._v("返回上一页")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.printerDataList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+t.startIndex+1)+" ")]}}])}),n("el-table-column",{attrs:{label:"打印机名称",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.printer_name)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:0===e.row.printerState?"success":"danger"}},[t._v(" "+t._s(0===e.row.printer_status?"在线":"离线")+" ")])]}}])}),n("el-table-column",{attrs:{label:"纸张大小",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.paper_format)+" ")]}}])}),n("el-table-column",{attrs:{label:"剩余纸张数",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.paper_num)+" ")]}}])}),n("el-table-column",{attrs:{label:"颜色",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0===e.row.color_mode?"黑白":1===e.row.color_mode?"彩色":"黑白/彩色")+" ")]}}])}),n("el-table-column",{attrs:{label:"自动双面",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0===e.row.auto_duplex?"否":"是")+" ")]}}])}),n("el-table-column",{attrs:{label:"单面价格",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.color_mode?n("div",[n("span",[t._v("黑白：")]),t._l(e.row.bw_single_price,(function(e){return n("span",{key:e.value,staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.range)+"页："+t._s(e.value)+"元，")])}))],2):t._e(),0!==e.row.color_mode?n("div",[n("span",[t._v("彩色：")]),t._l(e.row.color_single_price,(function(e){return n("span",{key:e.value,staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.range)+"页："+t._s(e.value)+"元，")])}))],2):t._e()]}}])}),n("el-table-column",{attrs:{label:"双面价格",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return 1===e.row.auto_duplex?[1!==e.row.color_mode?n("div",[n("span",[t._v("黑白：")]),t._l(e.row.bw_double_price,(function(e){return n("span",{key:e.value,staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.range)+"页："+t._s(e.value)+"元，")])})),n("br")],2):t._e(),0!==e.row.color_mode?n("div",[n("span",[t._v("彩色：")]),t._l(e.row.color_double_price,(function(e){return n("span",{key:e.value,staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.range)+"页："+t._s(e.value)+"元，")])}))],2):t._e()]:void 0}}],null,!0)}),n("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(n){return t.ediotPrinter(e.row.printer_id)}}},[t._v("修改")]),n("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:function(n){return t.deletePrinter(e.row.printer_id)}}},[t._v("删除")]),n("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:function(n){return t.getQRCode(e.row.printer_id)}}},[t._v("打印机小程序码下载")])]}}])})],1),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","page-size":t.pageSize,"pager-count":11,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)},a=[],i=(n("fb6a"),n("c740"),n("a434"),n("7a84")),o=n("5c96"),c={data:function(){return{printerDataList:null,backupsPrinterData:null,listLoading:!0,currentPage:1,pageSize:5,total:0,deviceId:0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e=this.$route.query.deviceId;void 0===e&&(e=localStorage.getItem("deviceId")),this.deviceId=e,Object(i["e"])(e).then((function(e){console.log(e.data);var n=e.data;t.$store.dispatch("printer/setPrinterList",n);var r=(t.currentPage-1)*t.pageSize,a=r+t.pageSize;t.backupsPrinterData=n,t.printerDataList=n.slice(r,a),t.total=n.length,t.startIndex=r,t.listLoading=!1}))},handleCurrentChange:function(t){this.currentPage=t;var e=this.backupsPrinterData,n=(this.currentPage-1)*this.pageSize,r=n+this.pageSize;this.printerDataList=e.slice(n,r),this.total=e.length,this.startIndex=n,this.listLoading=!1},addPrinter:function(){this.$router.push("/device/printer/add?deviceId="+this.deviceId)},goBack:function(){this.$router.back()},ediotPrinter:function(t){localStorage.setItem("printerId",t),this.$router.push("/device/printer/ediot?printerId="+t)},deletePrinter:function(t){var e=this,n={printer_id:t};o["MessageBox"].confirm("确定修改密码吗?","Confirmation",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(n).then((function(n){if(e.$message.error("打印机删除成功"),console.log("打印机删除成功",n),"0"===n.status){var r=e.printerDataList.findIndex((function(e){return e.printer_id===t}));-1!==r&&(e.printerDataList.splice(r,1),e.backupsPrinterData.slice(r,1))}}))})).catch((function(){e.$message.info("取消了")}))},getQRCode:function(t){var e=this,n={device_id:this.deviceId,printer_id:t};Object(i["c"])(n).then((function(t){var n=t.data,r=e.generateRandomString(10),a=document.createElement("a");a.href=n,a.download=r+".png",document.body.appendChild(a),a.click(),document.body.removeChild(a)})).catch((function(t){console.log(t)}))},generateRandomString:function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",r=0;r<t;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}}},l=c,u=(n("8f73"),n("2877")),s=Object(u["a"])(l,r,a,!1,null,"771d748d",null);e["default"]=s.exports},"7a84":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return s}));n("d3b7"),n("e9c4");var r=n("b775"),a=n("5f87");function i(t){return Object(r["a"])({url:"/my/shopGetPrinter",method:"get",params:{token:Object(a["a"])(),device_id:t}})}function o(t){return Object(r["a"])({url:"/my/getPrinterInfo",method:"get",params:{token:Object(a["a"])(),printer_id:t}})}function c(t){var e=["bw_single_price","bw_double_price","color_single_price","color_double_price"];return e.forEach((function(e){t[e]&&(t[e]=JSON.stringify(t[e]))})),Object(r["a"])({url:"/my/shopAddPrinter",method:"post",params:{token:Object(a["a"])()},data:t})}function l(t){return Object(r["a"])({url:"/my/shopDeletePrinter",method:"post",params:{token:Object(a["a"])()},data:t})}function u(t){var e=["bw_single_price","bw_double_price","color_single_price","color_double_price"];return e.forEach((function(e){t[e]&&(t[e]=JSON.stringify(t[e]))})),Object(r["a"])({url:"/my/shopUpdataPrinter",method:"post",params:{token:Object(a["a"])()},data:t})}function s(t){return Object(r["a"])({url:"/my/getQRCode",method:"post",params:{token:Object(a["a"])()},data:t})}},"8f73":function(t,e,n){"use strict";n("f1cb")},e9c4:function(t,e,n){var r=n("23e7"),a=n("d066"),i=n("d039"),o=a("JSON","stringify"),c=/[\uD800-\uDFFF]/g,l=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,s=function(t,e,n){var r=n.charAt(e-1),a=n.charAt(e+1);return l.test(t)&&!u.test(a)||u.test(t)&&!l.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},d=i((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&r({target:"JSON",stat:!0,forced:d},{stringify:function(t,e,n){var r=o.apply(null,arguments);return"string"==typeof r?r.replace(c,s):r}})},f1cb:function(t,e,n){}}]);