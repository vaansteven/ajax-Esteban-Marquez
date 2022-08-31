const main = document.querySelector('.main')
let url = "https://630ea84f37925634187ff19d.mockapi.io/Eventos/api/:endpoint"


fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        let eventos = json

        eventos.forEach(evento => {
            const {name, image, precio} = evento
            
            main.innerHTML += `<article class="product">
                                    <div class="imagen">
                                        <img src="${image}" alt="${name}">
                                    </div>
                                    <div class="descripcion">
                                        <h3>${name}</h3>
                                        <p>${precio}</p>
                                        <div class="boton">Ver detalle</div>
                                        <input type='hidden' class='info-id' value="${name}"/>
                                    </div>
                                </article>`

        })
    })
    .catch((error) => console.log(error))