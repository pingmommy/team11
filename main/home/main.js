const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
  const v = window.scrollY;
  console.log(v);

  if (v > 90) {
    nav.classList.add("fixed-top");
  } else {
    nav.classList.remove("fixed-top");
  }
});
