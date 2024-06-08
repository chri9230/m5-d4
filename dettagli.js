document.addEventListener("DOMContentLoaded", async () => {
    console.log("pagina caricata")
    const params = new URLSearchParams(location.search)
    console.log(params)
    let asin = params.get("asin")
    console.log(asin)

    fetch("https://striveschool-api.herokuapp.com/books/" + asin).then(response => {
        response.json().then(data => {
            console.log(data.price)
            let contenitore = ''

            contenitore += 
            `
            <div class="myCard col-3">
                <img src="${data.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">The price is: ${data.price} $</p>
    
                </div>
            </div>
            `

            document.getElementById('schedaLibro').innerHTML += contenitore
            
            //scheda.innerHTML += contenitore

        })
    })
})