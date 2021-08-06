
/*-----------------------VARIABLES---------------------------*/

const quimica = document.querySelectorAll(".QUI"),
      artes = document.querySelectorAll(".AR"),
      fisica = document.querySelectorAll(".FIS"),
      ingles = document.querySelectorAll(".ING"),
      filosofia = document.querySelectorAll(".FIL"),
      matematicas = document.querySelectorAll(".MAT"),
      tecnologia = document.querySelectorAll(".TEC"),
      lectura = document.querySelectorAll(".LC"),
      español = document.querySelectorAll(".ESP"),
      informatica = document.querySelectorAll(".INF"),
      biologia = document.querySelectorAll(".CN"),
      politicas = document.querySelectorAll(".CP"),
      religion = document.querySelectorAll(".REL"),
      edFisica = document.querySelectorAll(".EF"),
      danzas =  document.querySelectorAll(".DZ"),
      clases = [
        quimica,
        artes,
        fisica,
        ingles,
        filosofia,
        matematicas,
        tecnologia,
        lectura,
        español,
        informatica,
        biologia,
        politicas,
        religion,
        edFisica,
        danzas
      ],
      containerClases = document.querySelector("#clases"),
      linksClases = {
        quimica: "https://meet.google.com/lookup/aogjkflbpl",
        artes: "https://meet.google.com/nef-zpwv-ryr",
        fisica: "https://meet.google.com/lookup/dvdubcdvu4",
        ingles: "404",
        filosofia: "http://meet.google.com/swq-yuqs-owu",
        matematicas: "https://meet.google.com/wab-ikqd-kbc",
        tecnologia: "404",
        lectura: "404",
        español: "404",
        informatica: "404",
        biologia: "https://meet.google.com/lookup/d5ls5zlwpb",
        politicas: "https://meet.google.com/brj-jhky-khn",
        religion: "https://meet.google.com/cfw-bhan-wdi",
        edFisica: "404",
        danzas: "404"
      }

//let



/*-----------------------FUNCIONES---------------------------*/
function redict (e) {
  redirect: {
    if (e.target.className.includes("QUI") || e.target.parentElement.className.includes("QUI")) {
      window.location= linksClases.quimica;
      break redirect;
    }
    if (e.target.className.includes("AR") || e.target.parentElement.className.includes("AR")) {
      window.location= linksClases.artes;
      break redirect;
    }
    if (e.target.className.includes("FIS") || e.target.parentElement.className.includes("FIS")) {
      window.location= linksClases.fisica;
      break redirect;
    }
    if (e.target.className.includes("ING") || e.target.parentElement.className.includes("ING")) {
      window.location= linksClases.ingles;
      break redirect;
    }
    if (e.target.className.includes("FIL") || e.target.parentElement.className.includes("FIL")) {
      window.location= linksClases.filosofia;
      break redirect;
    }
    if (e.target.className.includes("MAT") || e.target.parentElement.className.includes("MAT")) {
      window.location= linksClases.matematicas;
      break redirect;
    }
    if (e.target.className.includes("TEC") || e.target.parentElement.className.includes("TEC")) {
      window.location= linksClases.tecnologia;
      break redirect;
    }
    if (e.target.className.includes("LC") || e.target.parentElement.className.includes("LC")) {
      window.location= linksClases.lectura;
      break redirect;
    }
    if (e.target.className.includes("ESP") || e.target.parentElement.className.includes("ESP")) {
      window.location= linksClases.español;
      break redirect;
    }
    if (e.target.className.includes("INF") || e.target.parentElement.className.includes("INF")) {
      window.location= linksClases.informatica;
      break redirect;
    }
    if (e.target.className.includes("CN") || e.target.parentElement.className.includes("CN")) {
      window.location= linksClases.biologia;
      break redirect;
    }
    if (e.target.className.includes("CP") || e.target.parentElement.className.includes("CP")) {
      window.location= linksClases.politicas;
      break redirect;
    }
    if (e.target.className.includes("REL") || e.target.parentElement.className.includes("REL")) {
      window.location= linksClases.religion;
      break redirect;
    }
    if (e.target.className.includes("EF") || e.target.parentElement.className.includes("EF")) {
      window.location= linksClases.edFisica;
      break redirect;
    }
    if (e.target.className.includes("DZ") || e.target.parentElement.className.includes("DZ")) {
      window.location= linksClases.danzas;
      break redirect;
    }
  }
}


/*------------------------CODIGO-----------------------------*/
/*listeners*/
  containerClases.addEventListener("click", redict)
  /*listeners*/

console.log(clases,containerClases)

//nombrar a todas las clases
for (let clase = 0; clase < clases.length; clase++) {
  for (let i = 0; i < clases[clase].length; i++) {
    if (clases[clase] === quimica) {
      clases[clase][i].innerHTML = `<h1> QUI </h1>`;
      continue;
    }
    if (clases[clase] === artes) {
      clases[clase][i].innerHTML = `<h1> AR </h1>`;
      continue;
    }
    if (clases[clase] === fisica) {
      clases[clase][i].innerHTML = `<h1> FIS </h1>`;
      continue;
    }
    if (clases[clase] === ingles) {
      clases[clase][i].innerHTML = `<h1> ING </h1>`;
      continue;
    }
    if (clases[clase] === filosofia) {
      clases[clase][i].innerHTML = `<h1> FIL </h1>`;
      continue;
    }
    if (clases[clase] === matematicas) {
      clases[clase][i].innerHTML = `<h1> MAT </h1>`;
      continue;
    }
    if (clases[clase] === tecnologia) {
      clases[clase][i].innerHTML = `<h1> TEC </h1>`;
      continue;
    }
    if (clases[clase] === lectura) {
      clases[clase][i].innerHTML = `<h1> LC </h1>`;
      continue;
    }
    if (clases[clase] === español) {
      clases[clase][i].innerHTML = `<h1> ESP </h1>`;
      continue;
    }
    if (clases[clase] === informatica) {
      clases[clase][i].innerHTML = `<h1> INF </h1>`;
      continue;
    }
    if (clases[clase] === biologia) {
      clases[clase][i].innerHTML = `<h1> CN </h1>`;
      continue;
    }
    if (clases[clase] === politicas) {
      clases[clase][i].innerHTML = `<h1> CP </h1>`;
      continue;
    }
    if (clases[clase] === religion) {
      clases[clase][i].innerHTML = `<h1> REL </h1>`;
      continue;
    }
    if (clases[clase] === edFisica) {
      clases[clase][i].innerHTML = `<h1> EF </h1>`;
      continue;
    }
    if (clases[clase] === danzas) {
      clases[clase][i].innerHTML = `<h1> DZ </h1>`;
      continue;
    }
  }
}


















//TODO: 
//FIXME: 