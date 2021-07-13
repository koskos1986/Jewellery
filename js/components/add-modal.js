'use strict';

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
  // export default addModalWindow;
