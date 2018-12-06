const userSelecter = state => state.get('user').get('userinfo')
const repoSelecter = state => state.get('repo').get('data')

const eventSelecter = state => state.get('event').get('data')

const donutPieSelecter = state => state.get('analysis').get('donutdata')

export { userSelecter, repoSelecter, eventSelecter, donutPieSelecter }
