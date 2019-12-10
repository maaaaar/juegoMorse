var jugador = document.getElementById("jugador").innerHTML; //innerHTML para coger los datos del div
var puntos = document.getElementById("puntos");
var palabra = document.getElementById("nuevaPalabra");
var nuevaPalabra = document.getElementById("nuevaPalabra");
var pantallaW = 1500;
var splitParaula;
var letra;
var lletra;
var interval;
var posRan = Math.floor(Math.random() * pantallaW);
puntos.textContent = 1000;

initPalabra();
programa();

//#region  FUNCION MOVER JUGADOR
$(document).on("keydown", function (e) {
  // e stands for "event" - the event is the keypress
  // e.key means the key that was pressed
  switch (e.key) {
    // left arrow pressed
    case "ArrowLeft":
      $("#jugador").animate(
        {
          left: "-=10px"
        },
        "fast"
      );
      break;
    // right arrow pressed
    case "ArrowRight":
      $("#jugador").animate(
        {
          left: "+=10px"
        },
        "fast"
      );
      break;
  }
});
//#endregion

//#region ----FUNCIONES----
//#region Funciones arreys aleatorias
function getRandomLetra() {
  // get a new random number
  var num = Math.floor(Math.random() * 26);
  //#region  array letras
  var abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  //#endregion
  return abc[num];
}
function getRandomPalabra() {
  // get a new random number
  var num = Math.floor(Math.random() * 6);
  var word = [
    "ONDAS SONORAS",
    "AMPLIFICADOR",
    "AUDIOFREQUENCIA",
    "TRANSMISIÓN",
    "ANTENA",
    "OSCILADOR"
  ];
  return word[num];
  //document.querySelector("#palabra").textContent = num;
}
//#endregion

function programa() {
  //setTimeout(crearLletra, 100, letra); // creo la lletra amb el valor
  letra = getRandomLetra();
  crearLletra(letra);
  setInterval(colision, 1000, letra, 'jugador');
}

function initPalabra() {
  palabra.textContent = getRandomPalabra();
  nuevaPalabra = palabra.textContent.replace(/ /g, ""); // si hay espacios en la palabra lo quito
  splitParaula = nuevaPalabra.split(""); //separa por caracteres
}
function crearLletra(value) {
  $("#pantalla").append('<div class="caida" id="' + value + '"> ' + value + "</div>");
  //document.getElementById(value).style.left = posRan + "px"; //para cambiar la posicion de inicio
}

function colision(letra, jugador) {

  var ediv1 = document.getElementById('jugador');
  var ediv2 = document.getElementById(letra);

  ediv1.top = $(ediv1).offset().top;
  ediv1.left = $(ediv1).offset().left;
  ediv1.right = Number($(ediv1).offset().left) + Number($(ediv1).width());
  ediv1.bottom = Number($(ediv1).offset().top) + Number($(ediv1).height());

  ediv2.top = $(ediv2).offset().top;
  ediv2.left = $(ediv2).offset().left;
  ediv2.right = Number($(ediv2).offset().left) + Number($(ediv2).width());
  ediv2.bottom = Number($(ediv2).offset().top) + Number($(ediv2).height());

  if (ediv1.right > ediv2.left && ediv1.left < ediv2.right && ediv1.top < ediv2.bottom && ediv1.bottom > ediv2.top) {


    // if (splitParaula.length != 0) {
    for (var lletra in splitParaula) {

      //agafo cada lletra de la paraula
      if (splitParaula[lletra] === letra) {
        // i la comparo amb el valor del div
        //si coincideix l'elimino
        delete splitParaula[lletra];
        document.getElementById("nuevaPalabra").innerHTML = splitParaula.join("");
        $(".caida").remove()
      }
    }
    // }
    // else {
    //   programa();
    // }

  }

}
//#endregion
//programa();
