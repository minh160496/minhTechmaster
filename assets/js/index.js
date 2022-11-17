let slideIndex = 0;
const arrBackground = [
  "rgb(163, 0, 5)",
  "rgb(21, 5, 6)",
  "rgb(165, 41, 177)",
  "rgb(255, 188, 0)",
  "rgb(237, 85, 194)",
  "rgb(223, 222, 255)",
  "rgb(255, 1, 95)",
  "rgb(12, 0, 14)",
  "rgb(14, 38, 236)",
  "rgb(63, 16, 94)",
  "rgb(168, 0, 4)",
  "rgb(241, 161, 25)",
];
slideFade();
function slideFade() {
  var main = document.querySelector(".main");
  var slides = document.querySelectorAll(".slides"); //chon tat ca cac slide vao mot mang co ten slides
  var dots = document.querySelectorAll(".dots"); //chon tat ca cac icon dot vao mang co ten dots
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //cho an tat ca cac slide
  }
  if (slideIndex > slides.length - 1) {
    slideIndex = 0; //neu vi tri slide vuot qua so luong slide tru 1 thi gan cho no quay lai la 0
  }
  slides[slideIndex].style.display = "block"; //slide duy nhat hien thi
  main.style.backgroundColor = arrBackground[slideIndex];
  for (var i = 0; i < dots.length; i++) {
    dots[i].style.color = "#777"; //tat ca cac dot co mau xam
  }
  dots[slideIndex].style.color = "#fff"; //dot co vi tri cung slide co mau trang
  slideIndex++;
  setTimeout(slideFade, 2000); //ham slideFade tu goi lai no sau 2s
}
