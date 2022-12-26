const roadMap = document.querySelector('.road-map');

function getOffsetSum(elem) {
  let top = 0, left = 0;
  while(elem) {
    top = top + parseFloat(elem.offsetTop);
    left = left + parseFloat(elem.offsetLeft);
    elem = elem.offsetParent;
  }

  return {top: Math.round(top), left: Math.round(left)};
}

const roadMapY = getOffsetSum(roadMap).top;
console.log(roadMapY);
window.addEventListener('scroll', () => {
  if ((roadMapY - 30) <= window.pageYOffset && (roadMapY + 30) >= window.pageYOffset) {
    roadMap.style.position = 'fixed';
  }
});
