
function arts(x) {
    for (let index = 1; index <= x; index++) {
        let x = document.getElementById("art")
        x.setAttribute("id", "art" + index)
    }
}

function defaultOp() {
    var x = document.getElementById('txt');
    x.addEventListener('input', function () {
        document.getElementById("myBtn").innerHTML = "Buscar Art. " + x.value
    });
    x.addEventListener('input', function () {
        document.getElementById("myBtn").setAttribute("href", "#art" + x.value)
    });    
}



