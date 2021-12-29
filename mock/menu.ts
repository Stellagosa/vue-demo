import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "./util";

const menu = [
  {
    "path": '/menu',
    "name": 'MultilevelMenu',
    "meta": {
      "title": "多级菜单",
      "icon": "el-icon-s-operation",
      "affix": false,
      "hidden": false
    },
    "redirect": null,
    "component": "menu/index",
    "children": [
      {
        "path": '/menu/menu1',
        "name": 'menu1',
        "meta": {
          "title": "一级菜单-1",
          "icon": "",
          "affix": false,
          "hidden": false
        },
        "redirect": null,
        "component": "menu/menu1/index",
        "children": [
          {
            "path": '/menu/menu1/menu1-1',
            "name": 'menu1-1',
            "meta": {
              "title": "二级菜单-1",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "menu/menu1/menu1-1/index",
            "children": [
              {
                "path": '/menu/menu1/menu1-1/menu1-1-1',
                "name": 'menu1-1-1',
                "meta": {
                  "title": "三级菜单-1",
                  "icon": "",
                  "affix": false,
                  "hidden": false
                },
                "redirect": null,
                "component": "menu/menu1/menu1-1/menu1-1-1/index",
                "children": [
                  {
                    "path": '/menu/menu1/menu1-1/menu1-1-1/menu1-1-1-1',
                    "name": 'menu1-1-1-1',
                    "meta": {
                      "title": "四级菜单",
                      "icon": "",
                      "affix": false,
                      "hidden": false
                    },
                    "redirect": null,
                    "component": "menu/menu1/menu1-1/menu1-1-1/menu1-1-1-1/index",
                    "children": []
                  }
                ]
              },
              {
                "path": '/menu/menu1/menu1-1/menu1-1-2',
                "name": 'menu1-1-2',
                "meta": {
                  "title": "三级菜单-2",
                  "icon": "",
                  "affix": false,
                  "hidden": false
                },
                "redirect": null,
                "component": "menu/menu1/menu1-1/menu1-1-2/index",
                "children": []
              }
            ]
          },
          {
            "path": '/menu/menu1/menu1-2',
            "name": 'menu1-2',
            "meta": {
              "title": "二级菜单-2",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "menu/menu1/menu1-2/index",
            "children": []
          }
        ]
      },
      {
        "path": '/menu/menu2',
        "name": 'menu2',
        "meta": {
          "title": "一级菜单-2",
          "icon": "",
          "affix": false,
          "hidden": false
        },
        "redirect": null,
        "component": "menu/menu2/index",
        "children": [
          {
            "path": '/menu/menu2/menu2-1',
            "name": 'menu2-1',
            "meta": {
              "title": "二级菜单-1",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "menu/menu2/menu2-1/index",
            "children": []
          },
          {
            "path": '/menu/menu2/menu2-2',
            "name": 'menu2-2',
            "meta": {
              "title": "二级菜单-2",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "menu/menu2/menu2-2/index",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "path": '/user',
    "name": 'user',
    "meta": {
      "title": "用户管理",
      "icon": "el-icon-s-operation",
      "affix": false,
      "hidden": false
    },
    "redirect": null,
    "component": "user/index",
    "children": []
  },
  {
    "path": '/components',
    "name": 'components',
    "meta": {
      "title": "组件",
      "icon": "el-icon-s-operation",
      "affix": false,
      "hidden": false
    },
    "redirect": null,
    "component": "components/index",
    "children": [
      {
        "path": '/components/form',
        "name": 'form',
        "meta": {
          "title": "表单",
          "icon": "",
          "affix": false,
          "hidden": false
        },
        "redirect": null,
        "component": "components/form/index",
        "children": [
          {
            "path": '/components/form/button',
            "name": 'button',
            "meta": {
              "title": "按钮",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/form/button/index",
            "children": []
          },
          {
            "path": '/components/form/date',
            "name": 'date',
            "meta": {
              "title": "日期组件",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/form/date/index",
            "children": [
              {
                "path": '/components/form/date/datePicker',
                "name": 'datePicker',
                "meta": {
                  "title": "日期选择器",
                  "icon": "",
                  "affix": false,
                  "hidden": false
                },
                "redirect": null,
                "component": "components/form/date/date-picker/index",
                "children": []
              },
              {
                "path": '/components/form/date/timePicker',
                "name": 'timePicker',
                "meta": {
                  "title": "时间选择器",
                  "icon": "",
                  "affix": false,
                  "hidden": false
                },
                "redirect": null,
                "component": "components/form/date/time-picker/index",
                "children": []
              },
              {
                "path": '/components/form/date/timeSelect',
                "name": 'timeSelect',
                "meta": {
                  "title": "时间选择器",
                  "icon": "",
                  "affix": false,
                  "hidden": false
                },
                "redirect": null,
                "component": "components/form/date/time-select/index",
                "children": []
              }
            ]
          },
          {
            "path": '/components/form/layout',
            "name": 'layout',
            "meta": {
              "title": "布局组件",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/form/layout/index",
            "children": []
          },
          {
            "path": '/components/form/table',
            "name": 'table',
            "meta": {
              "title": "表格",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/form/table/index",
            "children": []
          }
        ]
      },
      {
        "path": '/components/notice',
        "name": 'notice',
        "meta": {
          "title": "通知",
          "icon": "",
          "affix": false,
          "hidden": false
        },
        "redirect": null,
        "component": "components/notice/index",
        "children": [
          {
            "path": '/components/notice/alert',
            "name": 'alert',
            "meta": {
              "title": "警告",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/notice/alert/index",
            "children": []
          },
          {
            "path": '/components/notice/loading',
            "name": 'loading',
            "meta": {
              "title": "加载",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/notice/loading/index",
            "children": []
          },
          {
            "path": '/components/notice/message',
            "name": 'message',
            "meta": {
              "title": "消息提示",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/notice/message/index",
            "children": []
          },
          {
            "path": '/components/notice/messageBox',
            "name": 'messageBox',
            "meta": {
              "title": "弹框",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/notice/message-box/index",
            "children": []
          },
          {
            "path": '/components/notice/notification',
            "name": 'notification',
            "meta": {
              "title": "通知",
              "icon": "",
              "affix": false,
              "hidden": false
            },
            "redirect": null,
            "component": "components/notice/notification/index",
            "children": []
          }
        ]
      },
      {
        "path": '/components/others',
        "name": 'others',
        "meta": {
          "title": "其它",
          "icon": "",
          "affix": false,
          "hidden": false
        },
        "redirect": null,
        "component": "components/others/index",
        "children": []
      }

    ]
  }
]
export default [
  {
    url: '/mock/menu/all',
    method: 'get',
    response: () => {
      return resultSuccess({
        menu
      })
    }
  }
] as MockMethod[]

