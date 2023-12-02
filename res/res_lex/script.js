
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
    document.querySelector(a).className = "found"


}
