
const openModalBtn = document.querySelector("#openModalBtn");
const ForgetPass = document.querySelector("#forgot-password");
const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");
const cardForget = document.querySelector(".card-forget");
const closeBtn = document.querySelector(".close-btn");
const returnBtn = document.querySelector(".close-btn-2");

// Añadir manejadores de eventos para abrir y cerrar la tarjeta
openModalBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    card.appendChild(closeBtn);
    card.classList.toggle('show');
});


ForgetPass.addEventListener('click',()=>{
    card.classList.toggle('show');
    cardForget.classList.toggle('show');
});

returnBtn.addEventListener('click', ()=>{
    if(cardForget.classList.contains('show')){
        cardForget.classList.remove('show');
        card.classList.toggle('show');
    }
})


overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeLoginModal();
    }
});

function closeLoginModal() {
    card.classList.remove('show');
    cardForget.classList.remove('show');
    overlay.style.display = 'none';
}

closeBtn.addEventListener('click', closeLoginModal);











