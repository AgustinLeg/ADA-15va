let btnModal = document.getElementById('btn-modal');
let btnCloseModal = document.getElementById('btn-close-modal');
let modal = document.getElementById('modal');


btnModal.addEventListener('click', () => {
  modal.classList.add('is-active')
})


btnCloseModal.addEventListener('click', () => {
  modal.classList.remove('is-active')
})
