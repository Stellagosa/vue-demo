import { RouteRecordRaw } from "vue-router";

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
      component: loadView(component),
      children: formatRoutes(children)
    }
    result.push(fmRouter)
  })
  return result
}

function loadView(view: string) {
  return () => import(`/src/view/${ view }`)
}
