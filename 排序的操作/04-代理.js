let obj = new Proxy({},{
    get: function (target, key) {
            console.log('获取成功')
            return target[key]
    },
    set: function (target, key, value) {
            console.log('设置成功了')
            target[key] = value
    }
})
obj.vvv = 1
console.log(obj.vvv);