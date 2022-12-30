const pointsElements = document.querySelectorAll('.progress-bar__point');
const stepsElements = document.querySelectorAll('.step');
const progressBarElement = document.querySelector('.progress-bar__line--progress');
const mediaQuery = window.matchMedia('(max-width: 850px)');
const roadMapContainerElement = document.querySelector('.road-map__mobile-container');
const roadMapElement = document.querySelector('.road-map');

const onPoinstClick = (i) => {
  const pointElement = pointsElements[i];
  const stepElement = stepsElements[i];

  if (!pointElement.classList.contains('progress-bar__point--achieved') || (pointElement.classList.contains('progress-bar__point--achieved') && pointsElements[i + 1].classList.contains('progress-bar__point--achieved'))) {
    stepsElements.forEach((step) => {
      step.classList.remove('step--active');
      step.style = '';
    });
    stepElement.classList.add('step--active');

    pointsElements.forEach((point, pointIndex) => {
      if (pointIndex <= i) {
        point.classList.add('progress-bar__point--achieved');
      } else {
        point.classList.remove('progress-bar__point--achieved');
      }
      if (mediaQuery.matches) {
        point.style.marginBottom = '80px';
      }
    });

    if (mediaQuery.matches) {
      if (pointsElements[pointsElements.length - 1].classList.contains('progress-bar__point--achieved')) {
        pointsElements[pointsElements.length - 1].style.marginBottom = `${150 + stepElement.scrollHeight}px`;
      } else {
        pointsElements.forEach((point, pointIndex) => {
          if (point.classList.contains('progress-bar__point--achieved') && !pointsElements[pointIndex + 1].classList.contains('progress-bar__point--achieved')) {
            point.style.marginBottom = `${150 + stepElement.scrollHeight}px`;
          }
        });
      }
      roadMapElement.style.paddingBottom = '120px';
      roadMapContainerElement.style.minHeight = `${progressBarElement.parentNode.clientHeight}px`;
      if (i === 0) {
        stepElement.style.marginTop = '59px';
      } else {
        stepElement.style.marginTop = `${(i * 80) + ((i + 1) * 45)}px`;
      }
      progressBarElement.style.height = i === 0 ? '15%' : `${15 + (22 * i)}%`;
    } else {
      if (i <= 2) {
        stepElement.style.marginLeft = `${(i) * 24}%`;
      } else if (i === 3) {
        stepElement.style.marginLeft = '0';
      } else {
        stepElement.style.marginLeft = `${(i) * 10.9}vw`;
      }
      progressBarElement.style.width = i === 0 ? '15%' : `${15 + (22 * i)}%`;
    }

  }
};

export const startRoadMap = () => {
  if (mediaQuery.matches) {
    roadMapContainerElement.style.minHeight = `${progressBarElement.parentNode.clientHeight}px`;

    pointsElements[0].style.marginBottom = `${150 + stepsElements[0].scrollHeight}px`;
  }

  pointsElements.forEach((point, i) => {
    point.addEventListener('click', () => onPoinstClick(i));
  });
};
