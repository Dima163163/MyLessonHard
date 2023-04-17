"use strict";

let lang = prompt("Какой язык выберете?");

if (lang == "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  );
} else if (lang == "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else if (lang !== "ru" && lang !== "en") {
  console.log("Ошибка");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  default:
    console.log("Ошибка");
    break;
}

let arrLang = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

console.log(arrLang["ru"]);
console.log(arrLang["en"]);

let namePerson = prompt("Введите имя:");
namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
