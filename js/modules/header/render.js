import { headerState } from "./state.js"; // header background・drawer状態を共有

// ============================================================
// header render
// ============================================================

const header = document.querySelector(".js-header");
const isSubPage = header.classList.contains("l-header--sub-page"); // 下層ページならtrueを返す
const drawer = document.querySelector(".js-drawer");
const drawerImgs = document.querySelectorAll(".js-drawer__img");

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
  // drawer hover img
  // ==========================================================

  // 一旦active削除
  drawerImgs.forEach((img) => {
    img.classList.remove("is-active");
  });

  // stateと一致する画像を取得
  const activeImg = document.querySelector(
    `.js-drawer__img[data-img="${headerState.activeDrawerImg}"]`,
  );

  // active付与
  activeImg.classList.add("is-active");

  // ==========================================================
  // sub-page
  // ==========================================================

  // 下層ページでは、trigger通過後とdrawer open時に専用クラスを外す
  header.classList.toggle(
    "l-header--sub-page",
    isSubPage && !headerState.isPostTrigger && !headerState.isDrawerOpen,
  );
};
