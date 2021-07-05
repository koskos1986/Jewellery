'use strict';

(function () {
  const productCardTabs = () => {
    const pageClass = {
      DESCRIPTION_ACTIVE: 'product-card__description-active',
    };

    const descriptionToggle = document.querySelector('#description');
    const descriptionBlock = document.querySelector('.js-description');
    const additionalToggle = document.querySelector('#additional');
    const additionalBlock = document.querySelector('.js-additional');

    const toggleInputHandler = () => {
      descriptionBlock.classList.toggle(pageClass.DESCRIPTION_ACTIVE);
      additionalBlock.classList.toggle(pageClass.DESCRIPTION_ACTIVE);
    };

    if (additionalToggle && descriptionToggle) {
      additionalToggle.addEventListener('change', toggleInputHandler);
      descriptionToggle.addEventListener('change', toggleInputHandler);
    }
  };

  productCardTabs();
})();

export default productCardTabs;
