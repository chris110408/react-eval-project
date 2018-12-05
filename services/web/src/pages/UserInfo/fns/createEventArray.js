import { map, sort, split, compose, last } from 'ramda'
import * as moment from 'moment'

// (obj,obj)->num
const diff = function(a, b) {
  return a.diffToday - b.diffToday
}

const getinfo = item => {
  const momentData = moment(item.created_at)
  return {
    type: item.type,
    momentData: momentData,
    diffToday: moment().diff(momentData, 'days'),
    repo_name: item.repo
      ? compose(
          last,
          split('/')
        )(item.repo.name)
      : 'na',
    repo_url: item.repo ? item.repo.url : 'www.github.com',
    id: item.id
  }
}
// obj->array
export const createEventArray = eventData =>
  compose(
    sort(diff),
    map(getinfo)
  )(eventData)
