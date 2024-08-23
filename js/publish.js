//Script form publicacion
const inputAl = document.querySelector("alquiler");
const inputTe = document.querySelector("temporada");
const checkAl = document.querySelector(".label-alq");
const checkTe = document.querySelector(".label-temp");
const titulo_2 = document.querySelector(".hero-inputs-h2");


const titulos = ["Contanos,¿que queres publicar?","¿Donde esta ubicada tu propiedad?","Caracteristicas","Requisitos"]

checkAl.addEventListener('click',()=>{
    console.log("click");
    checkAl.style.background = "grey";
    checkTe.style.background = "white";
})

checkTe.addEventListener('click',()=>{
    console.log("click");
    checkTe.style.background = "green";
    checkAl.style.background = "white";
})


//Prueba




    let currentPage = 1;
    const totalPages = 4;

const buttons = document.querySelectorAll(".buttons");
console.log(buttons);

function showPage(page) {
        for (let i = 1; i <= totalPages; i++) {
            document.getElementById('page' + i).style.display = (i === page) ? 'flex' : 'none';
        
        }
    }

    // Botón Siguiente en la Página 1
    document.getElementById('nextButton1').addEventListener('click', function() {
        currentPage++;
        buttons[0].classList.add('check');
        showPage(currentPage);
        titulo_2.innerHTML = titulos[1];
        
    });

    // Botón Anterior en la Página 2
    document.getElementById('prevButton2').addEventListener('click', function() {
        currentPage--;
        buttons[0].classList.remove("check")
        showPage(currentPage);
        titulo_2.innerHTML = titulos[0];
    });

    // Botón Siguiente en la Página 2
    document.getElementById('nextButton2').addEventListener('click', function() {
        currentPage++;
        buttons[1].classList.add('check')
        showPage(currentPage);
        titulo_2.innerHTML = titulos[2];
    });

    // Botón Anterior en la Página 3
    document.getElementById('prevButton3').addEventListener('click', function() {
        currentPage--;
        buttons[1].classList.remove('check')
        showPage(currentPage);
        titulo_2.innerHTML = titulos[1];
    });
     // Botón Siguiente en la Página 3
    document.getElementById('nextButton3').addEventListener('click', function() {
        currentPage++;
        buttons[2].classList.add('check')
        showPage(currentPage);
        titulo_2.innerHTML = titulos[3];
    });

     // Botón Anterior en la Página 4
     document.getElementById('prevButton4').addEventListener('click', function() {
        currentPage--;
        buttons[2].classList.remove('check')
        showPage(currentPage);
        titulo_2.innerHTML = titulos[2];
    });


showPage(currentPage, titulo_2.innerHTML = titulos[0]); // Mostrar la primera página al cargar
