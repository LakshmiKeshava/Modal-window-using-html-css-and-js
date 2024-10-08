'use strict'

let btnsShowModal = document.querySelectorAll('.show-modal');
 console.log(btnsShowModal);

let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

for(var i=0;i<btnsShowModal.length;i++){
    btnsShowModal[i].addEventListener('click', function(){
        console.log("Button clicked");

        modal.classList.remove('hidden');

        overlay.classList.remove('hidden');
    })
    closeModal.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    overlay.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}







