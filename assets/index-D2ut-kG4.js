import w from"./index-DraLmBDR.js";import V from"./index-76z5C8Zu.js";import{d as u,p,n as b,g as y,_ as T,r as n,o as C,e as D,w as s,b as r,A as f,k as c,v as I}from"./index-BSlZPnKU.js";import"./index-D11DutdX.js";import"./index-jcJ_iJIt.js";import"./date-CMk_DNDl.js";import"./init-table-Bp6pmAqC.js";import"./index-DNGExMmX.js";const k=()=>{const t=y(),e=u(!1),o=u(0),a={0:"interfaceListRef",1:"elementListRef"};return p(()=>e.value,l=>{l&&b(()=>{t.refs[a[o.value]].initData()})}),p(()=>o.value,l=>{t.refs[a[l]].initData()}),{visible:e,selectType:o}},E={components:{InterfaceList:w,ElementList:V},props:{roleId:{type:[String,Number],required:!0},menuId:{type:String,default:""}},setup:k};function R(t,e,o,a,l,m){const d=n("el-radio"),_=n("el-radio-group"),v=n("InterfaceList"),L=n("ElementList"),g=n("el-drawer");return C(),D(g,{modelValue:t.visible,"onUpdate:modelValue":e[1]||(e[1]=i=>t.visible=i),size:"80%"},{default:s(()=>[r(_,{modelValue:t.selectType,"onUpdate:modelValue":e[0]||(e[0]=i=>t.selectType=i),class:"ml-4"},{default:s(()=>[r(d,{label:0},{default:s(()=>e[2]||(e[2]=[f("接口")])),_:1}),r(d,{label:1},{default:s(()=>e[3]||(e[3]=[f("元素")])),_:1})]),_:1},8,["modelValue"]),c(r(v,{ref:"interfaceListRef",roleId:o.roleId,menuId:o.menuId},null,8,["roleId","menuId"]),[[I,t.selectType===0]]),c(r(L,{ref:"elementListRef",roleId:o.roleId,menuId:o.menuId},null,8,["roleId","menuId"]),[[I,t.selectType===1]])]),_:1},8,["modelValue"])}const x=T(E,[["render",R]]);export{x as default};
