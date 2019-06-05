let arr = [1,2,[3,4],[5,6,[7,8]]]
// function float(arg) {
//     let arr = []
//     for (let i = 0; i < arg.length; i++) {
//         if (Array.isArray((arg[i]))) {
//             arr = arr.concat(float(arg[i]))
//         } else {
//             arr.push(arg[i])
//         }
//     }
//     return arr
// }
console.log((Array.toString(arr)));