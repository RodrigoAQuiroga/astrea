import {createSections } from './config.js'; // Import links directly
import { constituciones, tratados, codigos, leyes} from './linkList.js'; // Import links directly

createSections(constituciones, 'Constituciones Argentinas', 'leyes');
createSections(codigos, 'Códigos de Fondo y Forma','leyes')
createSections(tratados, 'Tratados Constitucionales', 'leyes')
createSections(leyes, 'Leyes Nacionales y de Mendoza', 'leyes')




const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const contenedores = document.querySelectorAll('.contenedorLinks');

  contenedores.forEach((contenedor) => {
    const links = contenedor.querySelectorAll('a');
    let found = false;

    links.forEach((link) => {
      const title = link.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (title.includes(searchTerm)) {
        link.style.display = 'inline-block';
        found = true;
      } else {
        link.style.display = 'none';
      }
    });

    if (!found) {
      contenedor.style.display = 'none';
    } else {
      contenedor.style.display = 'block';
    }
  });
});
