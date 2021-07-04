declare interface LoginForm {
  username: string,
  password: string,
}

declare interface Menu {
  path: string;
  name: string;
  meta: {
    title: string;
    icon: string;
    affix: boolean; // scrollBar 中能否关闭
    hidden: boolean; // 是否生成菜单栏
  };
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
  affix: boolean;
}









