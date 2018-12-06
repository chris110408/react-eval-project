export const FETCH_DONUTPIE_DATA = 'FETCH_DONUTPIE_DATA'

export const UPDATE_DONUTPIE_DATA = 'UPDATE_DONUTPIE_DATA'
export const CHANGE_DONUTPIE_DATA = 'CHANGE_DONUTPIE_DATA'

export const fetchDonutPieData = (values) => {
  return { type: FETCH_DONUTPIE_DATA, payload: values }
}

export const changeDonutPieData = (values) => {
  return { type: CHANGE_DONUTPIE_DATA, payload: values }
}

export const updateDonutPieData = values => {
  return { type: UPDATE_DONUTPIE_DATA, payload: values }
}
