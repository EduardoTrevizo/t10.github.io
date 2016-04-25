'use strict';

var color = true;
var total = 0;

function agregar(prod, pre)
{
    // Obtener los elementos input y el tbody de la tabla
    var tbody = document.getElementById('container');
    var producto = document.getElementById(prod);
    var precio = document.getElementById(pre);
    var totalElem = document.getElementById('total');

    // Crear una nueva fila y un nuevo botón
    var nuevaFila = document.createElement('tr');
    var boton = document.createElement('button');

    // Asignar al boton una accion cuando onclick se dispare
    boton.onclick = function (event) {
        total -= parseFloat(this.parentElement.parentElement.childNodes[1].innerHTML).toFixed(2);
        // Eliminar del tbody la fila donde se encuentra el boton
        tbody.removeChild(this.parentElement.parentElement);
        // Actualizar el total
        if(tbody.childElementCount < 1)
            total = 0;
        totalElem.innerHTML = '$ '+total.toFixed(2);
    }
    boton.innerHTML = 'x'; // Texto del botón

    // Intercalar colores amarillo y blanco
    nuevaFila.style.backgroundColor = color? 'yellow' : 'white';
    // Asignar a nueva fila las celdas y los valores que debe llevar el producto
    nuevaFila.innerHTML = '<td>' + producto.value + '</td>' + '<td>' + parseFloat(precio.value).toFixed(2) + '</td><td></td>';
    nuevaFila.lastChild.appendChild(boton);

    // Agregar el producto a la tabla
    tbody.appendChild(nuevaFila);
    // Actualizar el total con el nuevo valor
    total += parseFloat(precio.value.toString());
    totalElem.innerHTML = '$ '+total.toFixed(2);
    // Realizar el cambio de color
    color = !color;
}
