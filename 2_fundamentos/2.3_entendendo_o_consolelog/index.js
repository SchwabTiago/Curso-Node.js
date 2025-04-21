const x = 1
const y = 'Eu sou uma string'
const z = [1, 2, 3, 2, 3]

console.log(x, y, z)
console.count(`O valor de x é ${x}`)
console.log(`%s realmente é uma string`, y)

setTimeout(() => {
    console.clear()
}, 2000);