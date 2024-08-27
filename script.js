// Crear el mapa y establecer la vista inicial
var map = L.map('map').setView([51.505, -0.09], 13);

// Cargar y mostrar un mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Variable para almacenar el marcador actual
var currentMarker;

// Manejar la geocodificación usando Nominatim (OpenStreetMap)
document.getElementById('location-form').addEventListener('change', function(e) {
    e.preventDefault();

    var street = document.getElementById('street').value;
    var number = document.getElementById('number').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    // var country = document.getElementById('country').value;
    
    var address = `${street} ${number}, ${city}, ${state}, argentina`;
    
    // Usar Nominatim para geocodificar la dirección
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;

                // Centrar el mapa en la ubicación encontrada
                map.setView([lat, lon], 15);

                // Eliminar el marcador anterior si existe
                if (currentMarker) {
                    map.removeLayer(currentMarker);
                }

                // Añadir un nuevo marcador en la ubicación
                currentMarker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`Ubicación: ${address}`)
                    .openPopup();
            } else {
                alert('No se encontró la ubicación.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al buscar la ubicación.');
        });
});