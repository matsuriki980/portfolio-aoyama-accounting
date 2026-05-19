// ============================================================
// contact-cta slider
// ============================================================
export const initFooterContactSlider = () => {

  // 一番目のスライダー
  const contactCtaSliderPrimary = document.querySelector(
    ".js-footer__contact-slider-primary",
  );

  // 二番目のスライダー
  const contactCtaSliderSecondary = document.querySelector(
    ".js-footer__contact-slider-secondary",
  );

  if (!contactCtaSliderPrimary || !contactCtaSliderSecondary) return;

  const SwiperPrimary = new Swiper(contactCtaSliderPrimary, {

    spaceBetween: 8,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },

    breakpoints: {
      487: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 24,
      },
      900: {
        direction: "vertical",
        slidesPerView: 1.608,
        reverseDirection: false,
        spaceBetween: 15,
      },
    },
  });

  // 2つ目のスライダー
  const mySwiperSecondary = new Swiper(contactCtaSliderSecondary, {
    spaceBetween: 8,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },

    breakpoints: {
      487: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 24,
      },
      900: {
        direction: "vertical",
        slidesPerView: 1.608,
        reverseDirection: false,
        spaceBetween: 15,
      },
    },
  });
};
