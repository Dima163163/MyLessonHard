"use strict";

function newFunc(arg) {
  if (typeof arg !== "string") {
    alert("Это не строка");
    return;
  } else {
    arg = arg.trim();
    if (arg.length >= 29) {
      arg = arg.slice(0, 29) + "...";
      return arg;
    } else {
      return arg;
    }
  }
}

console.log(newFunc("Это строка строка строка строка"));
