let nombre = prompt("Ingrese el nombre de su empresa");

let servicio1 = "creacion y mantenimiento de pagina web"
    servicio2 = "creaccion y mantenimiento de cuentas y redes sociales"
    servicio3 = "diseño grafico y marketing digital"
    servicio4 = "SEO y posicionamiento en motrores de busqueda "



let precio1 = 6.99
    precio2 = 7.99
    precio3 = 8.99
    precio4 = 9.99

let servicio = prompt(`
    Digite el numero de servicio que desea comprar:
    1. ${servicio1}
    2. ${servicio2}
    3. ${servicio3}
    4. ${servicio4}`);


switch (servicio) {
        case "1":
         alert(`${nombre}, elegiste  ${servicio1} y su precio es de ${precio1} dolares`);
        break;
        case "2":
         alert(`${nombre}, elegiste  ${servicio2} y su precio es de ${precio2} dolares`);
        break;
        case "3":
         alert(`${nombre}, elegiste  ${servicio3} y su precio es de ${precio3} dolares`);
        break;
        case "4":
         alert(`${nombre}, elegiste  ${servicio4} y su precio es de ${precio4} dolares`);
        break;
        default:
        alert("Ese servicio no esta disponible");
        }


const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precio = parseInt(prompt("Ingrese el monto a pagar en pesos argentinos"));




let metodo1 = "Visa/Master"
    metodo2 = "mercadopago"
    metodo3 = "efectivo"

let Pago = prompt(`
    Digite el metodo de pago:
    1. ${metodo1}
    2. ${metodo2}
    3. ${metodo3}`);

let nuevoprecio = (suma(precio, iva (precio)));
alert("su monto a pagar es" + nuevoprecio);



