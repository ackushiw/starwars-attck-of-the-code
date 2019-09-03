import { get, set } from 'idb-keyval'
import fetch from 'isomorphic-unfetch'

export async function fetchAndPersist (url, force = false) {
  let data

  if (process.browser) {
    const json = await get(url)
    if (json) {
      data = JSON.parse(json)
      if (!force) {
        return data
      }
    }
  }

  const res = await fetch(url)
  data = await res.json()

  if (process.browser && data) {
    set(url, JSON.stringify(data))
  }

  return data
}
