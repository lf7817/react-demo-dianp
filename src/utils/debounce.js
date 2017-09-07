const debounce = (fn, delay) => {
  let timer = null
  return function () {
    console.log(1)
    let arg = arguments, _this = this
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn.apply(_this, arg) , delay || 500);
  }
}

export default debounce
