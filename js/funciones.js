inicio();
function inicio() {
    precarga();
    eventos();
    MostrarInterfazDeslogueado();
}
//Datos de Precarga
function precarga() {
    let p1 = AltaPersona("Juan", "juan1", "contraJuan123");
    let p2 = AltaPersona("Maria", "mariaR1", "Maria247");
    let p3 = AltaPersona("Pepe", "pepe45", "pepeElMejor12");
    let p4 = AltaPersona("Alejandro", "ale77", "Alej4ndr00");
    let p5 = AltaPersona("Juana", "Juanita24", "Ju24ani");
    let p6 = AltaPersona("Luana", "Lu2001", "Lu2001ana");
    let p7 = AltaPersona("Santiago", "santiAgo09", "santiX0909");
    let p8 = AltaPersona("Joaquin", "joak0", "Joak02745");
    let p9 = AltaPersona("Pablo", "pabliX", "Pablito012");
    let p10 = AltaPersona("Melisa", "meli12", "melisa420");




    let l1 = AltaLocal("Restaurante Frances", "restoFR25", "francesResto123", "Restaurante", "Av. Uruguay 1584", 20, "restaurantefrances.jpg")
    let l2 = AltaLocal("Museo de Dinosaurios", "Dino11", "Mdino1155", "Museo", "Rambla de Montevideo", 15, "dinosaurios.jpg")
    let l3 = AltaLocal("Teatro Montevideano", "TTRmvdeo01", "TeA010101", "Teatro", "Plaza de la independencia, Montevideo", 30, "teatro.jpg")
    let l4 = AltaLocal("Museo Monumental", "MuseoMN05", "MonumentosCarrasco5", "Museo", "Carrasco", 20, "monumentos.jpg")
    let l5 = AltaLocal("Buffet Milanga", "BftMila7", "milanesA77", "Restaurante", "Rambla de Ciudad de la costa", 10, "restorambla.jpg")
    let l6 = AltaLocal("Resto El Murciano", "RestoM22", "Murcia2002", "Restaurante", "Atlantida, Canelones", 25, "murcia.jpg")
    let l7 = AltaLocal("Teatro el Garage", "TeatroGRG99", "Ttrgarage9928", "Teatro", "Av Italia, Montevideo", 35, "teatro2.jpg")


    let r1 = AltaReservas(p1, l2, 10);
    r1.Estado = "Pendiente"
    let r2 = AltaReservas(p2, l1, 6);
    r2.Estado = "Pendiente"
    let r3 = AltaReservas(p3, l5, 2);
    r3.Estado = "Pendiente"
    let r4 = AltaReservas(p2, l3, 10);
    r4.Estado = "Finalizada"
    let r5 = AltaReservas(p4, l4, 6);
    r5.Estado = "Finalizada"
    let r6 = AltaReservas(p1, l7, 2);
    r6.Estado = "Finalizada"
    let r7 = AltaReservas(p7, l6, 2);
    r7.Estado = "Pendiente"
}
//Eventos de Click
function eventos() {
    document.querySelector("#btnRegistrar").addEventListener('click', tdRegistrar)
    document.querySelector("#btnLogin").addEventListener('click', tdLogin);
    document.querySelector("#btnMostrarRegistro").addEventListener('click', MostrarFormRegistro);
    document.querySelector("#btnMostrarLogin").addEventListener('click', MostrarFormLogin);
    document.querySelector("#btnMostrarLogout").addEventListener('click', MostrarFormLogout);
    document.querySelector("#btnVerLocales").addEventListener('click', MostrarListaLocales);
    document.querySelector("#btnVerReservas").addEventListener('click', MostrarListaReservas);
    document.querySelector("#txtBuscarLocal").addEventListener('keydown', tdBuscador);
}


//Cambio de Interfaz para Loguearse
function MostrarFormLogin() {

    document.querySelector("#divRegistro").style.display = "none";
    document.querySelector("#divLogin").style.display = "block";

}

//Cambio de Interfaz para Registrarse
function MostrarFormRegistro() {

    document.querySelector("#divRegistro").style.display = "block";
    document.querySelector("#divLogin").style.display = "none";

}
//Cambio de Interfaz cuando pulsamos Logout
function MostrarFormLogout() {
   
    let objUsuarioDeslogueado = document.querySelectorAll(".deslogueado");
    for (let o of objUsuarioDeslogueado) {
        o.style.display = "block";
    }
    let objUsuariologueado = document.querySelectorAll(".logueado");
    for (let o of objUsuariologueado) {
        o.style.display = "none";
    }
    let objUsuariologueadoLocal = document.querySelectorAll(".logueadoLocal");
    for (let o of objUsuariologueadoLocal) {
        o.style.display = "none";
    }
    LimpiarCamposDeTexto()
}


