const modal = document.querySelector('.modal')
const buttonSpiderman = document.querySelector('#button-spiderman')
const closeButton = document.querySelector('.modal__content--close')

buttonSpiderman.addEventListener('click', () => {
	modal.classList.remove('hidden')
	modal.classList.add('visible')
})

closeButton.addEventListener('click', () => {
	modal.classList.remove('visible')
	modal.classList.add('hidden')
})
