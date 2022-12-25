const btnencri = document.getElementById("encriptar");
const btndese = document.getElementById("desencriptar");
const btncopi = document.getElementById("copiar");
const txttexto = document.getElementById("texto");
const txtresul = document.getElementById("resultado");
const txtmostar = document.getElementById("mostrar");
var contenido;

btnencri.addEventListener("click", encriptar);
btndese.addEventListener("click", desencriptar);
btncopi.addEventListener("click", copiar);

function encriptar() {
  contenido = txttexto.value.toLowerCase();
  if (contenido == "") {
    txtmostar.style.display = "none";
    txtresul.style.display = "block";
    btncopi.style.display = "none";
  } else {
    var textoEncriptado = contenido
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    txtresul.style.display = "none";
    txtmostar.value = textoEncriptado;
    txtmostar.style.display = "block";
    btncopi.style.display = "block";
  }
}
function desencriptar() {
  contenido = txttexto.value.toLowerCase();
  if (contenido == "") {
    txtmostar.style.display = "none";
    txtresul.style.display = "block";
    btncopi.style.display = "none";
  } else {
    textoDesencriptado = contenido
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    txtresul.style.display = "none";
    txtmostar.value = textoDesencriptado;
    txtmostar.style.display = "block";
    btncopi.style.display = "block";
  }
}
function copiar() {
  txtmostar.select();
  document.execCommand("copy");
  txtmostar.value = "";
  
}
