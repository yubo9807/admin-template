import{I as c}from"./init-table-55f0cb87.js";import{_ as f,r as u,o as h,e as y,w as t,b as a,I as B,B as l,a as F,t as _}from"./index-f0fda0f1.js";function S(e){return Promise.resolve([null,{code:200,data:{data:[{chainId:"d592d7c1560d8b658227d12abbd26c02",name:"主链",byUserName:"count_one",tag:"1005",status:1}],totalCount:1}}])}const z={setup(){const e={name:""};class n extends c{constructor(){super(e,S),this.initData()}}return{...new n}}};function D(e,n,p,s,I,E){const d=u("el-input"),i=u("el-button"),g=u("LayoutSearch"),r=u("el-table-column"),m=u("el-table"),C=u("el-pagination"),b=u("LayoutContainer");return h(),y(b,null,{header:t(()=>[a(g,null,{left:t(()=>[a(d,{modelValue:e.form.name,"onUpdate:modelValue":n[0]||(n[0]=o=>e.form.name=o),class:"input",onKeyup:B(e.search,["enter"]),onClear:e.search},null,8,["modelValue","onKeyup","onClear"])]),right:t(()=>[a(i,{onClick:e.search},{default:t(()=>n[3]||(n[3]=[l("查询")])),_:1},8,["onClick"]),a(i,{type:"primary",onClick:e.reset},{default:t(()=>n[4]||(n[4]=[l("重置")])),_:1},8,["onClick"])]),_:1}),n[5]||(n[5]=F("h2",null,"公共类：表格 搜索/分页 逻辑",-1))]),footer:t(()=>[a(C,{"current-page":e.paging.pageNumber,"onUpdate:currentPage":n[1]||(n[1]=o=>e.paging.pageNumber=o),"page-size":e.paging.pageSize,"onUpdate:pageSize":n[2]||(n[2]=o=>e.paging.pageSize=o),total:e.paging.total,onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])]),default:t(()=>[a(m,{data:e.tableData,height:"100%"},{default:t(()=>[a(r,{label:"序号",type:"index",width:"60"},{default:t(o=>[l(_(e.pagingIndex(o.$index)),1)]),_:1}),a(r,{label:"子链ID",prop:"chainId","min-width":"220"}),a(r,{label:"子链名称",prop:"name"}),a(r,{label:"用户名",prop:"byUserName"}),a(r,{label:"标签",prop:"tag"})]),_:1},8,["data"])]),_:1})}const w=f(z,[["render",D]]);export{w as default};
