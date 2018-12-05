import { eqBy, uniqWith, compose, map, toPairs, reduce } from 'ramda'

const createSingleDateEvent = (acc, item) => {
  const key = item.created_at
  const _type = item.type

  if (acc[`${key}`]) {
    if (acc[`${key}`][[`${_type}`]]) {
      acc[`${key}`][[`${_type}`]] = acc[`${key}`][[`${_type}`]] + 1
    } else {
      acc[`${key}`][[`${_type}`]] = 1
    }
    return acc
  }
  let initObj = {}
  initObj[`${_type}`] = 1
  acc[`${key}`] = Object.assign({}, initObj)
  return acc
}
const convertArrayItemToObj = xs => {
  return Object.assign({}, { date: xs[0] }, xs[1])
}

export const getFinalObj = eventData => {
  return compose(
    map(convertArrayItemToObj),
    toPairs,
    reduce(createSingleDateEvent, {})
  )(eventData)
}
