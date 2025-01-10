var A=Object.defineProperty;var D=e=>{throw TypeError(e)};var N=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>N(e,typeof t!="symbol"?t+"":t,n),F=(e,t,n)=>t.has(e)||D("Cannot "+n);var g=(e,t,n)=>(F(e,t,"read from private field"),n?n.call(e):t.get(e)),k=(e,t,n)=>t.has(e)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),w=(e,t,n,s)=>(F(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n);import{W as S,g as v,N as B,n as $,d as T,E as V,X as H,P as K,Q as M,Y as q,_ as z,r as d,o as P,c as Q,b as l,w as i,H as R,A as h,t as U}from"./index-BSlZPnKU.js";import W from"./index-D11DutdX.js";import X from"./index-DNGExMmX.js";import{d as Y}from"./date-CMk_DNDl.js";import{I as j}from"./init-table-Bp6pmAqC.js";const G={name:""};var p,f;class J extends j{constructor(){super(G,S);k(this,p,null);k(this,f,null);I(this,"initData",async()=>{const n=B({roleId:g(this,f).roleId,menuId:g(this,f).menuId,...this.form}),[s,m]=await S(n);if(s)return;this.tableData.value=m.data;const _=g(this,p).refs.tableEl,E=m.data.filter(u=>u.selected);$(()=>{E.forEach(u=>_.toggleRowSelection(u))})});w(this,p,v()),w(this,f,g(this,p).props)}}p=new WeakMap,f=new WeakMap;const O=()=>{const e=v(),t=e.proxy,n=e.props,s=T(0),m=T({});function _(){s.value=0,m.value={menuId:n.menuId},e.refs.dialogElement.visible=!0}function E(a){const{id:r,name:c,key:y,menuId:b}=a;s.value=1,m.value={id:r,name:c,key:y,menuId:b},e.refs.dialogElement.visible=!0}function u(a){V.confirm("确认删除该元素","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(async()=>{const[r,c]=await H({id:a.id});r||(K.success("删除成功"),t.initData())}).catch(()=>{})}async function C(a){const r=a.map(o=>o.id),c=t.tableData.filter(o=>!r.includes(o.id)).map(o=>o.id),y=B({tableType:"element",roleId:n.roleId,contactIdList:r,deleteIdList:c}),[b]=await M(y);b||t.initData()}return{dialogElementType:s,dialogElementNeed:m,addElement:_,modifyElement:E,deleteElement:u,select:C}},Z={components:{LayoutSearchHeader:q,TableAddBtn:W,DialogElement:X},props:{roleId:{type:[String,Number],required:!0},menuId:{type:String,default:""}},setup:()=>({dateFormater:Y,...new J,...O()})},x={class:"element-list"};function ee(e,t,n,s,m,_){const E=d("el-input"),u=d("el-button"),C=d("LayoutSearchHeader"),a=d("el-table-column"),r=d("el-link"),c=d("el-table"),y=d("TableAddBtn"),b=d("DialogElement");return P(),Q("div",x,[l(C,{"right-width":"340px"},{left:i(()=>[l(E,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.form.name=o),placeholder:"请输入元素名称",onKeyup:R(e.search,["enter"]),onClear:e.search},null,8,["modelValue","onKeyup","onClear"])]),right:i(()=>[l(u,{type:"primary",onClick:e.search},{default:i(()=>t[1]||(t[1]=[h("查询")])),_:1},8,["onClick"]),l(u,{onClick:e.reset},{default:i(()=>t[2]||(t[2]=[h("重置")])),_:1},8,["onClick"])]),_:1}),l(c,{ref:"tableEl",data:e.tableData,onSelect:e.select,onSelectAll:e.select},{default:i(()=>[l(a,{type:"selection",width:"40",label:""}),l(a,{type:"index",label:"序号",width:"60"}),l(a,{label:"元素名称",prop:"name"}),l(a,{label:"Key",prop:"key"}),l(a,{label:"更新时间"},{default:i(o=>[h(U(e.dateFormater((o.row.updateTime||o.row.createTime)*1e3)),1)]),_:1}),l(a,{label:"操作",fixed:"right",width:"100"},{default:i(o=>[l(r,{onClick:L=>e.modifyElement(o.row)},{default:i(()=>t[3]||(t[3]=[h("修改")])),_:2},1032,["onClick"]),l(r,{type:"danger",onClick:L=>e.deleteElement(o.row)},{default:i(()=>t[4]||(t[4]=[h("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelect","onSelectAll"]),l(y,{onClick:e.addElement},null,8,["onClick"]),l(b,{ref:"dialogElement",type:e.dialogElementType,need:e.dialogElementNeed,onSuccess:e.initData},null,8,["type","need","onSuccess"])])}const re=z(Z,[["render",ee]]);export{re as default};
