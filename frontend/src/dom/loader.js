export function showLoader() {
  loader.hidden = false;
  loader.style.position = "initial";
}

export async function hideloader() {
  loader.hidden = true;
  loader.style.position = "absolute";
}
