let carrito = [];

function mostrarTotal() {
    let sumaTotal = 0;

    for (const producto of carrito) {
        sumaTotal += parseFloat(producto.precio);

    }
    $("#totalProductos").html(" ");
    $("#totalProductos").append(`<div class="col-2 "></div>
    <div  class=" col-6 text-center "><h5 > Total de su Compra </h5></div>
    <div  class="col-2"></div>
    <div  class=" col-2  text-end "><h6>$ ${sumaTotal}</h6></div>`);
}


function agregarCarrito(productoQueAgrego) {
    carrito.push(productoQueAgrego);
    confirmacionCompra();
    mostrarCarrito();
    mostrarTotal();

}

function cuandoHayProductos(){
    if(carrito.length==0){
        $("#botonPagar").html(" ");
    }else if(carrito.length>0) {
        $("#botonPagar").append(`<a href="./pagarCarrito.html" class="botonCarrito"><button type="button"  class="btn btn-primary" >Pagar Carrito</button></a>`);
    }
}

function mostrarCarrito() {
    $("#listadoCarrito").html(" ");
    $("#listaCompras").html(" ");
    $("#botonPagar").html(" ");
    cantidadDeProductos();
    cuandoHayProductos();
    
    for (const producto of carrito) {
        $("#listaCompras").append(`<div id="cajaListaCompras" class="row align-items-center justify-content-center">

        <div id="columnaImg" class="col-2 columnaImg text-start ">
        <img src=${producto.img} style=width:80%>
        </div>

        <div id="columnaProductos" class=" col-6 columnaProductos text-center ">
        <h6 > ${producto.nombre} </h6>
        </div>

        <div id="columnaCantidad" class=" col-2 columnaCantidad text-center ">
        <button type="button" id= "botonBorrar" class=" boton" onclick="borrarProducto(${producto.id})">-</button>

        <button type="button" class=" boton" onclick="agregarCarrito({precio:${producto.precio}, marca:'${producto.marca}', material:'${producto.material}', genero:'${producto.genero}', nombre:'${producto.nombre}', img:'${producto.img}', id:'${producto.id}'})">+</button>

        </div>

        <div id="columnaPrecio" class=" col-2 columnaPrecio text-end ">
        <p>$ ${producto.precio}</p>
        
        </div>
        </div>`);



    }
    if(carrito==""){
        document.getElementById("listadoCarrito").innerHTML = "hola! " + nombre + " " + apellido + " Tu carrito está vacío";
    }

}

let productoABorrar = 0;

function borrarProducto(productoQueQuieroBorrar) {
    productoABorrar = productoQueQuieroBorrar;
    for (const producto of carrito) {
        if (productoABorrar == producto.id) {
            carrito.splice(carrito.indexOf(producto), 1);
            console.log(carrito);
            mostrarCarrito();
            mostrarTotal();
            break;
        }
    }

}

