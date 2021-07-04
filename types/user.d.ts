declare interface LoginForm {
  username: string,
  password: string,
}

declare interface PreRoute {
  id: number,
  parentId: number,
  icon: string,
  name: string,
  path: string,
  component: string,
  redirect: string,
  meta: {},
  children: PreRoute[]
}

declare interface Menu {
  id: number;
  parentId: number;
  path: string;
  name: string;
  icon: string;
  redirect: string;
  component: string;
  children: Menu[];
}

interface userInfo {
  access_token: string,
  refresh_token: string,
  username: string,
  nickname: string,
  avatar: string,
  introduction: string,
  roles: string[]
}

declare interface Breadcrumb {
  to: string;
  name: string;
}

declare interface TabBar {
  path: string;
  name: string;
  title: string;
}









