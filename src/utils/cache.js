//Cache request data helper
export default async (callback, params, expireTime = 10) => {
  const cacheKey = Object.keys(params).join('') + Object.values(params).join('')
  let cached = getWithExpiry(cacheKey)
  if (!cached) {
    cached = setWithExpiry(cacheKey, await callback(), expireTime)
  }
  return cached
}

//Set Cache in Localstorage
const setWithExpiry = (key, value, ttl) => {
  const now = new Date()
  const item = {
    value: value,
    expiry: now.getTime() + ttl * 60000
  }

  let items = JSON.parse(localStorage.getItem('cache')) || {}
  items[key] = item
  localStorage.setItem('cache', JSON.stringify(items))
  return value
}

///Get Cache from Localstorage
const getWithExpiry = (key) => {
  const items = JSON.parse(localStorage.getItem('cache'))

  if (!items || !items[key]) {
    return null
  }

  const now = new Date()

  //This part of the code checks if the data is expired in the localstorage cache then removes it from cache
  if (now.getTime() > items[key].expiry) {
    delete items[key]
    localStorage.setItem('cache', JSON.stringify(items))
    return null;
  }

  return items[key].value
}
