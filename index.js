import { addPairHandler } from "./js/addPairHandler.js";
import refs from "./js/getRefs";
window.addEventListener("click", (e) => {
  e.preventDefault();
  addPairHandler(e);
});
