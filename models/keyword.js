import {HTTP} from "../utils/http";

class KeywordModel extends HTTP {
    key = 'q'
    maxLength = 10

    //获取历史数据
    getHistory() {
        const words = wx.getStorageSync(this.key)
        if (!words) {
            return []
        }
        return words
    }

    // 获取热门搜索
    getHot() {
        return this.request({
            url: 'book/hot_keyword'
        })
    }

    //写入缓存
    addToHistory(keyword) {
        let words = this.getHistory()
        const has = words.includes(keyword)
        // 判断数组中是否包含keyword
        if (!has) {
            const length = words.length
            if (length >= this.maxLength) {
                words.pop()
            }
            // 可以添加到数组的首位
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }

    }
}

export {KeywordModel}