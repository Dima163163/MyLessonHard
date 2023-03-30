let num = 266219;

const arr = Array.from(String(num), Number);

console.log(arr);

const result = arr.reduce((acc, cur) => acc * cur);

console.log(result);

let deg = result ** 3;

console.log(String(deg).slice(0, 2));
