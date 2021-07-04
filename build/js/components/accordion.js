'use strict';

(function () {
  const list = document.querySelectorAll(".faq__list");
  const nojsList = document.querySelector(".faq__list");
  nojsList.classList.remove('js-accordion--nojs');

  for (const listItem of list) {
    const faqListItems = listItem.querySelectorAll(".faq__list-item");
    for (const faqListItem of faqListItems) {
      const btn = faqListItem.querySelector(".faq__btn");
      btn.addEventListener('click', () => {
        for (const otherfaqListItem of faqListItems) {
          if (otherfaqListItem !== faqListItem) {
            otherfaqListItem.classList.remove('faq__list-item--active');
          }
        }
        faqListItem.classList.toggle('faq__list-item--active');
      });
    }
  }
})();
