import { initModules } from "./modules/index.js";
import { initTop } from "./pages/top/index.js";
import { initContactForm } from "./pages/contact/contact-form.js";

// ============================================================
// init
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initModules();
  initTop();
  initContactForm();
});
