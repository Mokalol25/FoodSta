(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-header-mobile-modal]'),
    closeModalBtn: document.querySelector('[data-close-header-mobile-modal]'),
    backdrop: document.querySelector('[data-header-mobile-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('header-mobile__is-hidden');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
