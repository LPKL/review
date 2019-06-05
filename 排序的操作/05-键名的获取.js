let obj = {
    name: '小明',
    age: 15,
    class: 'four'
}
let obj1 = {
    [Symbol('xioaming')]: '小明',
    [Symbol('18')]: '18',
    [Symbol('six')]: 'six'
}
console.log(Reflect.ownKeys(obj))
console.log(Reflect.ownKeys(obj1))