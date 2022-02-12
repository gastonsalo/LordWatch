
function enviarDatos() {
    let nom = document.getElementById("nombre").value;
    let apel = document.getElementById("apellido").value;
    let correo = document.getElementById("email").value;
    let domicilio = document.getElementById("direccion").value;

    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", apel);
    localStorage.setItem("Email", correo);
    localStorage.setItem("Direccion", domicilio);


}
let nombre = localStorage.getItem("Nombre");
let apellido = localStorage.getItem("Apellido");
document.getElementById("listadoCarrito").innerHTML = "hola! " + nombre + " " + apellido + " Tu carrito está vacío";
