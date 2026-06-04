// ============================================================
// contact-form
// ============================================================
export const initContactForm = () => {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

  // 保存済みデータの復元
  const savedData = sessionStorage.getItem("contactData");

  if (savedData) {
    const data = JSON.parse(savedData);

    Object.entries(data).forEach(([key, value]) => {
      const field = contactForm.querySelector(`[name="${key}"]`);

      if (!field) return;

      field.value = value;
    });
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // form内のデータを一括取得
    const data = Object.fromEntries(new FormData(contactForm).entries());

    // 郵便番号の2つの入力値を結合し確認画面に表示する
    data.postal = `${data["postal-first"]}-${data["postal-last"]}`;

    // 取得したデータを保存
    sessionStorage.setItem("contactData", JSON.stringify(data));

    // 確認画面へ遷移
    window.location.href = "/contact/confirm/";
  });
};
