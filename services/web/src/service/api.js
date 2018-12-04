/**
 * Created by leichen on 12/02/2018.
 */
import request from '../utils/request'

export async function requestInitUser () {
  return request('/api/users')
}

export async function requestFetchRepos () {
  return request('/api/repos')
}

export async function requestFetchEvents () {
  return request('/api/events')
}

export async function requestLogin (params) {
  return request('/myapi/auth', {
    method: 'POST',
    body: params
  })
}
