const userSelecter = state => state.get('user').get('userinfo')
const repoSelecter = state => state.get('repo').get('data')

const eventSelecter = state => state.get('event').get('data')

export { userSelecter, repoSelecter, eventSelecter }
