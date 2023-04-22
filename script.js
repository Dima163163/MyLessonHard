let arr = ["12", "424", "26", "56", "28", "484", "652"];

arr.forEach((number) => {
  if (number.startsWith("2") || number.startsWith("4")) {
    console.log(number);
  }
});

let n = 100;

step: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue step;
  }
  console.log("Делители этого числа 1 и " + i);
}
