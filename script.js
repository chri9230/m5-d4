var tuttiLibri = []

fetch("https://striveschool-api.herokuapp.com/books").then(response => {
    return response.json()

})
.then(pippo => {
    tuttiLibri = pippo

    pippo.forEach(element => {
        
        var contenitore = ""
        contenitore += "<div>"
        
        contenitore += "<div><img src='" + element.img + "'</div>"
        contenitore += "<div>" + element.title + "</div>"

        contenitore += "</div>"

        
        
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
            contenitore += "<div>"
            
            contenitore += "<div><img src='" + element.img + "'</div>"
            contenitore += "<div>" + element.title + "</div>"
    
            contenitore += "</div>"

            

            
    
            var libri = document.querySelector('.libri')
            
            libri.innerHTML += contenitore
            
        }
    });
}
    /* QUA FINISCE LA FETCH COPIATA */
    
