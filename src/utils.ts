export function debounce(fn: Function, n = 100) {
  let handle: any;
  return (...args: any[]) => {
    if (handle) { clearTimeout(handle); }
    handle = setTimeout(() => {
      fn(...args);
    }, n);
  };
}

let _support_ = true

export default function (el: HTMLElement, doback: () => {}) {

  let observer: ResizeObserver | null = null
  let _hadWilldo_ = false
  let _hadNouse_ = false

  const doit = () => {

    // 如果前置任务都完成了
    if (!_hadWilldo_) {
      _hadWilldo_ = true

      // 既然前置任务已经没有了，那么就可以更新了？
      // 不是的，可能非常短的时间里，后续有改变
      // 因此延迟一点点来看看后续有没有改变
      // 如果改变了，就再延迟看看
      const interval = window.setInterval(() => {

        // 判断当前是否可以立刻更新
        if (!_hadNouse_) {
          window.clearInterval(interval)

          _hadWilldo_ = false
          doback()

        }

        _hadNouse_ = false
      }, 100)

    } else {
      _hadNouse_ = true
    }
  }

  try {

    observer = new ResizeObserver(doit)
    observer.observe(el)

  } catch {

    // 如果浏览器不支持此接口

    if (_support_) {
      console.error('ResizeObserver undefined!')

      // 不支持的话，提示一次就可以了
      _support_ = false
    }

    // 使用resize进行退化支持
    doit()
    window.addEventListener('resize', doit, false)

  }

  return function () {
    if (observer) {
      // 解除对画布大小改变的监听
      observer.disconnect()

    }
  }

}
