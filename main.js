const sectionTitle = document.querySelectorAll(".section-title");
// console.log("🚀 ~ file: main.js:22 ~ sectionTitle:", sectionTitle);
const sectionTitleSecond = document.querySelectorAll(".section-title__name");
// console.log("🚀 ~ file: main.js:4 ~ sectionTitleSecond:", sectionTitleSecond);
const sectionTitleThird = document.querySelectorAll(".section-title__value");
// console.log("🚀 ~ file: main.js:6 ~ sectionTitleThird:", sectionTitleThird);

// Показати заголовки розділів
function showSectionTitle() {
  sectionTitle.forEach((el) => {
    if (el.textContent === "") {
      return;
    } else {
      console.log(el.textContent);
    }
  });
}
showSectionTitle();

// Показати заголовки підрозділів
function showSectionTitleSecond() {
  sectionTitleSecond.forEach((el) => {
    if (el.textContent === "") {
      return;
    } else {
      console.log(el.textContent);
    }
  });
}
showSectionTitleSecond();

// Показати заголовки розділів
function showSectionTitleThird() {
  sectionTitleThird.forEach((el) => {
    if (el.textContent === "") {
      return;
    } else {
      console.log(el.textContent);
    }
  });
}
showSectionTitleThird();

// =================================================================

// Повзунки
const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector(".js-selected-value");
rangeInput.addEventListener(
  "input",
  (e) => (output.textContent = e.target.value)
);

// Випадаючий текст з рядка = переробити на JS
$(document).ready(function () {
  $(".block__box-title").click(function (event) {
    if ($(".block__box-wrap").hasClass("one")) {
      $("block__box-title").not($(this)).removeClass("active");
      $("block__box-text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClasss("active").next().slideToggle(300);
  });
});
