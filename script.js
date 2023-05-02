"use strict";
window.onload = function () {
  window.setInterval(function () {
    let myDate = new Date();

    let currentTime = myDate.toLocaleTimeString();
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    let message = "";
    let days = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];

    let months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреле",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    function timeName(number, one, two, five) {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    }
    timeName();

    function oneNumber(time) {
      if (time < 10) {
        time = "0" + time;
      } else {
        time = time;
      }
      return time;
    }

    oneNumber();

    message +=
      "Сегодня: " +
      days[myDate.getDate() - 1] +
      ", " +
      myDate.getDate() +
      " " +
      months[myDate.getMonth()] +
      " " +
      myDate.getFullYear() +
      ", " +
      oneNumber(hour) +
      " " +
      timeName(hour, "час", "часа", "часов") +
      " " +
      ":" +
      oneNumber(minute) +
      " " +
      timeName(minute, "минута", "минуты", "минут") +
      " " +
      ":" +
      oneNumber(second) +
      " " +
      timeName(second, "секунда", "секунды", "секунд") +
      "<br />" +
      currentTime;
    document.getElementById("clock").innerHTML = message;
  });
};
