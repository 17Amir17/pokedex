import { showLoader } from "../dom/loader.js";

export function modalBodyClick(event) {
  if (event.target.classList.contains("pokemon-modal")) {
    const pokemonName = event.target.dataset.name;
    $("#type-modal").modal("hide");
    document.querySelector("#poke-input").value = pokemonName;
    showLoader();
    $("#search").click();
  }
}
