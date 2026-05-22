// ============================================================
// top-voice slider
// ============================================================
export const initTopVoiceSlider = () => {
  const topVoiceSlider = document.querySelector(".top-voice__list");

  const mySwiper = new Swiper(topVoiceSlider, {
    // Optional parameters
    slidesPerView: 1.15,

    // breakpoints
    breakpoints: {
      900: {
        slidesPerView: 2.2,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".top-voice__btn-arrow--next",
      prevEl: ".top-voice__btn-arrow--prev",
    },
  });
};
