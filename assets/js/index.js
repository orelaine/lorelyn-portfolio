/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.projects__modal'),
modalButton =document.querySelectorAll('.projects__button'),
modalClose = document.querySelectorAll('.projects__modal-close')

let activateModal = (modalClick) => {
     modal[modalClick].classList.add('active-modal')
}
modalButton.forEach((modalButton, i) =>{
     modalButton.addEventListener('click', () =>{
          activateModal(i)

     })
})

   /*=============== SHOW SCROLL UP ===============*/ 
modalClose.forEach((modalClose) =>{
     modalClose.addEventListener('click', ()=> {
          modal.forEach((modalRemove) => {
          modalRemove.classList.remove('active-modal')
          })
     })
})
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
