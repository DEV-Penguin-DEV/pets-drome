const faqContainerElement = document.querySelector('.faq__list');

const onFaqClick = (evt) => {
  const faqElement = evt.target;
};

export const startFaq = () => {
  faqContainerElement.addEventListener('click', onFaqClick);
};
