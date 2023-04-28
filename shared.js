const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanBtns = document.querySelectorAll('.plan button');
const modalNoBtn = document.querySelector('.modal__action--negative');
const toggleBtns = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


for (let i = 0; i < selectPlanBtns.length; i++){
    selectPlanBtns[i].addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if (modalNoBtn) {
    modalNoBtn.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }    
    backdrop.classList.remove('open');
}

toggleBtns.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

