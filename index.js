let relojes = [
    { marca: 'Bulova', material: 'cuero', genero: 'masculino', nombre: 'Bulova Classic', img: '../img/bulovaClassic.jpg', precio: 123, id: 0 },
    { marca: 'Bulova', material: 'metal', genero: 'masculino', nombre: 'Bulova Sutton', img: '../img/bulovaCrono.jpg', precio: 3400, id: 1 },
    { marca: 'Bulova', material: 'metal', genero: 'femenino', nombre: 'Bulova Wittnauer', img: '../img/bulovaMother.jpg', precio: 73, id: 2 },
    { marca: 'Bulova', material: 'metal', genero: 'femenino', nombre: 'Bulova Rubaiyat', img: '../img/bulovaRubaiyat.jpg', precio: 765, id: 3 },
    { marca: 'Bulova', material: 'cuero', genero: 'masculino', nombre: 'Bulova Marine Star', img: '../img/bulovaSutton.jpg', precio: 234, id: 4 },
    { marca: 'Rolex', material: 'metal', genero: 'masculino', nombre: 'Rolex Submariner', img: '../img/rolexBlue.jpg', precio: 123, id: 5 },
    { marca: 'Rolex', material: 'metal', genero: 'masculino', nombre: 'Rolex Air-King', img: '../img/rolexAir-king.jpg', precio: 766, id: 6 },
    { marca: 'Rolex', material: 'metal', genero: 'masculino', nombre: 'Rolex Explorer II', img: '../img/rolexDatejust.jpg', precio: 234, id: 7 },
    { marca: 'Rolex', material: 'metal', genero: 'femenino', nombre: 'Rolex DateJust', img: '../img/rolexLady.jpg', precio: 99, id: 8 },
    { marca: 'Rolex', material: 'metal', genero: 'femenino', nombre: 'Rolex Diamond Gold', img: '../img/rolexLady2.jpg', precio: 110, id: 9 },
    { marca: 'Seiko', material: 'metal', genero: 'masculino', nombre: 'Seiko Classic', img: '../img/seikoClassic.jpg', precio: 454, id: 10 },
    { marca: 'Seiko', material: 'metal', genero: 'masculino', nombre: 'Seiko Cronograph', img: '../img/seikoCrono.jpg', precio: 1000, id: 11 },
    { marca: 'Seiko', material: 'metal', genero: 'masculino', nombre: 'Seiko Automatic Gold', img: '../img/seikoGold.jpg', precio: 1000, id: 12 },
    { marca: 'Seiko', material: 'metal', genero: 'masculino', nombre: 'Seiko Automatic Grey', img: '../img/seikoGrey.jpg', precio: 1000, id: 13 },
    { marca: 'Seiko', material: 'cuero', genero: 'masculino', nombre: 'Seiko Neo', img: '../img/seikoNeo.jpg', precio: 1000, id: 14 },
    { marca: 'Citizen', material: 'metal', genero: 'femenino', nombre: 'Citizen Corso', img: '../img/citizenAxiom.jpg', precio: 1000, id: 15 },
    { marca: 'Citizen', material: 'cuero', genero: 'femenino', nombre: 'Citizen Chandler', img: '../img/citizenChandler.jpg', precio: 1000, id: 16 },
    { marca: 'Citizen', material: 'metal', genero: 'masculino', nombre: 'Citizen Axiom', img: '../img/citizenCorso.jpg', precio: 1000, id: 17 },
    { marca: 'Citizen', material: 'cuero', genero: 'masculino', nombre: 'Citizen Eco Drive', img: '../img/citizenEco.jpg', precio: 1000, id: 18 },
    { marca: 'Citizen', material: 'cuero', genero: 'masculino', nombre: 'Citizen Black', img: '../img/citizenLeather.jpg', precio: 1000, id: 19 },

];










let filtros = { cuero: false, metal: false, masculino: false, femenino: false, bulova: false, citizen: false, rolex: false, seiko: false, menor: false, mayor: false };






function confirmacionCompra() {

    for (const producto of carrito) {
        $("#confirmacionCompra").append(`<div id="mensajeCompra" role="alert">
        <h4> Añadiste a tu carrito:</h4>
        <p>${producto.nombre}</p>
        </div>`);
    }
    $("#confirmacionCompra").show().delay(900);
    $("#confirmacionCompra").hide(700);
}




