
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
      etica =  document.querySelectorAll(".ET"),
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
        danzas,
        etica
      ],
      containerClases = document.querySelector("#clases"),
      linksClases = {
        quimica: "https://meet.google.com/lookup/aogjkflbpl",
        artes: "https://meet.google.com/nef-zpwv-ryr",
        fisica: "https://meet.google.com/lookup/dvdubcdvu4",
        ingles: "https://classroom.google.com/c/MjY4MzM4MzM1NTQy?hl=es",
        filosofia: "http://meet.google.com/swq-yuqs-owu",
        matematicas: "https://meet.google.com/wab-ikqd-kbc",
        tecnologia: "https://classroom.google.com/c/MjY4NTgzNTEzMDM1?hl=es",
        lectura: "https://classroom.google.com/c/MjY4NDYzNjY2ODc3?hl=es",
        español: "https://classroom.google.com/c/MjQ3OTk0OTAyMTg3?hl=es",
        informatica: "https://classroom.google.com/c/MjY4NTgzNzAwNzYy?hl=es",
        biologia: "https://meet.google.com/lookup/d5ls5zlwpb",
        politicas: "https://meet.google.com/brj-jhky-khn",
        religion: "https://meet.google.com/cfw-bhan-wdi",
        edFisica: "https://classroom.google.com/c/MjY4Mzc1ODY2OTU5?hl=es",
        danzas: "https://classroom.google.com/c/MjQ3NTk3MjcwMDk2?hl=es",
        etica: "https://meet.google.com/eyr-xmhi-fzw"
      }

//let



/*-----------------------FUNCIONES---------------------------*/
function redict (e) {
  redirect: {
    if (e.target.className.includes("QUI") || e.target.parentElement.className.includes("QUI")) {
      window.open(linksClases.quimica);
      break redirect;
    }
    if (e.target.className.includes("AR") || e.target.parentElement.className.includes("AR")) {
      window.open(linksClases.artes);
      break redirect;
    }
    if (e.target.className.includes("FIS") || e.target.parentElement.className.includes("FIS")) {
      window.open(linksClases.fisica);
      break redirect;
    }
    if (e.target.className.includes("ING") || e.target.parentElement.className.includes("ING")) {
      window.open(linksClases.ingles);
      break redirect;
    }
    if (e.target.className.includes("FIL") || e.target.parentElement.className.includes("FIL")) {
      window.open(linksClases.filosofia);
      break redirect;
    }
    if (e.target.className.includes("MAT") || e.target.parentElement.className.includes("MAT")) {
      window.open(linksClases.matematicas);
      break redirect;
    }
    if (e.target.className.includes("TEC") || e.target.parentElement.className.includes("TEC")) {
      window.open(linksClases.tecnologia);
      break redirect;
    }
    if (e.target.className.includes("LC") || e.target.parentElement.className.includes("LC")) {
      window.open(linksClases.lectura);
      break redirect;
    }
    if (e.target.className.includes("ESP") || e.target.parentElement.className.includes("ESP")) {
      window.open(linksClases.español);
      break redirect;
    }
    if (e.target.className.includes("INF") || e.target.parentElement.className.includes("INF")) {
      window.open(linksClases.informatica);
      break redirect;
    }
    if (e.target.className.includes("CN") || e.target.parentElement.className.includes("CN")) {
      window.open(linksClases.biologia);
      break redirect;
    }
    if (e.target.className.includes("CP") || e.target.parentElement.className.includes("CP")) {
      window.open(linksClases.politicas);
      break redirect;
    }
    if (e.target.className.includes("REL") || e.target.parentElement.className.includes("REL")) {
      window.open(linksClases.religion);
      break redirect;
    }
    if (e.target.className.includes("EF") || e.target.parentElement.className.includes("EF")) {
      window.open(linksClases.edFisica);
      break redirect;
    }
    if (e.target.className.includes("DZ") || e.target.parentElement.className.includes("DZ")) {
      window.open(linksClases.danzas);
      break redirect;
    }
    if (e.target.className.includes("ET") || e.target.parentElement.className.includes("ET")) {
      window.open(linksClases.etica);
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
    if (clases[clase] === etica) {
      clases[clase][i].innerHTML = `<h1> ET </h1>`;
      continue;
    }
  }
}


















//TODO: 
//FIXME: 