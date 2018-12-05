import { isUrl } from '../utils/utils'

export const menuData = [
  {
    name: 'User GitHub Info',
    icon: 'github',
    path: 'userinfo',
    children: [
      {
        name: 'Main Page',
        path: 'main'
      }
    ]
  },
  {
    name: 'Analysis',
    icon: 'bar-chart',
    path: 'Analysis',
    children: [
      {
        name: 'Page',
        path: 'main'
      }
    ]
  }
]

function formatter(data, parentPath = '', parentAuthority) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    }
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      )
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
