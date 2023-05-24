const textArea = document.querySelector(".text-area"); //almaccenara lo que el usuario escriba
const mensaje = document.querySelector(".mensaje");
//alamcenar todas las llaves de codificacion en una matrix (arreglo de arreglos)
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  const textoMaquina = document.querySelector(".mensaje");
  efectoMaquinaEscribir(textoMaquina, textoEncriptado);
  textArea.value = "";
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  const textoMaquina = document.querySelector(".mensaje");
  efectoMaquinaEscribir(textoMaquina, textoDesencriptado);
  textArea.value = "";
}

function copiarTexto() {
  var textarea = document.querySelector(".mensaje");
  var textoACopiar = textarea.value;

  navigator.clipboard
    .writeText(textoACopiar)
    .then(function () {
      alert("Texto copiado al portapapeles: ");
    })
    .catch(function (error) {
      console.error("Error al copiar el texto:", error);
    });
}

document.querySelector(".copiar").addEventListener("click", copiarTexto);

function pegarTexto() {
  var textarea = document.querySelector(".text-area");

  navigator.clipboard
    .readText()
    .then(function (textoPegado) {
      textarea.value = textoPegado;
      alert("Texto pegado correctamente: ");
    })
    .catch(function (error) {
      console.error("Error al pegar el texto:", error);
    });
}

document.querySelector(".btn-pegar").addEventListener("click", pegarTexto);

//TEXTO MAQUINA ESCRIBIR
function efectoMaquinaEscribir(elemento, texto) {
  elemento.textContent = ""; // con esto limpio el contenido existente

  let i = 0;
  const delay = 100; // con delay retraso el contenido  entre cada carácteres (en milisegundos)

  function escribirCaracter() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribirCaracter, delay);
    }
  }

  escribirCaracter();
}
