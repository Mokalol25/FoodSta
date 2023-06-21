(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-hero-modal]'),
    closeModalBtn: document.querySelector('[data-close-hero-modal]'),
    backdrop: document.querySelector('[data-hero-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('hero__is-hidden');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
