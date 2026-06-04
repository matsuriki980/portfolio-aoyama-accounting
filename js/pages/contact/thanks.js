// ============================================================
// thanks
// ============================================================

export const initThanks = () => {
  const thanks = document.querySelector(".js-thanks");

  if (!thanks) return;

  const thanksBackBtn = thanks.querySelector(".js-thanks__submit-btn");

  thanksBackBtn.addEventListener("click", () => {
    // topページに戻る
    window.location.href = "/";
  });
};
