const icon01 = document.querySelector('.menu-icon__r01-svg');
icon01.addEventListener('click', () => {
  if (icon01.classList.contains('icon01-change')) {
    icon01.classList.remove('icon01-change');
  } else {
    icon01.classList.add('icon01-change');
  }
});

const icon02 = document.querySelector('.menu-icon__r02-svg');
icon02.addEventListener('click', () => {
  if (icon02.classList.contains('icon02-change')) {
    icon02.classList.remove('icon02-change');
  } else {
    icon02.classList.add('icon02-change');
  }
});