"use strict";

function newFunc(arg) {
  if (typeof arg !== "string") {
    alert("Это не строка");
    return;
  } else {
    arg = arg.trim();
    if (arg.length >= 29) {
      return (arg = arg.slice(0, 29) + "...");
    } else {
      return arg;
    }
  }
}

console.log(newFunc("Это строка строка строка строка"));
