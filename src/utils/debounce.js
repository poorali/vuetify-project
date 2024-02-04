//Custom debounce method
export function debounce(callback, delay) {
  let timeout = null
  return (...args) => {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
