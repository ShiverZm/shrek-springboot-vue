webpackJsonp([6],{AfzA:function(e,t,a){var n=a("tpkp");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("0af10bff",n,!0)},cA1i:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{tempObject:{tablename:""},allTables:[],dialogFormVisible:!0,adminName:"管理员"}},created:function(){this.queryAllTable()},methods:{queryAllTable:function(){var e=this;this.api({url:"/generator/queryAllTable",method:"get"}).then(function(t){e.allTables=t.list})},codeGen:function(){var e=this;this.api({url:"/generator/code",method:"get",params:{tablename:e.tempObject.tablename},responseType:"arraybuffer"}).then(function(t){var a=new Blob([t],{type:"application/zip"}),n=e.tempObject.tablename+".zip",l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=n,document.body.appendChild(l),l.click(),window.setTimeout(function(){URL.revokeObjectURL(a),document.body.removeChild(l)},0)})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{inline:!0,model:e.tempObject,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"表名",required:""}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.tempObject.tablename,callback:function(t){e.$set(e.tempObject,"tablename",t)},expression:"tempObject.tablename"}},e._l(e.allTables,function(e){return a("el-option",{key:e.tableName,attrs:{label:e.tableName,value:e.tableName}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.codeGen}},[e._v("生成")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(e){a("AfzA")},"data-v-458461ba",null);t.default=o.exports},tpkp:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.requiredPerm[data-v-458461ba] {\n  color: #ff0e13;\n}\n","",{version:3,sources:["D:/shrekspringboot/backpage/src/views/user/codegen.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB",file:"codegen.vue",sourcesContent:["\n.requiredPerm[data-v-458461ba] {\n  color: #ff0e13;\n}\n"],sourceRoot:""}])}});