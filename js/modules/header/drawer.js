import { headerState } from "./state.js"; // header background・drawer状態を共有
import { headerRender } from "./render.js"; // state変更後にclassを再描画

// ============================================================
// drawer menu
// ============================================================

export const initDrawerMenu = () => {
  const drawerBtn = document.querySelector(".js-drawer-btn");
  const drawerNavLinks = document.querySelectorAll(".l-drawer__item a"); // drawer内のリンクをすべて取得

  // drawer-btnをクリックで開閉を切り替え
  drawerBtn.addEventListener("click", () => {
    headerState.isDrawerOpen = !headerState.isDrawerOpen;
    headerRender();
  });

  // drawer内のリンクをクリックしたらclose
  drawerNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerState.isDrawerOpen = false;
      headerRender();
    });
  });
};
