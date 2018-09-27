const throttle = (threshold = 250, fn) => {
  let last
  let deferTimer

  return (...args) => {
    const now = +new Date

    if (last && now < last + threshold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, threshold)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

export default throttle