function MostrarInterfazDeslogueado() {
    let objUsuarioDeslogueado = document.querySelectorAll(".deslogueado");
    for (let o of objUsuarioDeslogueado) {
        o.style.display = "block";
    }
    let objUsuariologueado = document.querySelectorAll(".logueado");
    for (let o of objUsuariologueado) {
        o.style.display = "none";
    }
    let objUsuariologueadoAd = document.querySelectorAll(".logueadoLocal");
    for (let o of objUsuariologueadoAd) {
        o.style.display = "none";
    }
    document.querySelector("#divRegistro").style.display = "none";
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#btnMostrarLogout").style.display = "none";
    LimpiarCamposDeTexto()
    MostrarLocales(locales)
    
}
//Se toman los datos para el buscador de reservas
function tdBuscador(){
    let filtro = document.querySelector("#txtBuscarLocal").value;
    let listaFiltrada = buscarReservasContengan(filtro);
    MostrarListaFiltrada(listaFiltrada);
}
//Se toman datos para hacer el registro
function tdRegistrar() {
    let usernamePersona = document.querySelector("#txtUsernamePersona").value
    let nombrePersona = document.querySelector("#txtNombrePersona").value
    let contraPersona = document.querySelector("#txtContraseñaPersona").value

    let r = AltaPersona(nombrePersona, usernamePersona, contraPersona);
    if (r != null) {
        document.querySelector("#pRegistro").innerHTML = "Registro correcto.";
    } else {
        document.querySelector("#pRegistro").innerHTML = "Error de datos.";
    }
}




//Se toman datos para loguearse
function tdLogin() {
    let usernameP = document.querySelector("#txtLoginUsername").value
    let contraP = document.querySelector("#txtLoginContraseña").value

    let v = existeUsuarioYContra(usernameP, contraP);

    if (v != null) {
        usuarioLogueado = v;
        if (v.Rol == "persona") {
            MostrarInterfazCliente();
        } else {
            MostrarInterfazLocal();
        }

        document.querySelector("#pLogin").innerHTML = "logueado";
        

    } else {
        document.querySelector("#pLogin").innerHTML = "Error en los datos";
    }
}
//Se le pasa la palabra escrita en el buscador como parametro a la funcion, y se hace el procedimiento para encontrar la reserva
function buscarReservasContengan(unaPalabra){
    let busqueda = new Array();
    for (let reserva of reservas) {
        if(reserva.Estado=="Pendiente"){
            if (reserva.Persona.Nombre.toLowerCase().indexOf(unaPalabra.toLowerCase()) != -1) {
            busqueda.push(reserva);
        }
        }
        
        
    }
    return busqueda;
}


//tabla que muestra los locales para el perfil Local
function MostrarListaLocales() {

    let tabla = `<table><tr><td> Nombre  </td><td>Tipo   </td><td>Cupos   </td><td> Estado  </td><td>   </td></tr>`

    for (let l of locales) {

        tabla += `<tr><tr><td> ${l.Nombre}  </td><td> ${l.Tipo}   </td><td>${l.LimiteCupos}    </td><td>${l.Estado}    </td><td><img src="img/${l.Imagen}"></td><td><input type="button" value="Cambiar estado"  class="cambiarEstado" id="btn${l.Id}"  >  </td></tr>`

    }
    tabla += "</table>"


    document.querySelector("#tablaLocales").innerHTML = tabla;

    let todosLosBotones = document.querySelectorAll(".cambiarEstado");
    for(let b of todosLosBotones){
        b.addEventListener('click',cambiarEstadoLocal);
    }
}
//funcion para el boton que cambia el estado del local
function cambiarEstadoLocal () {

    let idTocado = this.getAttribute('id');
    idTocado = idTocado.substring(3);
    for(let l of locales){
        if(l.Id == idTocado){

            if(l.Estado=="habilitado"){
                l.Estado = "deshabilitado"; 
            }else{
                l.Estado = "habilitado"; 
            }
           
        }
    }
    MostrarListaLocales();


  }
  //tabla que muestra la lista de reservas
  function MostrarListaReservas() {

    let tabla = `<table><tr><td> Nombre  </td><td>Local   </td><td>Cupos Reservados  </td><td> Estado  </td><td>   </td></tr>`

    for (let r of reservas) {

        tabla += `<tr><td> ${r.Persona.Nombre}  </td><td> ${r.Local.Nombre}   </td><td>${r.CantidadPersonas}    </td><td>${r.Estado}    </td><td><input type="button" value="Cambiar estado"  class="cambiarEstado" id="btn${r.Id}"  >  </td></tr>`

    }
    tabla += "</table>"


    document.querySelector("#tablaReservas").innerHTML = tabla;

    let todosLosBotones = document.querySelectorAll(".cambiarEstado");
    for(let b of todosLosBotones){
        b.addEventListener('click',cambiarEstadoReserva);
    }
    
}

