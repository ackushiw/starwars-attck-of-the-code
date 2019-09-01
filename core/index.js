import axios from 'axios'
import { get, set } from 'idb-keyval'

export async function fetchAndPersist (url, force) {
  let data
  let persisted

  if (process.browser) {
    const json = await get(url)
    if (json) {
      console.log('jdon found', json)

      data = JSON.parse(json)
      persisted = true
    }
  }

  if (!data || force) {
    const res = await axios.get(url)
    data = res.data
    if (process.browser && !persisted) {
      set(url, JSON.stringify(data))
    }
  }

  return data
}
