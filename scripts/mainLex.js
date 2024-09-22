
function arts(x) {
    for (let index = 1; index <= x; index++) {
        let x = document.getElementById("art")
        x.setAttribute("id", "art" + index)
    }
}

function defaultOp() {
    var x = document.getElementById("searcher");
    x.addEventListener('input', function () {
        document.getElementById("spn").innerText = "Buscar Art. " + x.value
    });
    x.addEventListener('input', function () {
        document.getElementById("spn").setAttribute("href", "#art" + x.value)
    });


}


function mySearcher() {
    var x = document.getElementById("searcher");
    var a = "#art" + x.value

    document.querySelector(a).scrollIntoView();
    document.querySelector(a).className = "found";

}
let texto = window.getSelection();

function play() {
    let to_speak = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(to_speak);
}

function stopSpeak() {
    window.speechSynthesis.cancel();
}
function pause() {
    window.speechSynthesis.pause();
}
function resume() {
    if (speechSynthesis.paused)
        speechSynthesis.resume();
}



document.addEventListener("DOMContentLoaded", function () {
    // Creamos los elementos HTML
    var div = document.createElement("div");
    div.id = "buscador";
    div.className = "tabcontent";

    var input = document.createElement("input");
    input.type = "search";
    input.id = "searcher";
    input.maxlength = 4;
    input.inputmode = "numeric";
    input.minlength = 1;
    input.onsearch = function () { mySearcher() };
    input.placeholder = "Número a buscar...";

    var a = document.createElement("a");
    a.id = "spn";
    a.textContent = "Buscar por artículo";

    // Agregamos los elementos al div
    div.appendChild(input);
    div.appendChild(a);

    // Agregamos el div al elemento padre (supongamos que es un elemento con id "container")
    var container = document.getElementById("searchNav");
    container.appendChild(div);




    // Obtener el header elemento
    var header = document.getElementsByTagName("header")[0];

    // Crear el nuevo elemento div
    var homeDiv = document.createElement("div");
    homeDiv.id = "home";
    homeDiv.innerHTML = '<a href="../../index.html">Volver a la pagina principal</a>';

    // Insertar el nuevo elemento después del header
    header.parentNode.insertBefore(homeDiv, header.nextSibling);



    // Obtener el footer elemento
var footer = document.getElementsByTagName("footer")[0];

// Obtener el contenedor elemento
var container = document.getElementById("buscador");

// Crear el anchor
var anchor = document.createElement("a");
anchor.href = "#top";
anchor.innerHTML = "Ir al principio";
anchor.className = "fixed-anchor";

// Agregar estilos CSS para que el anchor sea fijo y visible

anchor.style.background = "rgba(255, 255, 255, 0.8)";
anchor.style.padding = "10px";
anchor.style.borderRadius = "5px";
anchor.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
anchor.style.textDecoration = "none";
anchor.style.color = "#337ab7";
anchor.style.fontSize = "16px";

// Insertar el anchor después del contenedor
footer.insertBefore(anchor, footer.firstChild);


});


function createReaderUI() {
    const readerDiv = document.createElement("div");
    readerDiv.id = "lector";

    const p = document.createElement("p");
    p.textContent = "Primero seleccione el texto a leer y después presione leer";

    const buttonDiv = document.createElement("div");

    const playButton = document.createElement("button");
    playButton.onclick = play;
    playButton.textContent = "Leer";

    const stopButton = document.createElement("button");
    stopButton.onclick = stopSpeak;
    stopButton.textContent = "Parar";

    const pauseButton = document.createElement("button");
    pauseButton.onclick = pause;
    pauseButton.textContent = "Pausar";

    const resumeButton = document.createElement("button");
    resumeButton.onclick = resume;
    resumeButton.textContent = "Retomar";

    buttonDiv.appendChild(playButton);
    buttonDiv.appendChild(stopButton);
    buttonDiv.appendChild(pauseButton);
    buttonDiv.appendChild(resumeButton);

    readerDiv.appendChild(p);
    readerDiv.appendChild(buttonDiv);
    const container = document.getElementById("container");
    container.appendChild(readerDiv);
}

// Llamamos a la función para crear la UI del lector
createReaderUI();
