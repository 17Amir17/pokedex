import { getCurrentCollection } from '../storage/pokemonData.js';
import { ThreeDModel } from '../threejs/threeScreen.js';

const carousel = document.querySelector('#pokemon-carousel');

export function loadPokemon() {
  //Clear carousel
  carousel.innerHTML = '';
  const pokemon = getCurrentCollection();
  let first = true;
  pokemon.forEach((poke) => {
    const item = createCarouselItem(poke, first);
    carousel.appendChild(item);
    first = false;
  });
}

function createCarouselItem(pokemonDetails, first) {
  const item = document.createElement('div');
  if (first) item.setAttribute('class', 'carousel-item active');
  else item.setAttribute('class', 'carousel-item');
  if (pokemonDetails.model) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', `${pokemonDetails.name}-model`);
    canvas.setAttribute('style', 'width:300px; height: 300px');
    canvas.setAttribute('class', 'd-block w-300');
    const model = new ThreeDModel(canvas);
    model.loadModel(`assets/models/${pokemonDetails.model}`, () => {});
    item.appendChild(canvas);
  } else {
    const image = document.createElement('img');
    image.setAttribute('src', pokemonDetails.front_pic);
    image.setAttribute('class', 'd-block w-300');
    image.setAttribute('style', 'width:300px');
    item.appendChild(image);
  }
  return item;
}
