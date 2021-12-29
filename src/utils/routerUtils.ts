import { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob("../view/**/*.vue")
export function formatRoutes(routes: Menu[]): RouteRecordRaw[] {
  let result: RouteRecordRaw[] = []
  routes.forEach(route => {
    let {
      path,
      name,
      meta,
      redirect,
      component,
      children = []
    } = route;
    let fmRouter = {
      path: path,
      name: name,
      meta: meta,
      redirect: redirect,
      component: modules[`../view/${component}.vue`],
      children: formatRoutes(children)
    }
    result.push(fmRouter)
  })
  return result
}
