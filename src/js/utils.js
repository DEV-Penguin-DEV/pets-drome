export const findAncestor = (el, cls) => {
  // eslint-disable-next-line curly
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};