function cantidadDeProductos() {
    $("#cantidadProductos").html(" ");
    if (carrito.length > "0") {
        $("#cantidadProductos").append(`<div style= "background-color:#513946; border-radius:50%; height:25px; width:25px;display:flex; flex-direction:row; justify-content: center">
        <p style= "color:white" >${carrito.length}</p>
        </div>`);
    }
}












function mostrarProductos(filtro) {
    if (filtro == "cuero") {
        if (filtros.cuero == true) {
            filtros.cuero = false;
        } else {
            filtros.cuero = true;
        }
    } else if (filtro == "metal") {
        if (filtros.metal == true) {
            filtros.metal = false;
        } else {
            filtros.metal = true;
        }
    } else if (filtro == "masculino") {
        if (filtros.masculino == true) {
            filtros.masculino = false;
        } else {
            filtros.masculino = true;
        }
    } else if (filtro == "femenino") {
        if (filtros.femenino == true) {
            filtros.femenino = false;
        } else {
            filtros.femenino = true;
        }
    } else if (filtro == "bulova") {
        if (filtros.bulova == true) {
            filtros.bulova = false;
        } else {
            filtros.bulova = true;
        }
    } else if (filtro == "citizen") {
        if (filtros.citizen == true) {
            filtros.citizen = false;
        } else {
            filtros.citizen = true;
        }
    } else if (filtro == "rolex") {
        if (filtros.rolex == true) {
            filtros.rolex = false;
        } else {
            filtros.rolex = true;
        }
    } else if (filtro == "seiko") {
        if (filtros.seiko == true) {
            filtros.seiko = false;
        } else {
            filtros.seiko = true;
        }
    }



    function productosFiltrados(producto) {
        $("#seccionProductos").append(
            `<div class="col">
            <div class="card" style="width: 15rem;">
                <img src=${producto.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    
                    <div class="precio">
                        <a href="#" class="botonAgregarCarrito btn"
                            onclick="agregarCarrito({precio:${producto.precio}, marca:'${producto.marca}', material:'${producto.material}', genero:'${producto.genero}', nombre:'${producto.nombre}', img:'${producto.img}', id:'${producto.id}'});">Agregar</a>
                        <p>$${producto.precio}</p>
                    </div>

                </div>
            </div>
        </div>`);
    }




    /* Este filtro no depende de los otros por lo tanto se ejecuta siempre igual. De esta manera es mejor hacer una funcion y llamarla para no generar mas codigo */
    function ultimoFiltro(producto) {
        if ((filtros.bulova == false) && (filtros.citizen == false) && (filtros.rolex == false) && (filtros.seiko == false)) {
            productosFiltrados(producto);

        } else if ((producto.marca == "Bulova") && (filtros.bulova == true)) {
            productosFiltrados(producto);

        } else if ((producto.marca == "Citizen") && (filtros.citizen == true)) {
            productosFiltrados(producto);

        } else if ((producto.marca == "Rolex") && (filtros.rolex == true)) {
            productosFiltrados(producto);

        } else if ((producto.marca == "Seiko") && (filtros.seiko == true)) {
            productosFiltrados(producto);

        }
    }




    $("#seccionProductos").html(" ");
    for (const producto of relojes) {
        if (producto.material == "cuero") {
            if ((filtros.cuero == true) || (filtros.cuero == false && filtros.metal == false)) {
                if (producto.genero == "masculino") {
                    if ((filtros.masculino == true) || (filtros.masculino == false && filtros.femenino == false)) {
                        ultimoFiltro(producto);
                    }
                } else {
                    if ((filtros.femenino == true) || (filtros.femenino == false && filtros.masculino == false)) {
                        ultimoFiltro(producto);
                    }
                }
            }


        } else {
            if ((filtros.metal == true) || (filtros.cuero == false && filtros.metal == false)) {
                if (producto.genero == "masculino") {
                    if ((filtros.masculino == true) || (filtros.masculino == false && filtros.femenino == false)) {
                        ultimoFiltro(producto);
                    }
                } else {
                    if ((filtros.femenino == true) || (filtros.femenino == false && filtros.masculino == false)) {
                        ultimoFiltro(producto);
                    }
                }
            }
        }
    }
}











