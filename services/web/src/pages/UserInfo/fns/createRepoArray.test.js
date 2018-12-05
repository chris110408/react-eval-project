import { createRepoArray } from './createRepoArray.js'
import data from '../../../test/test_data/repos'

describe('test createRepoArray', async () => {
  it('should return right length of data', () => {
    expect(createRepoArray(data).length).toEqual(9)
  })
  it('should sort data by stargazers_count', () => {
    const dataArray = createRepoArray(data)
    expect(dataArray[5].stargazers_count).toEqual(1)
    expect(dataArray[0].stargazers_count).toEqual(166)
  })
})
