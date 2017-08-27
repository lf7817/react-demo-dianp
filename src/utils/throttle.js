const throttle = function (fn, interval) {
  let timer, firstTime = false
  return function () {
    let _self = this, args = arguments
    if (firstTime) {
      fn.apply(_self, args)
      return firstTime = false
    }

    if (timer) {
      return false
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(_self, args)
    }, interval || 500)
  }
}

export default throttle
