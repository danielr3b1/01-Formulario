
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputNumberRadom = document.getElementById("numberRandom")
const btnEnviar = document.getElementById("btnEnviar")

inputNumberRadom.value = Math.floor(Math.random() * 999999)

function txNombres() {
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
     event.returnValue = false;
}

function validator() {
    if (inputEmail.value != "" && validatorSpace(inputName.value) && inputEmail.value != "" && validatorSpace(inputEmail.value)) {
        btnEnviar.disabled = false
    }else {
        btnEnviar.disabled = true
    }
}

function validatorSpace(value){
    const patron = /^\s+$/
    if (patron.test(value)){
        return false
    }else {
        return true
    }

}
