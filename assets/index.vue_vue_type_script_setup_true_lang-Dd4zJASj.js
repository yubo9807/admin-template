import{z as T,d as _,D as j,I as z,p as B,r as i,o as F,e as O,w as n,b as l,A as q,a7 as A,a8 as D,N as y,P as V,a9 as I,aa as J,J as K,K as M}from"./index-BSlZPnKU.js";const G=T({__name:"index",props:{type:{},info:{},need:{}},emits:["success"],setup(b,{expose:v,emit:k}){const s=b,r=_(!1),m=Object.freeze({role:"",remark:"",parent:""}),t=j(Object.assign({},m)),g={role:{required:!0,message:"请输入角色",trigger:"blur"}},u=z(),f=_([]);async function w(){const[a,e]=await K({});a||(f.value=M(e.data))}function x(a){t.parent=a.id}B(()=>r.value,a=>{if(a){if(w(),s.type==="modify")for(const e in s.info)t[e]=s.info[e]}else{for(const e in t)t[e]=m[e];u.value.clearValidate()}});const p=k;function C(){u.value.validate(async a=>{a&&(s.type==="add"&&R(),s.type==="modify"&&N())})}async function R(){const[a]=await D(y(t));a||(V.success("添加成功"),r.value=!1,p("success"))}async function N(){const a=y({...s.need,...t}),[e]=await I(a);e||(V.success("修改成功"),r.value=!1,p("success"))}return v({visible:r}),(a,e)=>{const c=i("el-input"),d=i("el-form-item"),U=i("el-tree-select"),E=i("el-button"),L=i("el-dialog");return F(),O(L,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=o=>r.value=o),width:"400px",title:a.type==="add"?"新增角色":"修改角色"},{default:n(()=>[l(A(J),{ref_key:"formRef",ref:u,model:t,rules:g,"label-width":"100px"},{default:n(()=>[l(d,{label:"角色",prop:"role"},{default:n(()=>[l(c,{modelValue:t.role,"onUpdate:modelValue":e[0]||(e[0]=o=>t.role=o)},null,8,["modelValue"])]),_:1}),l(d,{label:"备注"},{default:n(()=>[l(c,{modelValue:t.remark,"onUpdate:modelValue":e[1]||(e[1]=o=>t.remark=o)},null,8,["modelValue"])]),_:1}),l(d,{label:"父级角色"},{default:n(()=>[l(U,{modelValue:t.parent,"onUpdate:modelValue":e[2]||(e[2]=o=>t.parent=o),data:f.value,clearable:"",props:{children:"children",label:"role",value:"id"},"render-after-expand":!1,onNodeClick:x},null,8,["modelValue","data"])]),_:1}),l(d,null,{default:n(()=>[l(E,{type:"primary",onClick:C},{default:n(()=>e[4]||(e[4]=[q("确认")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});export{G as _};
