const TAG_NAME = 'scroll-view'

module.exports = function ({ print }) {
  /**
   * @type {function(isError: (number|boolean|string)?): void} aliLog
   * @desc - 无法转换时告知用户的通用方法，接受0个或1个参数，意为是否error级别
   */

  return {
    test: TAG_NAME,
    event: [
      {
        test: /^(scrolltoupper|scrolltolower|scroll)$/,
        ali (eventName) {
          const eventMap = {
            'scrolltoupper': 'scrollToUpper',
            'scrolltolower': 'scrollToLower',
            'scroll': 'scroll'
          }
          return eventMap[eventName]
        }
      }
    ]
  }
}