import { headerState } from "./state.js"; // header background・drawer状態を共有

// ============================================================
// header render
// ============================================================

const header = document.querySelector(".js-header");
const isSubPage = header.classList.contains("l-header--sub-page"); // 下層ページならtrueを返す
const drawer = document.querySelector(".js-drawer");

export const headerRender = () => {
  // 要素が存在しなければ処理停止
  if (!header || !drawer) return;

  // ==========================================================
  // header background
  // ==========================================================

  // triggerを超えてかつ、drawer close時にheader背景を表示する
  header.classList.toggle(
    "is-active",
    headerState.isPostTrigger && !headerState.isDrawerOpen,
  );

  // ==========================================================
  // drawer
  // ==========================================================
  header.classList.toggle("is-drawer-open", headerState.isDrawerOpen); // ナビゲーションとお問い合わせボタンを非表示に
  drawer.classList.toggle("is-open", headerState.isDrawerOpen);
  document.body.classList.toggle("is-drawer-open", headerState.isDrawerOpen); // drawer open時スクロールを止める

  // ==========================================================
  // drawer sub-page
  // ==========================================================

  // drawer open時のみ下層ページ用classを外す
  header.classList.toggle(
    "l-header--sub-page",
    isSubPage && !headerState.isDrawerOpen,
  );
};
