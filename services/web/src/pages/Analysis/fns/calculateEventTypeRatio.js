import { compose, map, reduce, sort, toPairs } from 'ramda'

// use for reduce calculate events by it's type
// (obj,obj)->obj
const calEvents = (acc, item) => {
  const key = item.type
  if (acc[`${key}`]) {
    acc[`${key}`] = acc[`${key}`] + 1
    return acc
  }
  acc[`${item.type}`] = 1
  return acc
}

// ((obj,obj)->obj)->obj->[obj]->obj->obj
const GroupByEvents = reduce(calEvents, {})

// user for map
// (array)->obj
const usePairArrayCreateObj = xs => {
  return { item: xs[0], count: xs[1] }
}

// (obj,obj)->num
// use for sort
// sort: https://ramdajs.com/docs/#sort
const diff = function (a, b) {
  return b.value - a.value
}

// use compose to combine all functions and calculate data use for pie chart
// (array)->array
// toPairs: https://ramdajs.com/docs/#toPairs
const getPiedata = compose(
  sort(diff),
  map(usePairArrayCreateObj),
  toPairs,
  GroupByEvents
)
// get trim array length and sum the rest of the events to other value
const trimPieData = (array, num) => {
  let result = []
  const otherObj = { item: 'Other Types', count: 0 }
  for (var i = 0; i < array.length; i++) {
    if (i < num - 1) {
      result.push(array[i])
    } else {
      otherObj.count = otherObj.count + array[i].count
    }
  }

  result.push(otherObj)

  return result
}

export { trimPieData, getPiedata }
