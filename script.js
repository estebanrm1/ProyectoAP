const mostrarBtn1 = document.getElementById("mostrarBtn1");
const mostrarBtn2 = document.getElementById("mostrarBtn2");
const listaDesplegable1 = document.getElementById("listaDesplegable1");
const listaDesplegable2 = document.getElementById("listaDesplegable2");

let lista1Visible = false;
let lista2Visible = false;

mostrarBtn1.addEventListener("click", () => {
    lista1Visible = !lista1Visible;
    listaDesplegable1.style.display = lista1Visible ? "block" : "none";
});

mostrarBtn2.addEventListener("click", () => {
    lista2Visible = !lista2Visible;
    listaDesplegable2.style.display = lista2Visible ? "block" : "none";
});
