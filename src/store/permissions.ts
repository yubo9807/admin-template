import { defineStore } from "pinia";
import { api_getElementList, api_getMenuList } from "../api/permissions";
import { getTreeRoutes, routesAll } from "../router/create-routes";
import { RouteRecordRaw } from "vue-router";
import { deepClone } from "@/utils/object";
const newRoutes = deepClone(routesAll);  // 防止影响原数据

type MenuItem = {
  name: string
  parent: string
  count: number
  roleId: string
  title: string
  selected: boolean
}
type ElementItem = {
  name: string
  roleId: string
  key: string
}

type State = {
  enable: boolean
  routerList: RouteRecordRaw[]
  permitNames: string[]
  elements: ElementItem[]
}
export default defineStore('permissions', {
  state: (): State => ({
    enable: false,  // 是否启用接口控制权限控制模块
    routerList: [],  // 处理后的树形 router 数据
    permitNames: newRoutes.map(val => val.name as string).filter(val => !!val),  // 允许访问的路由名称
    elements: [],  // 按钮权限
  }),

  actions: {
    /**
     * @description: 获取并匹配路由数据
     */
    async getMenuList(roleId: string | number) {
      if (!this.enable) return;

      const [err, res] = await api_getMenuList({ roleId })
      if (err) return;

      const list: MenuItem[] = res.data;
      for (const route of newRoutes) {
        const item = list.find(val => val.name === route.name);
        if (!item) continue;  // 没有配置过
        if (!item.selected) {
          const index = this.permitNames.findIndex(val => val === route.name);
          if (index >= 0) {
            this.permitNames.splice(index, 1);
          }
          route.meta.roles = [];
        } else {
          route.meta.roles = [roleId];
        }
      }
      this.routerList = getTreeRoutes(newRoutes)
    },

    /**
     * 获取匹配路由
     * @param name 路由 name
     * @returns 
     */
    matched(name: string) {
      return getRouteMatched(this.routerList, name);
    },

    async getElements(roleId: string | number) {
      const [err, res] = await api_getElementList({ roleId })
      if (err) return;
      this.elements = res.data.filter(val => val.selected);
    },

    init(roleId: string | number) {
      const arr = [this.getMenuList(roleId), this.getElements(roleId)];
      return Promise.all(arr)
    }
  }
})

/**
 * 获取匹配路由
 * @param routes 路由数据
 * @param name 查找的 name
 * @param collect 无需传递，递归用
 * @returns 
 */
function getRouteMatched(routes: RouteRecordRaw[], name: string, collect: RouteRecordRaw[] = []) {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].name === name) {
      collect.push(routes[i]);
      break;
    }
    if (routes[i].children && routes[i].children.length > 0) {
      const results = getRouteMatched(routes[i].children, name, collect);
      if (results.length === 0) {
        continue;
      }
      collect.unshift(routes[i]);
    }
  }
  return collect;
}
