'use strict';

(function () {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.js-btn-menu')

  header.classList.remove('header--nojs');
  header.classList.add('header--close');

  const menuToggle = function (evt) {
    if (evt.target === toggleBtn) {
      header.classList.toggle('header--close');
      header.classList.toggle('header--open');
    }

  };
})();
