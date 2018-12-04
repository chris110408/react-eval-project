import { checkPermissions } from './CheckPermissions'
import { notification } from 'antd'
import { USER_TYPE_GUEST } from '../../global'

const messageMap = {
  error: {
    message: 'Not able to access that page',
    description: 'Sorry you do not have authority to access that page'
  },
  warn: {
    message: 'You have not login yet',
    description: 'please login your account '
  }
}

const openNotificationWithIcon = (type, option) => {
  const message = messageMap[type]

  if (option) {
    notification[type](option)
  } else {
    notification[type](message)
  }
}
const Authorized = ({
  children,
  authority,
  noMatch = null,
  currentAuth = null
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children
  const component = checkPermissions(authority, childrenRender, noMatch)(
    currentAuth
  )
  console.log(currentAuth)

  if (component === noMatch) {
    currentAuth === USER_TYPE_GUEST
      ? openNotificationWithIcon('warn')
      : openNotificationWithIcon('error')
  }
  return component
}

export default Authorized
