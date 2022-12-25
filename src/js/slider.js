import {
  findAncestor
} from './utils';

const sliderImagesContainerElement = document.querySelector('.slider__list');
const sliderItems = document.querySelectorAll('.slider__item');
const controlersContainerElement = document.querySelector('.slider__menu-list');
const controlers = document.querySelectorAll('.slider__menu-button');

// TODO
const putActiveMidlle = (isButton) => {
  if (isButton) {
    controlers.forEach((controler, i) => {
      if (controler.classList.contains('slider__menu-button--active')) {
        sliderItems.forEach((img) => {
          img.classList.remove('slider__item--active');
        });
        sliderItems[i].classList.add('slider__item--active');

        sliderItems.forEach((img) => {
          img.classList.remove('slider__item--shown');
        });
        sliderItems[i].classList.add('slider__item--shown');
        sliderItems[(sliderItems.length - 1) !== i ? (i + 1) : 0].classList.add('slider__item--shown');
        sliderItems[0 !== i ? (i - 1) : (sliderItems.length - 1)].classList.add('slider__item--shown');

        sliderItems[i].style.order = 1;
        sliderItems[(sliderItems.length - 1) !== i ? (i + 1) : 0].style.order = 2;
        sliderItems[0 !== i ? (i - 1) : (sliderItems.length - 1)].style.order = -1;
      }
    });
  } else {
    sliderItems.forEach((slide, i) => {
      if (slide.classList.contains('slider__item--active')) {
        sliderItems.forEach((img) => {
          img.classList.remove('slider__item--shown');
        });
        slide.classList.add('slider__item--shown');
        sliderItems[(sliderItems.length - 1) !== i ? (i + 1) : 0].classList.add('slider__item--shown');
        sliderItems[0 !== i ? (i - 1) : (sliderItems.length - 1)].classList.add('slider__item--shown');

        slide.style.order = 1;
        sliderItems[(sliderItems.length - 1) !== i ? (i + 1) : 0].style.order = 2;
        sliderItems[0 !== i ? (i - 1) : (sliderItems.length - 1)].style.order = -1;

        controlers.forEach((controler) => {
          controler.classList.remove('slider__menu-button--active');
        });
        controlers[i].classList.add('slider__menu-button--active');
      }
    });
  }

};

const onControlersClick = (evt) => {
  const controlerElement = evt.target;

  if (controlerElement.classList.contains('slider__menu-button') && !controlerElement.classList.contains('slider__menu-button--active')) {
    controlers.forEach((controler) => {
      controler.classList.remove('slider__menu-button--active');
    });

    controlerElement.classList.add('slider__menu-button--active');
    putActiveMidlle(true);
  }
};

const onImagesClick = (evt) => {
  const imgElement = evt.target;
  const imgContainerElement = findAncestor(evt.target, 'slider__item');
  if ((imgElement.classList.contains('slider__img') || imgElement.classList.contains('slider__img-container')) && !imgContainerElement.classList.contains('slider__item--active')) {
    sliderItems.forEach((img) => {
      img.classList.remove('slider__item--active');
    });

    imgContainerElement.classList.add('slider__item--active');
    putActiveMidlle(false);
  }
};

export const startSlider = () => {
  putActiveMidlle();
  controlersContainerElement.addEventListener('click', onControlersClick);
  sliderImagesContainerElement.addEventListener('click', onImagesClick);
};
