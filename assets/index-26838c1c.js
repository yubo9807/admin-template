import{g,d as y,G as V,W as E,q as v,Q as C,X as F,T as _,Y as D,_ as B,r as i,o as N,e as k,w as a,b as u,B as M}from"./index-f0fda0f1.js";const w=()=>{const e=g(),l=e.props,s=y(!1),m=y([]),n=V({name:"",title:"",parent:""}),b={title:{required:!0,message:"请输入菜单名称",trigger:"blur"},name:{required:!0,message:"请输入Name",trigger:"blur"}};async function d(){e.refs.formRef.validate(async t=>{t&&(l.type===0?r():p())})}async function r(){const o=C(n),[t]=await F(o);t||(s.value=!1,_.success("添加成功"),e.emit("success"))}async function p(){const o=C({id:l.need.id,...n}),[t]=await D(o);t||(s.value=!1,_.success("修改成功"),e.emit("success"))}const f=E("getMenuList");v(()=>s.value,o=>{if(o){if(m.value=f(),l.type===1)for(const t in n)n[t]=l.need[t]}else{e.refs.formRef.resetFields();for(const t in n)n[t]=""}});function c(o){n.parent=o.id}return{visible:s,menuList:m,form:n,rules:b,submit:d,treeNodeClick:c}},L={props:{type:{type:Number,default:0},need:{type:Object,default:()=>({})}},setup:w};function U(e,l,s,m,n,b){const d=i("el-input"),r=i("el-form-item"),p=i("el-tree-select"),f=i("el-button"),c=i("el-form"),o=i("el-dialog");return N(),k(o,{modelValue:e.visible,"onUpdate:modelValue":l[3]||(l[3]=t=>e.visible=t),width:"400px",title:s.type===1?"修改菜单":"新增菜单"},{default:a(()=>[u(c,{ref:"formRef","label-width":"100px",model:e.form,rules:e.rules},{default:a(()=>[u(r,{label:"菜单名称",prop:"title"},{default:a(()=>[u(d,{modelValue:e.form.title,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form.title=t)},null,8,["modelValue"])]),_:1}),u(r,{label:"Name",prop:"name"},{default:a(()=>[u(d,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=t=>e.form.name=t),placeholder:"保证唯一，对应前端路由设置 name"},null,8,["modelValue"])]),_:1}),u(r,{label:"父级菜单"},{default:a(()=>[u(p,{modelValue:e.form.parent,"onUpdate:modelValue":l[2]||(l[2]=t=>e.form.parent=t),data:e.menuList,clearable:"",props:{children:"children",label:"title",value:"id"},"render-after-expand":!1,onNodeClick:e.treeNodeClick},null,8,["modelValue","data","onNodeClick"])]),_:1}),u(r,null,{default:a(()=>[u(f,{type:"primary",onClick:e.submit},{default:a(()=>l[4]||(l[4]=[M("确认")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}const A=B(L,[["render",U]]);export{A as default};
