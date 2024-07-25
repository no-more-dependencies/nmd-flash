import NmdFlash from "./nmd-flash";
import NmdFlashContainer from "./nmd-flash-container";
import "../css/main.css";

window.NmdFlash = NmdFlash;
window.NmdFlashContainer = NmdFlashContainer;
customElements.define("nmd-flash", NmdFlash);
customElements.define("nmd-flash-container", NmdFlashContainer);