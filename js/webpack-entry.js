import NmdFlash from "./nmd-flash";
import NmdFlashContainer from "./nmd-flash-container";
import "../scss/main.scss";

window.NmdFlash = NmdFlash;
window.NmdFlashContainer = NmdFlashContainer;
customElements.define("nmd-flash", NmdFlash);
customElements.define("nmd-flash-container", NmdFlashContainer);