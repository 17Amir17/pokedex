export function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatName(name) {
  let nameArr = name.split("-");
  let formattedName = "";
  nameArr = nameArr.filter((e) => e !== "gmax");
  nameArr.forEach((n) => (formattedName += cap(n) + " "));
  return formattedName;
}
