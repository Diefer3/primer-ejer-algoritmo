//pedimnos al usuario que coloque el precio de la prenda//
let precio = parseFloat(prompt('ingrese el precio de la prenda;'));

// solicitar al usuario el porcentaje de descuento//
let porcentajedescuento = parseFloat(prompt('ingrese el porcentaje del descuento;'))

// calcular el monto del descuento//
let descuento = (precio*porcentajedescuento)/ 100;

// calcular el precio final//
let preciofinal = precio-descuento;

// mostrar el resultado en pagina//
document.write("<h1>precio original: $"+ precio.toFixed(2)+ "<h1>");
document.write("<h1>descuento aplicado: $"+ descuento.toFixed(2) +"("+ porcentajedescuento + " %)</h1");
document.write("<h1>precio final"+ preciofinal.toFixed(2)+ "</h1");




