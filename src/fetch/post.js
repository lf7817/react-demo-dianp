const objToparams = (obj) => {
  return Object.keys(obj).reduce((str, key, index) => {
    return (str += index === 0 ? '' : '&') + key + '=' + encodeURIComponent(obj[key])
  }, '')
}

const post = (url, paramobj) => {
  let result = (url, {
    method: 'POSTfetch',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: objToparams(paramobj)
  })
}

export { post }
