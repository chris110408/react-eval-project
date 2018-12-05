/**
 * Created by leichen on 12/02/2018.
 */
import request from '../utils/request'

export async function requestInitUser () {
  return request('http://localhost:8080/api/users')
}

export async function requestFetchRepos () {
  return request('http://localhost:8080/api/repos')
}

export async function requestFetchEvents () {
  return request('http://localhost:8080/api/events')
}

export async function requestLogin (params) {
  return request('/myapi/auth', {
    method: 'POST',
    body: params
  })
}
