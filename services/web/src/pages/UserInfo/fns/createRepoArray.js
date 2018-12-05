import { map, sort, split, last, compose, once } from 'ramda'
import * as moment from 'moment'

// (obj,obj)->num
const diff = function(a, b) {
  return b.stargazers_count - a.stargazers_count
}

// convert item to the format for array
// obj->obj
const repoTrimObj = obj => {
  return {
    name: obj.name ? obj.name : '',
    description: obj.description ? obj.description : 'no description!',
    stargazers_count: obj.stargazers_count ? obj.stargazers_count : 0,
    language: obj.language ? obj.language : 'Other',
    forks: obj.forks ? obj.forks : 0,
    open_issues: obj.open_issues ? obj.open_issues : 0,
    has_issues: obj.has_issues,
    watchers: obj.watchers ? obj.watchers : 0,
    htmlUrl: obj.html_url ? obj.html_url : 0,
    updatedAt: obj.updated_at
      ? moment(obj.updated_at).format('MM-DD-YYYY')
      : 'unknow'
  }
}
// obj->array
// use for sort
// sort: https://ramdajs.com/docs/#sort

export const createRepoArray = repoData => {
  return repoData
    ? compose(
        sort(diff),
        map(repoTrimObj)
      )(repoData)
    : []
}
