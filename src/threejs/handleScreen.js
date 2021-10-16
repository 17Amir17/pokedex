import { hideloader } from "../dom/loader.js";
import { showGrid } from "../dom/pokemonGrid.js";
import { models } from "../storage/modelData.js";
import { loadNewModel, removeLoadedModel, main } from "./modelLoader.js";

const screen = document.querySelector("#screen");
export function hideScreen() {
  screen.style.position = "absolute";
  screen.hidden = true;
}

export function showScreen() {
  screen.style.position = "initial";
  screen.hidden = false;
}

function getModelPath(name) {
  const modelPath = "assets/models/" + name;
  return modelPath;
}

export function initThree() {
  main();
}

export function load(model) {
  removeLoadedModel();
  loadNewModel(getModelPath(model), onModelLoad);
}

function onModelLoad() {
  showGrid();
  hideloader();
}
