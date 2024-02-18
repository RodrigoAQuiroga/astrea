
function arts(x) {
    for (let index = 1; index <= x; index++) {
        let x = document.getElementById("art")
        x.setAttribute("id", "art" + index)
    }
}

function defaultOp() {
    var x = document.getElementById("searcher");
    x.addEventListener('input', function () {
        document.getElementById("spn").innerHTML = "Buscar Art. " + x.value
    });
    x.addEventListener('input', function () {
        document.getElementById("spn").setAttribute("href", "#art" + x.value)
    });


}


function mySearcher() {
    var x = document.getElementById("searcher");
    var a = "#art" + x.value

    console.log(a)
    document.querySelector(a).scrollIntoView();
    document.querySelector(a).className = "found";

}

function createMenu() {
    /* <div id="menu">
        <a href="../index.html">Inicio</a>
        <a class="top" href="#inicio">Subir</a>
    </div>
    */
    let menu = document.querySelector("body");
    let divMenu = document.createElement("div");
    divMenu.setAttribute("id", "menu");
    divMenu.innerHTML = `<a href="../index.html">Inicio</a>
    <a class="top" href="#inicio">Subir</a>
    <span>Lector:</span>
    <button onclick="play()">⏵</button>
    <button onclick="stopSpeak()">⏹</button>
    <button onclick="pause()">⏸</button>
    <button onclick="resume()">⏯</button>
    `;

    menu.appendChild(divMenu);

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




