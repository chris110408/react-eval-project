import { map, sort, split, compose, last, toPairs } from 'ramda'
import moment from 'moment'

const convertListToArray = data => {
  return compose(
    map(i => i[1]),
    toPairs
  )(data)
}

// (obj,obj)->num
const diff = function(a, b) {
  return a.diffToday - b.diffToday
}

// convert item to the format for array
// obj->obj
const getinfo = item => {
  const momentData = moment(item.created_at)
  return {
    type: item.type,
    // momentData: momentData,
    created_at: item.created_at
      ? moment(item.created_at).format('MM-DD-YYYY')
      : 'unknow',
    diffToday: moment().diff(momentData, 'days'),
    repo_name: item.repo
      ? compose(
          last,
          split('/')
        )(item.repo.name)
      : 'na',
    repo_url: item.repo ? item.repo.url : 'www.github.com',
    key: item.id
  }
}
// obj->array
const createEventArray = eventData =>
  compose(
    sort(diff),
    map(getinfo)
  )(eventData)

export { createEventArray, convertListToArray }
