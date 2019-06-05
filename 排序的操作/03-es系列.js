// ...的应用
// let a = [1,2,3]
// let b = [...a]
// a = [4,5,6]
// console.log(b)

// indexOf匹配不到NaN
let a = [1,2,3,NaN]
console.log(a.indexOf(NaN))
console.log(a.find(item =>{
    item === NaN
}))
