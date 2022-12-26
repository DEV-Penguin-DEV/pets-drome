import { findAncestor } from './utils';

const faqContainerElement = document.querySelector('.faq__list');

const onFaqClick = (evt) => {
  const faqElement = evt.target.classList.contains('question') ? evt.target : findAncestor(evt.target, 'question');
  if (faqElement.classList.contains('question')) {
    faqElement.classList.toggle('question--open');
  }
};

export const startFaq = () => {
  faqContainerElement.addEventListener('click', onFaqClick);
};
