const modalTitle = document.querySelector("#type-modal-title");
const modalBody = document.querySelector(".modal-body");

export function handleModal(type, pokemonNames) {
  $("#type-modal").modal("show");
  modalTitle.innerText = cap(type) + " Pokemon";
  modalBody.innerHTML = getNamesHtml(type, pokemonNames);
}

const getNamesHtml = (type, names) => {
  let nameHtml = "";
  for (const pkmnName of names) {
    nameHtml += getNameHtml(type, pkmnName);
  }
  return nameHtml;
};

const getNameHtml = (type, name) => {
  return `<p class=' ${type} pokemon-modal' data-name='${name}'>${formatName(
    name
  )}</p>\n`;
};

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatName(name) {
  let nameArr = name.split("-");
  let formattedName = "";
  nameArr = nameArr.filter((e) => e !== "gmax");
  nameArr.forEach((n) => (formattedName += cap(n) + " "));
  return formattedName;
}
