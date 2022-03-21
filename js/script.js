// AUTOEJECUTABLE, FOTO QUE CAMBIA SEGÚN EL DÍA DE LA SEMANA
(() => {
  let tiempo = new Date();
  let semana = tiempo.getDay();
  if ((semana == 0)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/domingo.png'>";
  } else if ((semana == 1)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/lunes.png'>";
  } else if ((semana == 2)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/martes.png'>";
  } else if ((semana == 3)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/miercoles.png'>";
  } else if ((semana == 4)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/jueves.png'>";
  } else if ((semana == 5)) {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/viernes.png'>";
  } else {
    document.getElementById("ofert").innerHTML =
      "<img src='./assets/sabado.png'>";
  }
})();


// DESDE ACA ESTA POR FUERA DE FUNCIONES


const elementosAlmacenados = localStorage.getItem("elementos");

let elementos = [];


if (elementosAlmacenados) {
  elementos = JSON.parse(elementosAlmacenados);
};



mostrarElementos();

// HASTA ACA ESTA POR FUERA DE FUNCIONES

// AGREGAR ITEM FUNCION
function agregarItem () {
  const inputRef = document.getElementById("input");
  const valor = inputRef.value;

  

        // validación

if (valor.trim()){
  elementos.push(valor);
  inputRef.value = "";
  localStorage.setItem("elementos", JSON.stringify(elementos));
  tablita();
  mostrarElementos();
}
else {
  alert("Ingresa un producto");
};
};

// MOSTRAR ELEMENTOS FUNCION

function mostrarElementos(){
  const contenedor = document.getElementById("elementos");
  contenedor.innerHTML = "";


for (const element of elementos) {
  const item = document.createElement("li");
  item.className = "item-lista text-center";
  item.addEventListener("click", (e) => {
  e.target.remove();
  const index = elementos.findIndex((el) => el === e.target.textContent);
  elementos.splice(index, 1);
  localStorage.setItem("elementos", JSON.stringify(elementos));
  tablita();
  mostrarElementos();
  })
  item.textContent = element;
  contenedor.appendChild(item);
}

const active = document.getElementById("active");
active.textContent = `Activos: ${elementos.length}`
};

// INPUT CON ENTER DE TO DO LIST


function pulsar(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    agregarItem ();
  }
};

// IMPRIMIR TABLA DE COSTOS
let tablita = () => {
let table = document.getElementById("target");
table.innerHTML = `<tr><th class="col-md-6">Producto</th><th class="col-md-6">Costo</th></tr>`;
elementos.forEach((el, index)=>{
  table.innerHTML += `<tr><td> ${el} </td><td class="text-end">$ <input type="number" class="nilai text-end" placeholder="Ingresar precio"></td></tr>`;
})
};

tablita();

// CALCULAR COSTOS DE LA TABLA
function calcularCosto () {
let sum = [];
let inRef = document.getElementsByClassName("nilai");
for(var i=0; i<inRef.length; i++){
  if(inRef[i].value != 0 ) {
    sum.push(parseFloat(inRef[i].value));

  }
}
const final = parseFloat(sum.reduce((acc, el) => acc + el, 0));

let costoRef = document.getElementById("displayCosto");
costoRef.innerHTML = `<p>Costo de la compra: $ ${final}</p>`
};



