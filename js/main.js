let start = 0;
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const sliderLine = document.querySelector('.slider-line');

const valueParents = document.querySelector('.wrap-points');
const dots = document.querySelectorAll('.dot');


dots.forEach((value, ind) => {
  value.addEventListener('click', () => {
    start = ind * 550;
    document.querySelector('.wrap-points .selected-dot').classList.remove('selected-dot');

    value.classList.add('selected-dot');

    sliderLine.style.left = -start + 'px';
  })
})

next.addEventListener('click', () => {
  start += 550;
  if (start > 1100) {
    start = 0;
  }
    document.querySelector('.wrap-points .selected-dot').classList.remove('selected-dot');
    valueParents.children[start / 550].classList.add('selected-dot');

  sliderLine.style.left = -start + 'px';
})

prev.addEventListener('click', () => {
  start -= 550;
  if (start < 0) {
    start = 1100;
  }

  document.querySelector('.wrap-points .selected-dot').classList.remove('selected-dot');

  valueParents.children[start / 550].classList.add('selected-dot');

  sliderLine.style.left = -start + 'px';
})

/////////////////////////burger
let burgerBtn = document.querySelector('.burger-btn');
let wrapAllMenu = document.querySelector('.wrap-all-menu');
let newClass = document.querySelector('.new-class');
let specialClass = document.querySelector('special-Class')


burgerBtn.addEventListener('click', () => {
  // specialClass.classList.add('d-none');


  if (wrapAllMenu.classList.contains('new-class')){
    burgerBtn.innerHTML = '<img src="img/burger.svg" alt="burger">';
  }else{
    burgerBtn.innerHTML = '<div class="menu-btn d-flex justify-content-center ">\n' +
      '\n' +
      '          <p class="m-0">\n' +
      '            <i class="far fa-times-circle"></i>\n' +
      '          </p>\n' +
      '\n' +
      '      </div>\n';
  }

  wrapAllMenu.classList.toggle('new-class')
  wrapAllMenu.classList.toggle('d-none')
})
