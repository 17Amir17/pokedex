import { loadEventListeners } from "./listeners/listeners.js";
import { initThree } from "./threejs/handleScreen.js";

function showPikachu() {
  document.querySelector("#poke-input").value = "pikachu";
  $("#search").click();
}

loadEventListeners();
initThree();
showPikachu();
