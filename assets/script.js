let modal = null;

function btnOpenHandler() {
  modal.classList.add('is-active');

  const close = document.querySelector('.modal__close');

  close.addEventListener('click', function(evt) {

    let target = evt.target.closest('.modal__close')
    console.log(target);

    if (target) {
      modal.classList.remove('is-active');
    }
  })
}

function initModal() {
  modal = document.querySelector('.modal');
  const btnOpen = document.querySelector('.about__send');

  if (!btnOpen || ! modal) {
    return;
  }

  btnOpen.addEventListener('click', btnOpenHandler);
}

initModal();
