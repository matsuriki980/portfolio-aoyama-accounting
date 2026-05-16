import { headerState } from "./state.js"; // header background・drawer状態を共有
import { headerRender } from "./render.js"; // state変更後にclassを再描画

// ============================================================
// drawer menu
// ============================================================

export const initDrawerMenu = () => {
  const drawerBtn = document.querySelector(".js-drawer-btn");
  const drawerNav = document.querySelectorAll(".js-drawer__item");
  const drawerNavLinks = document.querySelectorAll(".js-drawer__item a"); // drawer内のリンクをすべて取得

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

  // ホバーしたリンクの親であるdrawer-itemのdata値と一致する画像を表示
  drawerNavLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const linkClosest = link.closest(".l-drawer__item");

      if (!linkClosest) return;

      // hover画像state更新
      headerState.activeDrawerImg = linkClosest.dataset.item;

      // state変更後に再描画
      headerRender();
    });
  });
};
