// primer desafio

const imagen = document.querySelector(".imagenUno");

let count = 1


function borde() {
    count++;
    if (count%2 == 0){
        imagen.style.border= "2px solid red";
    }
    else {
        imagen.style.border= "none";
    }
};  

// segundo desafio

const msj = document.querySelector(".mensaje");
const btnpw = document.querySelector(".ingresar");

btnpw.addEventListener("click", () => {

    const allPasswords = document.querySelectorAll("select")

    let [pass1, pass2, pass3] = allPasswords;

    if (pass1.value == 9 && pass2.value == 1 && pass3.value == 1){
        msj.innerHTML = "Contraseña 1 Correcta";
        msj.style.paddingBottom = "1rem";
        msj.style.color = "green";
    }

    else if (pass1.value == 7 && pass2.value == 1 && pass3.value == 4){
        msj.innerHTML = "Contraseña 2 Correcta";
        msj.style.paddingBottom = "1rem";
        msj.style.color = "green";

    }

    else {
        msj.innerHTML = "Contraseña Incorrecta";
        msj.style.paddingBottom = "1rem";
        msj.style.color = "red";
    }
});

// tercer desafio

const msj2 = document.querySelector(".mensaje-2");
const btnst = document.querySelector(".verificar");



btnst.addEventListener("click", () => {

    var num1 = Number(document.getElementById("sticker1").value);
    var num2 = Number(document.getElementById("sticker2").value);
    var num3 = Number(document.getElementById("sticker3").value);
    var sum = num1 + num2 + num3;

    console.log (sum)

    if (sum > 10 ){
        msj2.innerHTML = "Llevas demasiados stickers!";
        msj2.style.paddingBottom = "1rem";
    }
    else { 
        msj2.innerHTML ="Llevas " + sum + " stickers"
        msj2.style.paddingBottom = "1rem";

    }

});


