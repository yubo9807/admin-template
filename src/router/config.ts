
export type RouteConfig = {
  [K: string]: {
    order?:    number
    title:     string
    icon?:     string
    redirect?: string                  // name | path
    hidden?:   boolean                 // 在侧边栏隐藏
    roles?:    Array<string | number>  // 授权角色
    dynamic?:  string                  // 动态路由页面
    href?:     string                  // 外部链接
  }
}

export const exclude = ['login'];  // 排除页面，不参与生成路由

// key 对应 @/src/views/<url> 转大驼峰
export const pageConfig: RouteConfig = {
  Home:
    { icon: '&#xe004;', title: '首页', },
  Example:
    { icon: '&#xe004;', title: '例子', },
  ExampleTable:
    { title: '表格', },
  ExampleChild2:
    { title: '二级菜单', },
  ExampleChild2Grandson1:
    { title: '三级菜单1', },
  ExampleChild2Grandson2:
    { title: '三级菜单2', },
  ExampleDynamic:
    { title: '动态路由页', dynamic: ':id', hidden: true },
  System:
    { icon: '&#xe004;', title: '系统管理', },
  SystemRoles:
    { title: '角色管理', },
  SystemMenu:
    { title: '权限分配', },
}
