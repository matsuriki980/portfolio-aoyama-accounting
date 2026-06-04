import { initModules } from "./modules/index.js";
import { initTop } from "./pages/top/index.js";
import { initContact } from "./pages/contact/index.js";

// ============================================================
// init
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initModules();
  initTop();
  initContact();
});
