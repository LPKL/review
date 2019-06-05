let arg = [9,8,7,6,5,4,3,2,1];
// 插排
function insert(arr, l, r) {
    let temp = null;
    let len = arr.length;
    for (let i = l+1; i < len; i++) {
        temp = arr[i];
        // let存在作用域块，在外部定义，为的是能子啊外部调用到
        let j;
        for(j = i; j>0&&temp<arr[j-1];j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = temp
    }
    return arr
}
// 归并排序
function mergeSort(arr, l, r) {
    if (l>=r) return;
    let mid = Math.floor(l+(r-l)/2)
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);
    if (arr[mid] > arr[ mid+1])merge(arr, l, mid, r)
}
function merge(arr, l, mid, r) {
    let ary = []
    for (let i = l; i <= r; i++) {
        ary[i-l] = arr[i]
    }
    let i = l;
    let j = mid+1;
    for (let k = l; k <=r; k++) {
        if (i > mid) {
            arr[k] = ary[j-l];
            j++
        } else if (j > r) {
            arr[k] = ary[i-l];
            i++
        } else if (ary[i-l] > ary[j-l]){
           arr[k] = ary[j-l];
           j++
       } else {
           arr[k] = ary[i-l];
           i++
       }
    }
}
// 插排
// console.log(insert(arg, 0, arg.length));
// 归并
console.log(mergeSort(arg, 0, arg.length - 1));
console.log(arg)