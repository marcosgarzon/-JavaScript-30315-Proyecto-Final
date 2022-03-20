
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

// Autoejecutable, foto que cambia según el día de la semana


// A PARTIR DE ACA ES TODO TESTING


const elementosAlmacenados = localStorage.getItem("elementos");
let elementos = [];

if (elementosAlmacenados) {
  elementos = JSON.parse(elementosAlmacenados);
};

mostrarElementos();

function agregarItem () {
  const inputRef = document.getElementById("input");
  const valor = inputRef.value;

  

// validación

if (valor.trim()){
  elementos.push(valor);
  inputRef.value = "";
  mostrarElementos();
  localStorage.setItem("elementos", JSON.stringify(elementos));
}
else {
  alert("Ingresa un producto");
};
};

function mostrarElementos(){
  const contenedor = document.getElementById("elementos");
  contenedor.innerHTML = "";


for (const element of elementos) {
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.addEventListener("click", (e) => {
  e.target.remove();
  const index = elementos.findIndex((el) => el === e.target.textContent);
  elementos.splice(index, 1);
  localStorage.setItem("elementos", JSON.stringify(elementos));
  })
  item.textContent = element;
  contenedor.appendChild(item);
}

const active = document.getElementById("active");
active.textContent = `Activos: ${elementos.length}`
};

// Para que el input reaccione al enter

function pulsar(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    agregarItem ();
  }
};