/* eslint-disable import/prefer-default-export */
export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const isBottom = (el) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
};
