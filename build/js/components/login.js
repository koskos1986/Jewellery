'use strict';

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

// export default loginModalWindow;
