// Ejecutar: Armar lista
let arrOpcion = [];
let arr2 = [];

(() => {
  let tiempo = new Date();
  let semana = tiempo.getDay();
  if ((semana = 0)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/domingo.png'>";
  } else if ((semana = 1)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/lunes.png'>";
  } else if ((semana = 2)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/martes.png'>";
  } else if ((semana = 3)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/miercoles.png'>";
  } else if ((semana = 4)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/jueves.png'>";
  } else if ((semana = 5)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/viernes.png'>";
  } else {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/sabado.png'>";
  }
})();

let ListaDeCompras = () => {
  alert("Vamos a realizar una lista de compras");
  let term = "n";
  let agregar = null;
  while (term == "n") {
    agregar = prompt("Ingrese un producto");
    if (agregar != null) {
      arrOpcion.push(agregar);
    } else {
      alert("No siguió la consigna");
    }
    let contin = confirm("¿Desea agregar otro producto?");
    if (!contin) {
      term = "y";
      alert("La lista de compras es la siguiente: " + arrOpcion.join(",  "));
    }
  }
  document.getElementById(
    "lis"
  ).innerHTML = `Lista de compras: <li><p class="animacion1"> ${arrOpcion.join(
    '<li><p class="animacion1">'
  )}`;
  return arrOpcion;
};

// Ejecutar: Ingresar precios
let impList = () => {
  class Precio {
    constructor(producto, valor) {
      this.producto = producto;
      this.valor = parseFloat(valor);
    }
  }

  for (const arrOpcions of arrOpcion) {
    let valor = prompt(`Costo de: ${arrOpcions}`);
    arr2.push(new Precio(arrOpcions, valor));
  }
  let total = 0;
  arr2.forEach((p) => {
    total += p.valor;
  });
  alert(`Precio final: $ ${total}`);
  document.getElementById("tot").innerHTML = `Precio final: $ ${total}`;
};

let filtrarPres = () => {
  let faltante = prompt(
    "Ingrese un monto para filtrar los productos que sean iguales o superiores a ese valor"
  );
  let resultado = arr2.filter((el) => el.valor >= faltante);

  alert(JSON.stringify(resultado));
};
