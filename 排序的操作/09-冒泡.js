let arg = [9,8,7,6,5,4,3,2,1]
let arg1 = [9,8,7,6,5,4,3,2,1]
function testS(arr) {
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            console.log('失败了')
        } else {
            console.log('成功了')
        }
    }
}
function range1(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    testS(arr)
    console.log(arr)
}
// 优化
function range2(arr) {
    let len = arr.length
    let index = null
    let temp = null
    for (let i = 0; i < len; i++) {
        temp = arr[0]
        for (let j = 0; j < len - 1; j++) {
            index = j + 1
            if (temp > arr[j+1]) {
                arr[j] = arr[j+1]
            } else {
                arr[j] = temp
                temp = arr[j+1]
            }
        }
        arr[index] = temp
    }
    testS(arr)
    console.log(arr)
}
let time1 = new Date().getTime()
range1(arg)
let time2 = new Date().getTime()
console.log(time2 - time1)
let time3 = new Date().getTime()
range2(arg1)
let time4 = new Date().getTime()
console.log(time4 - time3)