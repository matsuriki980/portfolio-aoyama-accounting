// ============================================================
// top-service slider
// ============================================================
export const initTopServiceSlider = () => {
  let mySwiper;

  const topServiceSlider = document.querySelector(".top-service__content");

  const initSwiper = () => {
    const isSP = window.matchMedia("(max-width: 899px)").matches;

    // SP時のみ初期化
    if (isSP && !mySwiper) {
      mySwiper = new Swiper(topServiceSlider, {
        slidesPerView: 1.15,
      });
    }

    // PC時は破棄
    if (!isSP && mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = undefined;
    }
  };

  // 初回実行
  initSwiper();

  // リサイズ時
  window.addEventListener("resize", initSwiper);
};