//tabla ya filtrada que muestra la lista de reservas buscadas(en el buscador)
function MostrarListaFiltrada(listaFiltrada) {
let tabla = `Mostrando reservas pendientes`
     tabla += `<table><tr><td> Nombre  </td><td>Local   </td><td>Cupos Reservados  </td><td> Estado  </td><td>   </td></tr>`

    for (let r of listaFiltrada) {

        tabla += `<tr><td> ${r.Persona.Nombre}  </td><td> ${r.Local.Nombre}   </td><td>${r.CantidadPersonas}    </td><td>${r.Estado}    </td><td><input type="button" value="Cambiar estado"  class="cambiarEstado" id="btn${r.Id}"  >  </td></tr>`

    }
    tabla += "</table>"

    if(listaFiltrada.length == 0){
        tabla = "No hay coincidencias"
    }
    document.querySelector("#tablaReservas").innerHTML = tabla;

    let todosLosBotones = document.querySelectorAll(".cambiarEstado");
    for(let b of todosLosBotones){
        b.addEventListener('click',cambiarEstadoReserva);
    }
    
}



//funcion para el boton que cambia el estado de la reserva
function cambiarEstadoReserva () {

    let idTocado = this.getAttribute('id');
    idTocado = idTocado.substring(3);
    for(let r of reservas){
        if(r.Id == idTocado){

            if(r.Estado=="Pendiente"){
                r.Estado = "Finalizada"; 
            }else{
                r.Estado = "Pendiente"; 
            }
           
        }
    }
    MostrarListaReservas(reservas);


  }




function MostrarInterfazCliente() {
    let objUsuarioDeslogueado = document.querySelectorAll(".deslogueado");
    for (let o of objUsuarioDeslogueado) {
        o.style.display = "none";
    }
    let objUsuariologueado = document.querySelectorAll(".logueado");
    for (let o of objUsuariologueado) {
        o.style.display = "block";
    }
    MostrarLocales(locales);
}

function MostrarInterfazLocal() {
    let objUsuarioDeslogueado = document.querySelectorAll(".deslogueado");
    for (let o of objUsuarioDeslogueado) {
        o.style.display = "none";
    }
    let objUsuariologueado = document.querySelectorAll(".logueadoLocal");
    for (let o of objUsuariologueado) {
        o.style.display = "block";
    }
    MostrarLocales(locales);
}





//funcion que muestra el listado de locales para el perfil Persona
function MostrarLocales(arrayLocales) {
    let cadena = "";
    for (let local of arrayLocales) 
    if(local.Estado == "habilitado"){
        cadena += `<div>
            <h2>${local.Nombre} - ${local.Direccion}</h2>
            <img src="img/${local.Imagen}">
            <p>${local.Tipo} - Cupo Maximo de reserva: ${local.LimiteCupos}</p>
            <input type="number" class="txtReservar" id="txtR${local.Id}">
            <input type="button" class="btnReservar" id="btn${local.Id}" value="Reservar"><br>
           
            </div><div id="resReserva${local.Id}"></div>`
            ;
    }
    document.querySelector("#muro").innerHTML = cadena;

    let todosLosBotones = document.querySelectorAll(".btnReservar");
    for (let boton of todosLosBotones) {
        boton.addEventListener('click', tdReserva);
    }
    
}



//se toman los datos para la reserva
function tdReserva() {
    let idTocado = this.getAttribute("id");
    let idsolo = idTocado.substring(3);
    let numeroDeCupos = Number(document.querySelector("#txtR" + idsolo).value);
    
    let resultado = AltaReservas(usuarioLogueado, buscarLocal(idsolo), numeroDeCupos);
    if (resultado != null) {
MostrarLocales(locales)
        document.querySelector(`#resReserva${idsolo}`).innerHTML = "Reserva realizada con éxito";
        document.querySelector("#btn" + idsolo).disabled=true
    } else {
        document.querySelector("#resReserva" + idsolo).innerHTML = "No se pudo Reservar";
    }


}
//se busca el local por su id (recibido por parametros)
function buscarLocal(id) {

    for (let local of locales) {
        if (local.Id == id) {
            return local;
        }
    }
    return null;
}

