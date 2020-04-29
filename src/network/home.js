import { request } from 'network/request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeListData(type, page) {
  return request({
    url: '/home/multidata',
    params: { type, page }
  })
}