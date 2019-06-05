// // 随机数组
// function randomArr(len) {
//     let arr = []
//     for (let i = 0; i < len; i++) {
//         arr[i] = Math.floor(Math.random()*len)
//     }
//     return arr
// }
//
// // 检测是否排序好了
// function isSort(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//             return false
//         }
//     }
//     return true
// }
// // 选择
// function range(len) {
//     let arr = randomArr(len)
//     for(let i = 0; i< len; i++) {
//         let minIndex = i
//         for (let j = i+1; j < len; j++) {
//             if (arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }
//     if (isSort(arr)) {
//         return arr
//     } else {
//         return '排序失败'
//     }
// }
// function time() {
//     let start = (new Date).getTime()
//     range(100000)
//     let end = (new Date).getTime()
//     let gap = end - start
//     console.log(gap)
// }
// time()
// 定义一个数组
let arg = [9,8,7,6,5,4,3,2,1]
//  测试是否排序成功
function testS(arr) {
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            console.log('失败了')
        } else {
            console.log('成功了')
        }
    }
}
function range(arr) {
    let minIndex = null
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i+1; j < arr.length - i; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    testS(arr)
    console.log(arr)
}
range(arg)