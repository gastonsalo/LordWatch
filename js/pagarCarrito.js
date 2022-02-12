


function pagarCarrito(){
  let nombreTarjeta = document.getElementById("nombreTarjeta").value;
  let nroTarjeta = document.getElementById("nroTarjeta").value;
  let vencimientoTarjeta = document.getElementById("vencimientoTarjeta").value;
  let codigo = document.getElementById("codigo").value;
  
if((nombreTarjeta=="")||(nroTarjeta=="")||(vencimientoTarjeta=="")||(codigo=="")){
  $("#finalizacionCompra").html(" ");
  $("#finalizacionCompra").append(`<div class="row">
  <h1 class="col-12 text-center mb-5">Finalice su compra</h1>
  <div id="productosComprados" class="col-6"><img src="../img/logo.png" alt=""></div>
  <div id="datosComprador " class="col-6">
      <div class="datosUsuario gap-2">
          <form action="datos" >
              <input id="nroTarjeta" class=" col-12 p-2 " type="text" name="nroTarjeta" 
              placeholder="Ingrese Numero de su tarjeta">


              <input id="nombreTarjeta" class=" col-12 p-2 " type="text" name="NombreTarjeta" placeholder="Nombre tal cual figura en su tarjeta">


              <input class="col-12 p-2 " type="text" name="vencimiento" id="vencimientoTarjeta" placeholder="Vencimiento (mm-aa)">

              <input class=" col-12 p-2 " type="text" name="codigo" id="codigo" placeholder="Codigo de Seguridad">

              <div class="container d-flex justify-content-center">

                  <button type="button" class="botonPagar col-6 mt-4" onclick="pagarCarrito()">Pagar</button>
              </div>
          </form>
          


          <h4 class="noCompleto col-12 mt-4">Debe completar los datos solicitados</div>

      </div>
  </div>

</div>`);
}else{
  $("#finalizacionCompra").html(" ");
  $("#finalizacionCompra").append(`<div class="compraConfirmada col-12 text-center mt-5 pt-5 mb-2">
  <img src="../img/compraConfirmada.png">
</div>
<div class="container d-flex justify-content-center mt-5" style="background-color:#513946"><a href="./main.html"><button class="botonPagar">Volver al sitio </button></a></div>`)
}

}



