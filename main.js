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
