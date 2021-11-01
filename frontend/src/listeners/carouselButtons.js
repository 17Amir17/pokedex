const carousel = document.querySelector('#pokemon-carousel');

export function onPrevClick(event) {
  const items = getAllItems();
  const activeIndex = getActiveIndex(items);
  if (activeIndex === 0) return;
  items[activeIndex].classList.toggle('active');
  items[activeIndex - 1].classList.toggle('active');
}

export function onNextClick(event) {
  const items = getAllItems();
  const activeIndex = getActiveIndex(items);
  if (activeIndex + 1 === items.length) return;
  items[activeIndex].classList.toggle('active');
  items[activeIndex + 1].classList.toggle('active');
}

function getAllItems() {
  return Array.from(carousel.children);
}

function getActiveIndex(items) {
  let i = 0;
  let activeIndex;
  items.forEach((item) => {
    if (item.classList.contains('active')) {
      activeIndex = i;
      return;
    }
    i += 1;
  });
  return activeIndex;
}
