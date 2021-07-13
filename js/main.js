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

  header.addEventListener("click", menuToggle);
})();

(function () {
  const addModalWindow = () => {
    const KeyButton = {
      ESCAPE: 'Escape',
    };

    const page = document.querySelector('.js-page');
    const openModalBtn = document.querySelector('.js-btn-buy');
    const overlay = document.querySelector('.js-overlay');
    const addModal = document.querySelector('.js-modal-add');
    const closeModalBtn = document.querySelector('.js-modal-close');
    const focusElement = document.querySelector('#focus-element');

    const onEscModalClose = (evt) => {
      if (evt.key === KeyButton.ESCAPE) {
        evt.preventDefault();
        closeModalHandler();
      }
    };

    const overlayClickHandler = (evt) => {
      if (evt.target === overlay) {
        closeModalHandler();
      }
    };

    const closeModalHandler = () => {
      overlay.classList.remove("overlay--active");
      addModal.classList.remove("modal--active");
      page.classList.remove("page--locked");
      closeModalBtn.removeEventListener('click', closeModalHandler);
      overlay.removeEventListener('click', closeModalHandler);
      document.removeEventListener('keydown', onEscModalClose);
    };

    const openModalHandler = (evt) => {
      evt.preventDefault();
      overlay.classList.add("overlay--active");
      addModal.classList.add("modal--active");
      focusElement.focus();
      page.classList.add("page--locked");
      closeModalBtn.addEventListener('click', closeModalHandler);
      overlay.addEventListener('click', overlayClickHandler);
      document.addEventListener('keydown', onEscModalClose);
    };

    if (addModal) {
      openModalBtn.addEventListener('click', openModalHandler);
    }
  };

  addModalWindow();

})();

(function () {
  const filter = () => {
    const pageClass = {
      PAGE__LOCKED: 'page--locked',
      FILTER_ACTIVE: 'filter--active',
      ACTIVE_CLASS: '--active'
    };

    const page = document.querySelector('.js-page');
    const filterBlock = document.querySelector('.js-filter');
    const filterForm = document.querySelector('.js-filter-form');
    const filterOpenBtn = document.querySelector('.js-btn-filter-open');
    const filterCloseBtn = document.querySelector('.js-btn-filter-close');
    const filterBtns = document.querySelectorAll('.js-btn-filter');

    const toggleFilterItemHandler = (evt) => {
      const target = evt.target.closest('li');
      const activeClass = `${target.dataset.class}${pageClass.ACTIVE_CLASS}`;
      target.classList.toggle(activeClass);
    };

    const closeFilterHandler = () => {
      filterBlock.classList.remove(pageClass.FILTER_ACTIVE);
      page.classList.remove(pageClass.PAGE__LOCKED);
      filterOpenBtn.addEventListener('click', openFilterHandler);
      filterCloseBtn.removeEventListener('click', closeFilterHandler);
    };

    const openFilterHandler = () => {
      filterBlock.classList.add(pageClass.FILTER_ACTIVE);
      page.classList.add(pageClass.PAGE__LOCKED);
      filterCloseBtn.removeEventListener('click', closeFilterHandler);
      filterCloseBtn.addEventListener('click', closeFilterHandler);
    };

    if (filterBlock) {
      filterForm.addEventListener('submit', closeFilterHandler);
      for (let btn of filterBtns) {
        btn.addEventListener('click', toggleFilterItemHandler);
      }
    }

    if (filterOpenBtn) {
      filterOpenBtn.addEventListener('click', openFilterHandler);
    }

  };

  filter();
})();

(function () {
  const loginModalWindow = () => {

    const KeyButton = {
      ESCAPE: 'Escape',
    };

    const page = document.querySelector('.js-page');
    const openLoginBtn = document.querySelectorAll('.js-login');
    const openLogin = document.querySelector('.js-modal-login');
    const formLogin = document.querySelector('.js-form-login');
    const closeLogin = document.querySelector('.js-login-close');

    let isStorageSupport = true;
    let storageEmail = '';

    try {
      storageEmail = localStorage.getItem('userEmail');
    } catch (err) {
      isStorageSupport = false;
    }

    const onEscModalClose = (evt) => {
      if (evt.key === KeyButton.ESCAPE) {
        evt.preventDefault();
        closeLoginHandler();
      }
    };

    const overlayClickHandler = (evt) => {
      if (evt.target === openLogin) {
        closeLoginHandler();
      }
    };

    const closeLoginHandler = () => {
      openLogin.classList.remove('modal--active');
      page.classList.remove('page--locked');
      closeLogin.removeEventListener('click', closeLoginHandler);
      openLogin.removeEventListener('click', openLoginHandler);
      document.removeEventListener('keydown', onEscModalClose);
    };

    const openLoginHandler = (evt) => {
      evt.preventDefault();
      page.classList.add('page--locked');
      openLogin.classList.add('modal--active');
      if (isStorageSupport && storageEmail) {
        formLogin.email.value = storageEmail;
        formLogin.password.focus();
      } else if (isStorageSupport) {
        formLogin.email.focus();
      }
      openLogin.addEventListener('click', overlayClickHandler);
      closeLogin.addEventListener('click', closeLoginHandler);
      document.addEventListener('keydown', onEscModalClose);
    };

    for (let btn of openLoginBtn) {
      btn.addEventListener('click', openLoginHandler);
    }
  };

  loginModalWindow();
})();

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

(() => {
  const swiper = () => {
    const swiperBlock = document.querySelector('.js-swiper');

    if (swiperBlock) {
      const swiper = new Swiper('.js-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            pagination: {
              el: '.products__pagination',
              type: 'custom',
              renderCustom(swiper, current, total) {
                return `${current}&ensp;of&ensp;${total}`;
              },
            },
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            pagination: {
              el: '.products__pagination',
              clickable: true,
              type: 'bullets',
              renderBullet(index, className) {
                return '<button class="' + className + '" type="button" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
              },
            },
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            pagination: {
              el: '.products__pagination',
              clickable: true,
              type: 'bullets',
              renderBullet(index, className) {
                return '<button class="' + className + '" type="button" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
              },
            },
          },
        },
        navigation: {
          nextEl: '.btn-slider--right',
          prevEl: '.btn-slider--left',
        },
      });
      swiper.init();
    }
  };

  swiper();
})();

(function () {
  const acc = document.getElementsByClassName("faq__btn");
  let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
})();
