/**
 *  封装的工具类，用于处理数据的存储
 *    setCache 可传入第三个参数，判断数据采用 localstorage 还是 sessionstorage
 *      有效性:
 *          localstorage: 始终有效
 *          sessionstorage: 关闭浏览器窗口失效
 */
class LoaclCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    // 由于 localstorage 中只能保存字符串 obj => string => obj
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LoaclCache()
