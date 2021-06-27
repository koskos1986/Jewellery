'use strict';

(function () {
  const pageClass = {
    ACCORDION_CLASS: 'js-btn-accordion',
    ACTIVE_CLASS: '--active',
  };
//
  const accordionBlock = document.querySelector(".js-accordion");
  const accordionBtn = document.querySelectorAll(".js-btn-accordion");
  const accordionItems = document.querySelectorAll(".js-accordion-item");
//
  const toggleAccordionHandler = (evt) => {
    const target = evt.target.closest('li');
    const activeClass = `${target.dataset.class}${pageClass.ACTIVE_CLASS}`;
    if (target.classList.contains(activeClass)) {
      target.classList.remove(activeClass);
    } else {
      for (let item of accordionItems) {
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass);
        }
      }
      target.classList.add(activeClass);
    }
  };
//
  if (accordionBlock) {
    for (let btn of accordionBtn) {
      btn.addEventListener('click', toggleAccordionHandler);
    }
  }
//
  document.addEventListener('click', toggleAccordionHandler);
//
})();

// let allElems = document.querySelectorAll('.js-accordion .js-accordion-item');
//
// allElems.forEach((elem)=>{
    // elem.addEventListener('click', function(){
        // /*находим все активные элементы*/
        // let descActive = document.querySelectorAll('.js-accordion .faq__text--active');
        // /*прогоняем через цикл и удаляем класс active*/
        // descActive.forEach((elem)=>{
            // elem.classList.remove('faq__text--active');
        // })
//
        // let parentElem = this.parentNode;
//
        // let contentBlock = parentElem.querySelector('.faq__text')
//
        // if(contentBlock.classList.contains("faq__text--active")) {
            // contentBlock.classList.remove('faq__text--active');
        // }
        // else {
            // contentBlock.classList.add('faq__text--active');
        // }
    // })
// })
//
