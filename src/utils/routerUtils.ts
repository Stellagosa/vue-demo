import { RouteRecordRaw } from "vue-router";

export function formatRoutes(routes: PreRoute[]): RouteRecordRaw[] {
  let result: RouteRecordRaw[] = []
  routes.forEach(route => {
    let {
      path,
      component,
      name,
      meta,
      redirect,
      children = []
    } = route;
    let fmRouter = {
      path: path,
      component: loadView(component),
      name: name,
      meta: meta,
      redirect: redirect,
      children: formatRoutes(children)
    }
    result.push(fmRouter)
  })
  return result
}

function loadView(view: string) {
  return () => import(`/src/view/${ view }`)
}
