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
        invalidateSize()
        
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


//MAPA 

document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([-34.6037, -58.3816], 13); // Vista inicial en Buenos Aires

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker;

    function updateMap() {
        var street = document.getElementById('street').value;
        var number = document.getElementById('number').value;
        var state = document.getElementById('state').value;
        var city = document.getElementById('city').value;

        var direccion = `${street} ${number}, ${state}, ${city}`;

        if (street && number && state && city) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var lat = data[0].lat;
                        var lon = data[0].lon;

                        if (marker) {
                            map.removeLayer(marker);
                        }

                        map.setView([lat, lon], 15);
                        marker = L.marker([lat, lon]).addTo(map);
                    }
                });
        }
    }

    document.getElementById('street').addEventListener('input', updateMap);
    document.getElementById('number').addEventListener('input', updateMap);
    document.getElementById('state').addEventListener('input', updateMap);
    document.getElementById('city').addEventListener('input', updateMap);

    // Forzar recalculación del tamaño del mapa al mostrar la página 2
    document.getElementById('nextButton1').addEventListener('click', function() {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'flex';

        setTimeout(function() {
            map.invalidateSize();  // Asegura que el mapa se renderice correctamente al mostrarse
        }, 100);  // Agrega un pequeño retraso para asegurarte de que el contenedor esté completamente renderizado
    });

    // También actualizar el mapa si la ventana se redimensiona
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
});