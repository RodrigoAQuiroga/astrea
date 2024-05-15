
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




