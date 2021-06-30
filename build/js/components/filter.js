'use strict';

const accordions = document.getElementsByClassName('filter__btn');

for ( const acc of accordions ) {
  acc.addEventListener('click', function() {
    const body = this.nextElementSibling;
    body.classList.toggle('filter__wrapper--active');

    const btn = document.querySelectorAll('.filter__btn');
    btn.classList.toggle('filter__btn--active');
    // const indication = this.querySelector('.state-indication');
    // if ( indication.classList.contains('plus') ) {
      // indication.classList.remove('plus');
      // indication.classList.add('minus');
    // } else if ( indication.classList.contains('minus') ) {
      // indication.classList.remove('minus');
      // indication.classList.add('plus');
    // }
  } );
}
