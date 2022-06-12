

class servicio {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

}

const servicios = [];  


    let servicio1 = new servicio (1, ' creacion y mantenimiento de pagina wed', 6.99);
    let servicio2 = new servicio(2, ' creacion y mantenimiento de redes sociales', 7.99);
    let servicio3 = new servicio(3, ' diseño grafico y marketing disital', 6.99);
    let servicio4 = new servicio(4, ' seo y posicionamiento en motores de busqueda', 6.99);

servicios.push(servicio1, servicio2, servicio3, servicio4);
  

console.log(servicios);
