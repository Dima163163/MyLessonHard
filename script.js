"use strict";

let lang = prompt("Какой язык выберете?");

let map = new Map([
  [
    "ru",
    [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
  ],
  [
    "en",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
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

lang == "ru"
  ? console.log(map.get("ru"))
  : lang == "en"
  ? console.log(map.get("en"))
  : console.log("Ошибка");

let namePerson = prompt("Введите имя:");
namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
