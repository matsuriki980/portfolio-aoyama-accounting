import { headerState } from "./state.js"; // header background・drawer状態を共有
import { headerRender } from "./render.js"; // state変更後にclassを再描画

// ============================================================
// header background
// ============================================================

export const initHeaderBackground = () => {
  const trigger = document.querySelector(".js-header-trigger");

  // triggerが存在しなければ処理停止
  if (!trigger) return;

  // viewport top から trigger上部までの距離
  const triggerTop = trigger.getBoundingClientRect().top + window.scrollY;

  const onScroll = () => {
    // ページスクロール量
    const scrollY = window.scrollY;

    // trigger通過後true
    headerState.isPostTrigger = scrollY >= triggerTop;

    // state変更後に再描画
    headerRender();
  };

  // 初期実行
  onScroll();

  // scroll監視
  window.addEventListener("scroll", onScroll);
};
