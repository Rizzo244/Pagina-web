let ultimoIdPersona = 1
let ultimoIdLocal = 1
let ultimoIdReserva = 1

let usuarioLogueado = null;

let personas = new Array();
let locales = new Array();
let reservas = new Array();


class Persona{
    constructor(unNombre,unUsername,unaContraseña){
        this.Id = ultimoIdPersona;
        ultimoIdPersona ++;
        this.Nombre = unNombre;
        this.Username = unUsername;
        this.Contraseña = unaContraseña;
        this.Rol = "persona"
    }
}

class Local{
    constructor(unNombre,unUsername,unaContraseña, unTipo, unaDireccion, unLimiteCupos, unaImagen){
        this.Id = ultimoIdLocal;
        ultimoIdLocal ++;
        this.Nombre = unNombre;
        this.Username = unUsername;
        this.Contraseña = unaContraseña;
        this.Tipo = unTipo;
        this.Direccion = unaDireccion;
        this.LimiteCupos = unLimiteCupos;
        this.Imagen= unaImagen;
        this.Estado= "habilitado";
        this.Rol = "local"
    }
}

class Reserva{
    constructor(unaPersona, unLocal, unaCantidadPersonas){
        this.Id = ultimoIdReserva;
        ultimoIdReserva ++;
        this.Persona = unaPersona;
        this.Local = unLocal;
        this.CantidadPersonas = unaCantidadPersonas;
        this.Estado = "Pendiente";
        this.Calificacion = null
    }
}


