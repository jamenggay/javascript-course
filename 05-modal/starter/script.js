'use strict';

//selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnOpenModalEl.length);

//helper functions
let lastFocusedButton = null;
const openModal = function () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
    modalEl.focus();
    lastFocusedButton = document.activeElement;
};

const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');

    if(lastFocusedButton){
        lastFocusedButton.focus();
    }
};

//event listeners
btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

//keyboard events
console.log('keyboard event test');

// document.addEventListener('keydown', function (e) {
//     console.log('Key pressed: ', e);
//     console.log('Ket name:', e.key);
// });


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Accessibility attributes
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');


