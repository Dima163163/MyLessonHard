"use strict";

let lang = prompt("Какой язык выберете?");

let map = new Map();
map.set("ru", [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
]);
map.set("en", [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);

if (lang == "ru") {
  console.log(map.get("ru"));
} else if (lang == "en") {
  console.log(map.get("en"));
} else if (lang !== "ru" && lang !== "en") {
  console.log("Ошибка");
}

switch (lang) {
  case "ru":
    console.log(map.get("ru"));
    break;
  case "en":
    console.log(map.get("en"));
    break;
  default:
    console.log("Ошибка");
    break;
}

console.log(map.get("ru"));
console.log(map.get("en"));

let namePerson = prompt("Введите имя:");
namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");

// const langArr = {
//   ru: [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ],
//   en: [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ],
// };

// if (lang == "ru") {
//   console.log(langArr["ru"]);
// } else if (lang == "en") {
//   console.log(langArr["en"]);
// } else if (lang !== "ru" && lang !== "en") {
//   console.log("Ошибка");
// }

// switch (lang) {
//   case "ru":
//     console.log(langArr["ru"]);
//     break;
//   case "en":
//     console.log(langArr["en"]);
//     break;
//   default:
//     console.log("Ошибка");
//     break;
// }

// console.log(langArr["ru"]);
// console.log(langArr["en"]);

// let namePerson = prompt("Введите имя:");
// namePerson == "Артем"
//   ? console.log("Директор")
//   : namePerson == "Александр"
//   ? console.log("преподаватель")
//   : console.log("студент");
