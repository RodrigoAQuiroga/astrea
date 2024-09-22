
function createLink(title, url) {
  const a = document.createElement('a');
  //a.className = "linkTo";
  a.href = url;
  a.textContent = title;
  a.className = "linksLeyes"
  return a;
}

export function createSections(objeto, description, contenedor) {
  const mainContainer = document.getElementById(contenedor);
  const sectionContainer = document.createElement('div');
  const titleContenedor = document.createElement('h3');
  titleContenedor.textContent = description;
  //sectionContainer.id = `${description}Links`; // Asigna un id único al contenedor
  sectionContainer.className = 'contenedorLinks';
  sectionContainer.appendChild(titleContenedor);
  objeto.forEach((x) => {
    const link = createLink(x.title, x.url);
    sectionContainer.appendChild(link);
  });
  
  mainContainer.appendChild(sectionContainer);
}