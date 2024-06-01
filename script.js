var tuttiLibri = []

fetch("https://striveschool-api.herokuapp.com/books").then(response => {
    return response.json()

})
.then(pippo => {
    tuttiLibri = pippo

    pippo.forEach(element => {
        
         var contenitore = ""
        // contenitore += "<div>"
        
        // contenitore += "<div><img src='" + element.img + "'</div>"
        // contenitore += "<div>" + element.title + "</div>"

        // contenitore += "</div>"

        contenitore += 
        `
        <div class="myCard col-3">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">The price is: ${element.price} $</p>
            <a href="#" class="btn btn-primary">Add to Chart</a>
            </div>
        </div>
        `

        
        
        var libri = document.querySelector('.libri')
        
        libri.innerHTML += contenitore

        libri.classList.add('stile')
        

    });
})

function filtraLibri() {
    var libri = document.querySelector('.libri')
        
        libri.innerHTML = ""
    //console.log("pippo")
    var valoreRicerca = document.getElementById('ricerca').value
    valoreRicerca = valoreRicerca.toUpperCase()


    tuttiLibri.forEach(element => {

        var titoloUpperCase = element.title.toUpperCase()
        var include = titoloUpperCase.includes(valoreRicerca)
        if(include === true) {
            var contenitore = ""
            contenitore += 
        `
        <div class="myCard col-3">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">The price is: ${element.price} $</p>
            <a href="#" class="btn btn-primary">Add to Chart</a>
            </div>
        </div>
        `
            
    
            var libri = document.querySelector('.libri')
            
            libri.innerHTML += contenitore
            
        }
    });
}
    /* QUA FINISCE LA FETCH COPIATA */
    
