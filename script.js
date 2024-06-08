var tuttiLibri = []
var carrello = []
var prezzoTotale = 0

fetch("https://striveschool-api.herokuapp.com/books").then(response => {
    response.json().then(data => {
        tuttiLibri = data

        data.forEach(element => {

            var contenitore = ""

            contenitore +=
                `
        <div id='${element.asin}' class="myCard col-3">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">The price is: ${element.price} $</p>
            <a href="#" class="btn btn-primary" 
            onclick="addCart('${element.title}, ${element.price} €')">
            Add to Chart</a>
            <a href="./dettagli.html?asin=${element.asin}&asin=${element.asin}" class="btn btn-primary">
            More info</a>
            <a href="#" class="btn btn-primary" onclick="nascondi('${element.asin}')">Hide</a>
            </div>
            </div>
        </div>
        `
            

            var libri = document.querySelector('.libri')

            libri.innerHTML += contenitore

           

        })

    });
})

function nascondi(asin) {
    console.log(asin)
    document.getElementById(asin).style.display = "none"
}

function svuotaCarrello() {
    carrello = []
    let contatore = document.getElementById("contatoreCarrello")
    contatore.textContent = "(" + carrello.length + ")"
    let ulCarrello = document.getElementById("listaCarrello")
    ulCarrello.innerHTML = ""
}





function filtraLibri() {
    var libri = document.querySelector('.libri')

    libri.innerHTML = ""

    var valoreRicerca = document.getElementById('ricerca').value
    valoreRicerca = valoreRicerca.toUpperCase()


    tuttiLibri.forEach(element => {

        var titoloUpperCase = element.title.toUpperCase()
        var include = titoloUpperCase.includes(valoreRicerca)
        if (include === true) {
            var contenitore = ""
            contenitore +=
                `
            <div class="myCard col-3">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">The price is: ${element.price} $</p>
                <a href="#" class="btn btn-primary" onclick="addCart()">Add to Chart</a>
                
            </div>
            `



            var libri = document.querySelector('.libri')

            libri.innerHTML += contenitore

        }
    });
}

function addCart(libro) {
    
    let sezioneCarrello = document.getElementById("listaCarrello")
    let newLi = document.createElement("li")
    newLi.innerHTML = libro
    sezioneCarrello.appendChild(newLi)


    // console.log(newLi)



    // carrello.push(libro)
    // console.log(libro.price)

    // prezzoTotale += libro.price

    // let contatore = document.getElementById("contatoreCarrello")
    // contatore.textContent = "(" + carrello.length + ")" 

}


