const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
// const numTotal = `${num1},${num2}`
// const numTotal = num1.concat(num2)
const numTotal = [...num1, 'Jonas', ...num2, ...[7, 8, 9]]

console.log(numTotal)