//funcion que valida si existe el usuario y la contraseña en los array de personas o locales
function existeUsuarioYContra(u, c) {
    let ret = null;
    let encontrado = false;
    for (let p of personas)
        if (!encontrado) {
            if (p.Username == u && p.Contraseña == c) {
                ret = p;
                encontrado = true;
            }
        }
    for (let l of locales)
        if (!encontrado) {
            if (l.Username == u && l.Contraseña == c) {
                ret = l;
            }
        }
    return ret;

}
//esta funcion da de alta el local como su nombre indica, verifica que todas las validaciones sean correctas y si estas lo son, da de alta el local
function AltaLocal(unNombre, unUsername, unaContraseña, unTipo, unaDireccion, unLimiteCupos, unaImagen) {
    unLimiteCupos = Number(unLimiteCupos);
    let resultado = null
    if (unNombre != "" && !ExisteUsuario(unUsername) && validarContraseña(unaContraseña) && CumpleTipo(unTipo)) {
        let nuevoLocal = new Local(unNombre, unUsername, unaContraseña, unTipo, unaDireccion, unLimiteCupos, unaImagen)
        locales.push(nuevoLocal);
        resultado = nuevoLocal;

    }

    return resultado;
}


function CumpleTipo(unT) {
    let retorno = false
    if (unT == "Restaurante" || unT == "Museo" || unT == "Teatro") {
        retorno = true
    }
    return retorno
}

//funcion que verifica que las validaciones sean correctas/validas , y si lo son , se da de alta la reserva
function AltaReservas(unaPersona, unLocal, unaCantidadPersonas) {
    let resultado = null
    let limiteCupos = unLocal.LimiteCupos
    if (unaCantidadPersonas > 0 && unLocal.LimiteCupos >= unaCantidadPersonas) {
        unLocal.LimiteCupos -= unaCantidadPersonas

        let nuevaReserva = new Reserva(unaPersona, unLocal, unaCantidadPersonas);
        reservas.push(nuevaReserva);
        resultado = nuevaReserva

    }
    if (limiteCupos <=0) {
        
    
    }
    if (unaCantidadPersonas > limiteCupos) {
        
        resultado = null
    }
    return resultado;
}



//se validan los datos para dar de alta un perfil persona
function AltaPersona(unNombre, unUsername, unaContraseña) {

    validarNombre(unNombre);
    ExisteUsuario(unUsername);
    validarContraseña(unaContraseña);

    if (validarNombre(unNombre) && !ExisteUsuario(unUsername) && !ExisteUsuario(unUsername) && validarContraseña(unaContraseña)) {
        let p = new Persona(unNombre, unUsername, unaContraseña)
        personas.push(p);
        return p
    } else {
        return null
    }

}

//validacion de contraseña
function validarContraseña(unaContraseña) {
    let r = null
    let contadorMayus = 0
    let contadorMinus = 0
    let contadorNum = 0
    let resultado = false
    for (let i = 0; i < unaContraseña.length; i++) {
        if (unaContraseña.length >= 6) {
            r = true
        }
        if (unaContraseña.charCodeAt(i) >= 65 && unaContraseña.charCodeAt(i) <= 90) {
            contadorMayus++;

        }
        if (unaContraseña.charCodeAt(i) >= 97 && unaContraseña.charCodeAt(i) <= 122) {
            contadorMinus++;

        }
        if (unaContraseña.charCodeAt(i) >= 48 && unaContraseña.charCodeAt(i) <= 57) {
            contadorNum++;

        }
    }
    if (r != null && contadorMayus >= 1 && contadorMinus >= 1 && contadorNum >= 1) {
        resultado = true
    }
    return resultado;

}
function validarNombre(unNombre) {
    let r = null
    if (unNombre != "" && unNombre!=-1) {
        r = true;
    }
    return r
}
//se recorre el array de personas para verificar que el username no exista anteriormente
function ExisteUsuario(unUsername) {

    if (unUsername != "") {
        for (let p of personas) {
            if (p.Username == unUsername) {
                return true;
            }
        }

        for (let l of locales) {
            if (l.Username == unUsername) {
                return true
            }
        }
    }
    return false
}

function LimpiarCamposDeTexto() {
    let inputs = document.querySelectorAll("input[type=text]");
    for (input of inputs) {
        input.value = "";
    }
    let passwords = document.querySelectorAll("input[type=password]");
    for (input2 of passwords) {
        input2.value = "";
    }

    let parrafos = document.querySelectorAll("p");
    for (input3 of parrafos) {
        input3.value = "";
    }


}