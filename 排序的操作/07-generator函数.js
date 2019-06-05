// let f = function *() {
//     yield 11;
//     console.log(12)
//     yield 13;
//     console.log(14)
//     console.log('测试' + (yield 12345))
//     let m = yield 222222
//     console.log(m)
//     console.log(77)
// }
// let a = f()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
function * f(x){
    let y = 2 * (yield (x+1));
    let z = yield (y/3);
    return (x + y + z);
}
let a = f(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

