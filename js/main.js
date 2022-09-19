const icon01 = document.querySelector('.menu-icon__r01-svg');
icon01.addEventListener('click', () => {
  if (icon01.classList.contains('icon01-change')) {
    icon01.classList.remove('icon01-change');
  } else {
    icon01.classList.add('icon01-change');
  }
})