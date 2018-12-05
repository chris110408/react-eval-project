// obj->string
import {compose, eqBy, map, uniqWith} from "ramda";

const byType = obj => {
  return obj.type
}

// eqby https://ramdajs.com/docs/#eqBy
const typeEq = eqBy(byType)

// obj->string
const getItemkey = item => item.type

// create an array which has all uniq type of events
// uniqWith:https://ramdajs.com/docs/#uniqWith
export const getEventsTypeKeys = eventData =>
  compose(
    map(getItemkey),
    uniqWith(typeEq)
  )(eventData)
