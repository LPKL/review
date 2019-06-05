//是一个递归的过程，将数组不断的进行对半拆分，直到剩下最后一项，然后将拆分
//过的数组进行归并，先将拆分前的数组进行copy一份，然后将左右两部分的数组,对拿出的每一项进行大小的比较
//最终通过比较的大小的结果，将初始数组对应位置的值替换成比较后的结果
//所有的操作范围都是在l,mid,r，中进行的
let arg = [9,8,7,6,5,4,3,2,1]
function merge(arr,l,mid,r) {
    let ary = []
    //从l开始，到r结束
    for (let i = l; i <= r; i++) {
        ary[i - l] = arr[i]
    }
    let i = l
    let j = mid+1
    //从l开始，到r结束
    // 这里的k是为了定位arr数组中元素的位置
    for (let k=l; k<=r; k++) {
        if (i > mid) {
            // 减去一个l，是因为偏差
            arr[k] = ary[j-l]
            j++
        } else if(j > r){
            arr[k] = ary[i-l]
            i++
        } else if (ary[i-l] < ary[j-l]){
            arr[k] = ary[i-l]
            i++
        } else {
            arr[k] = ary[j-l]
            j++
        }
    }
}
// 对指定区间范围的数组进行插排
function insertSort(arr, l, r) {
    let temp = null
    for (let i = l+1; i <= r; i++) {
        temp = arr[i]
        let j
       for(j = i; j > 0&&temp < arr[j-1]; j--){
           arr[j] = arr[j-1]
       }
       arr[j] = temp
    }
}
function mergeSort(arr,l,r) {
    // 任何一个高级的排序算法，边界条件处都可以优化
    // 当数量级较小的时候，数组趋于一个近似有序的数组的概率就会比较大，这是采用插入排序会比较有优势（时间复杂度降为O(n)）
    // if (l >= r) return
    if (r-l<=15){
        insertSort(arr,l,r)
        return
    }
    let mid = parseInt((l+r)/2)
    mergeSort(arr,l,mid)
    mergeSort(arr,mid+1,r)
    // 因为左右两侧都为有序的数组，所以只有当mid位置处的值大于mid+1处的值的时候，才进行归并，否则没必要进行归并
    if(arr[mid]>arr[mid+1]) merge(arr,l,mid,r)
}
mergeSort(arg,0,arg.length-1)
console.log(arg)