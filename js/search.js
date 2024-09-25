function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");


    const allDropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < allDropdowns.length; i++) {
        if (allDropdowns[i].id !== dropdownId && allDropdowns[i].classList.contains('show')) {
            allDropdowns[i].classList.remove('show');
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.filter-button') && !event.target.closest('.dropdown-content')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterProperties() {
    const searchTerm = document.querySelector('.search-input').value.trim().toLowerCase();
    const tipoPropiedad = document.querySelector('#departamentoDropdown .selected')?.textContent || '';
    const dormitorios = document.querySelector('#dormitoriosDropdown .selected')?.textContent || '';
    const precioDesde = document.getElementById('precioDesde').value;
    const precioHasta = document.getElementById('precioHasta').value;

    console.log('Filtrado:', { searchTerm, tipoPropiedad, dormitorios, precioDesde, precioHasta });
    
    // Simulación de resultados
    const hasResults = Math.random() > 0.5; // 50% de probabilidad de tener resultados
    
    document.getElementById('propertyList').style.display = hasResults ? 'grid' : 'none';
    document.getElementById('noResultsMessage').style.display = hasResults ? 'none' : 'block';
}

// Event listeners para los botones de filtro
document.getElementById('departamentoBtn').addEventListener('click', () => toggleDropdown('departamentoDropdown'));
document.getElementById('dormitoriosBtn').addEventListener('click', () => toggleDropdown('dormitoriosDropdown'));
document.getElementById('precioBtn').addEventListener('click', () => toggleDropdown('precioDropdown'));


document.getElementById('departamentoDropdown').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.target.classList.add('selected');
        Array.from(e.target.parentNode.children).forEach(child => {
            if (child !== e.target) child.classList.remove('selected');
        });
        toggleDropdown('departamentoDropdown');
        filterProperties();
    }
});

document.getElementById('dormitoriosDropdown').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.target.classList.add('selected');
        Array.from(e.target.parentNode.children).forEach(child => {
            if (child !== e.target) child.classList.remove('selected');
        });
        toggleDropdown('dormitoriosDropdown');
        filterProperties();
    }
});

document.getElementById('limpiarPrecio').addEventListener('click', () => {
    document.getElementById('precioDesde').value = '';
    document.getElementById('precioHasta').value = '';
    document.getElementById('precioBtn').textContent = 'PRECIO ▼';
});

document.getElementById('verResultadosPrecio').addEventListener('click', () => {
    filterProperties();
    toggleDropdown('precioDropdown');
});


document.getElementById('precioDropdown').addEventListener('click', (e) => {
    e.stopPropagation();
});


function updatePrecioButtonText() {
    const desdeInput = document.getElementById('precioDesde');
    const hastaInput = document.getElementById('precioHasta');
    const precioBtn = document.getElementById('precioBtn');

    const desdeValue = desdeInput?.value;
    const hastaValue = hastaInput?.value;

    if (precioBtn) {
        if (desdeValue && hastaValue) {
            precioBtn.textContent = `$${desdeValue} - $${hastaValue}`;
        } else if (desdeValue) {
            precioBtn.textContent = `Desde $${desdeValue}`;
        } else if (hastaValue) {
            precioBtn.textContent = `Hasta $${hastaValue}`;
        } else {
            precioBtn.textContent = 'PRECIO ▼';
        }
    }
}

document.getElementById('precioDesde')?.addEventListener('input', updatePrecioButtonText);
document.getElementById('precioHasta')?.addEventListener('input', updatePrecioButtonText);


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', filterProperties);
});
