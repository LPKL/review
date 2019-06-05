let min = 3
let max = 6
let temp = Math.floor(Math.random()*(max-min+1)+min)
let arr = [1,2,3,4,5];
[arr[0], arr[temp]] = [arr[temp],arr[0]]