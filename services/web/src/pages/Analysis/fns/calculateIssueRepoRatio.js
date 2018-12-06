import { reduce } from 'ramda'

// sub calculate function used for getIssueNuM
const calculateIssueRepo = (acc, item) => {
  if (item.has_issues) {
    acc++
  }
  return acc
}
// use reduce fucntion calculate issue number
const getIssueNuM = reduce(calculateIssueRepo, 0)

// obj->obj use repo_data to get the data for pie chart
const calculateIssueRepoRatio = repoData => {
  const issueNum = getIssueNuM(repoData)
  const issueValue = Math.round((issueNum * 100) / repoData.length) / 100
  const noIssueValue = Math.round((1 - issueValue) * 100) / 100
  const ratioRepoData = [
    { type: 'Has Issue', value: issueValue },
    { type: 'No Issue', value: noIssueValue }
  ]
  return ratioRepoData
}

export { calculateIssueRepoRatio }
