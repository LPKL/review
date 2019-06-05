// 前提条件是：数组是有序的
// 如果有目标值，则返回目标值的索引，如果没有则返回-1
// function binarySearch(arr, target) {
//     let l = 0;
//     let r = arr.length - 1
//     while(l <= r){
//         // let mid = (l+r)/2 //当l和r无穷大的时候，此时会有溢出，代码会出问题
//         let mid = l + Math.floor((r - l)/2)
//         if (arr[mid] === target){
//             return mid
//         } else if (target < arr[mid]) {
//             r = mid - 1
//         } else if (target > arr[mid]) {
//             l = mid + 1
//         }
//     }
//     return -1
// }

// 用递归实现
function binarySearch(arr, left, right, target) {
    let l = left;
    let r = right
    if(r<l){
        return -1
    }
    let mid = l + Math.floor((r - l)/2)
    if (arr[mid] === target){
        return mid
    } else if (target < arr[mid]) {
        // 加return是为了将最后的结果返回
        return binarySearch(arr, l, mid - 1, target)
    } else if (target > arr[mid]) {
        return binarySearch(arr, mid + 1, r, target)
    }
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr, 0, arr.length-1,9));