import { hideloader } from "../dom/loader.js";
import { showGrid } from "../dom/pokemonGrid.js";
import { ThreeDModel } from "./threeScreen.js";

const screen = document.querySelector("#screen");
let mainModel;
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
  mainModel = new ThreeDModel(screen);
}

export function load(model) {
  mainModel.removeModel();
  mainModel.loadModel(getModelPath(model), onModelLoad);
}

function onModelLoad() {
  showGrid();
  hideloader();
}
