export const get = (url) => {
  let result = fetch(url, {
    credentials: 'include',
    header: {
      'Accept': 'application/json,text/plain,*/*'
    }
  })
  return result
}
