const num = 266219;

const arr = Array.from(String(num));

console.log(arr);

const arrNumb = arr.map((i) => Number(i));

console.log(arrNumb);

const result = arrNumb.reduce((a, b) => a * b);

console.log(result);

const deg = result ** 3;

console.log(deg);

console.log(String(deg).slice(0, 2));
