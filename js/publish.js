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



showPage(currentPage, titulo_2.innerHTML = titulos[0]); // Mostrar la primera página al cargar
function updateQuantity(className, increment) {
    var input = document.querySelector('.item-quantity.' + className);
    var currentValue = parseInt(input.value);
    var newValue = currentValue + increment;

    if (newValue >= 0) { // Asegura que no baje de 0
        input.value = newValue;
    }
}

// drop and drag


document.addEventListener('DOMContentLoaded', () => {
    // Definir las áreas y las galerías
    const dropAreas = [
        { dropArea: document.getElementById('drop-area1'), fileInput: document.getElementById('fileElem1'), gallery: document.getElementById('gallery1'), filesArray: [] },
        { dropArea: document.getElementById('drop-area2'), fileInput: document.getElementById('fileElem2'), gallery: document.getElementById('gallery2'), filesArray: [] }
    ];

    dropAreas.forEach(({ dropArea, fileInput, gallery, filesArray }) => {
        // Prevenir el comportamiento por defecto
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });

        // Añadir resaltado cuando el archivo está sobre la zona
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => highlight(dropArea), false);
        });

        // Remover el resaltado
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => unhighlight(dropArea), false);
        });

        // Cuando se sueltan los archivos
        dropArea.addEventListener('drop', (e) => {
            let dt = e.dataTransfer;
            let files = dt.files;

            if (files.length + filesArray.length > 10) {
                alert("No puedes subir más de 10 imágenes.");
                return;
            }

            handleFiles(files, gallery, filesArray);
        });

        // Para archivos seleccionados manualmente
        fileInput.addEventListener('change', (e) => {
            let files = fileInput.files;

            if (files.length + filesArray.length > 10) {
                alert("No puedes subir más de 10 imágenes.");
                return;
            }

            handleFiles(files, gallery, filesArray);
        });
    });

    // Funciones para manejar los archivos
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(area) {
        area.classList.add('highlight');
    }

    function unhighlight(area) {
        area.classList.remove('highlight');
    }

    function handleFiles(files, gallery, filesArray) {
        files = [...files];
        files.forEach(file => {
            filesArray.push(file);
            previewFile(file, gallery);
        });
    }

    function previewFile(file, gallery) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            let img = document.createElement('img');
            img.src = reader.result;

            let removeBtn = document.createElement('button');
            removeBtn.innerText = 'Eliminar';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', () => {
                imgContainer.remove();
                filesArray = filesArray.filter(f => f !== file); // Elimina el archivo de la lista
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(removeBtn);
            gallery.appendChild(imgContainer);
        }
    }
});