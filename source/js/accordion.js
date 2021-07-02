'use strict';

(function () {

  let allElems = document.querySelectorAll('.js-accordion .js-accordion-item');

  allElems.forEach((elem) => {
    elem.addEventListener('click', function(){
      /*находим все активные элементы*/
      let descActive = document.querySelectorAll('.js-accordion .faq__text--active');
      /*прогоняем через цикл и удаляем класс active*/
      descActive.forEach((elem)=>{
        elem.classList.remove('faq__text--active');
      })
      let parentElem = this.parentNode;
      let contentBlock = parentElem.querySelector('.faq__text');
      if(contentBlock.classList.contains("faq__text--active")) {
        contentBlock.classList.remove('faq__text--active');
      }
      else {
        contentBlock.classList.add('faq__text--active');
      }
    })
  });
})();
