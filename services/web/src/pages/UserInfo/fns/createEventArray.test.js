import { createEventArray } from './index.js'
import data from '../../../test/test_data/events'

describe('test createEventArray', async () => {
  it('should return right length of data', () => {
    expect(createEventArray(data).length).toEqual(100)
  })
  it('should sort data by diffToday', () => {
    const dataArray = createEventArray(data)
    expect(dataArray[99].created_at).toEqual('05-08-2018')
    expect(dataArray[0].created_at).toEqual('05-11-2018')
  })
})
