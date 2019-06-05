// 冒泡正排
let arr = [2,3,5,7,4,2]
// let len =  arr.length
// for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             arr[j] = arr[j] + arr[j + 1]
//             arr[j + 1] = arr[j] - arr[j + 1]
//             arr[j ] = arr[j] - arr[j + 1]
//         }
//     }
// }
// 反排
// for (let i = len - 1; i >= 0; i--) {
//     for (let j = len - i; j < len - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             arr[j] = arr[j] + arr[j + 1]
//             arr[j + 1] = arr[j] - arr[j + 1]
//             arr[j ] = arr[j] - arr[j + 1]
//         }
//     }
// }
// 快速排序
function quickSort(arg) {
    if (arg.length <= 1) {
        return arg
    }
    let def = arg.splice(0, 1)
    let small = []
    let big = []
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] > def) {
            big.push(arg[i])
        } else {
            small.push(arg[i])
        }
    }
    return quickSort(small).concat(def, quickSort(big))
}
console.log(quickSort(arr))