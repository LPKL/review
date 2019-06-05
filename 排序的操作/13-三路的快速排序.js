let arg = [9,8,7,6,5,4,3,2,1]
function quickSort(arr, l, r) {
    if (l>=r) return
    let temp = Math.floor(Math.random()*(r-l+1)+l);
    [arr[l], arr[temp]] = [arr[temp], arr[l]]
    let midValue = arr[l]
    // 用来记录小于midValue的元素的位置
    let lt = l
    // 用来记录大于midValue位置的元素
    let gt = r+1
    // 当前循环的位置
    let i = l+1
    while(i < gt){
        // 当前值小于midValue的时候
        if (arr[i] < midValue){
            [arr[i], arr[lt+1]] = [arr[lt+1], arr[i]]
            lt++;
            i++;
            // 当前值大于midValue的时候
        } else if(arr[i] > midValue) {
            [arr[i], arr[gt - 1]] = [arr[gt-1], arr[i]]
            gt--;
            // 此处不用维护i，因为从后方拿来的元素的值是位置的
        } else {
            i++
        }
    }
    // 将l处的midValue的值，跟最后一个小于midValue的值进行交换位置
    [arr[l], arr[lt]] = [arr[lt], arr[l]]
    // 接着对两侧的区间内的元素进行递归
    quickSort(arr, l, lt-1)
    quickSort(arr, gt, r)
}
function range(arr, l, r) {
    quickSort(arr, l, r)
}
range(arg, 0, arg.length-1)
console.log(arg)