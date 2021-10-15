export function onPoketypeClick(event) {
  if (event.target.classList.contains("type")) {
    const type = event.target.dataset.type;
    console.log(type);
  }
}
