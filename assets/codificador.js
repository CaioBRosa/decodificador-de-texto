//codigo para codificar e decodificar

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

window.onload = function () {
    let textarea1 = document.getElementById("input1")
    let textarea2 = document.getElementById("input2")
    textarea1.value = ""
    textarea2.value = ""
}

function validarNumero(valor) {
    return isNaN(valor)
}

function validarUTF8(valor) {
    const regex = /[^\x00-\x7F]/g;
    return !regex.test(valor)
}

function obterMensagem() {
    let mensagem = document.getElementById("input1").value
    let codificado = document.getElementById('input2')

    if (mensagem == "") {
        codificado.value = "Insira uma mensagem de texto para ser codificado!"
    } else {
        if (!validarNumero(mensagem)) {
            codificado.value = "Insira uma mensagem de texto para ser codificado!"
        } else {
            if (!validarUTF8(mensagem)) {
                codificado.value = "Insira uma mensagem de texto para ser codificado!"
            } else {
                const codigo = {
                    e: "enter",
                    i: "imes",
                    a: "ai",
                    o: "ober",
                    u: "ufat",
                }
    
                let mensagemCodificada = ""
    
                for (let i = 0; i < mensagem.length; i++) {
                    const currentChar = mensagem.charAt(i).toLowerCase()
                    mensagemCodificada += codigo[currentChar] || currentChar
                }
    
                codificado.value = mensagemCodificada
            }
        }
    }
}

function decodificar() {

    let mensagemCodificada = document.getElementById("input1").value
    let decodificado = document.getElementById('input2')

    if (mensagemCodificada == "") {
        decodificado.value = "Insira uma mensagem de texto para ser decodificado!"
    } else {

        if (!validarNumero(mensagemCodificada)) {
            decodificado.value = "Insira uma mensagem de texto para ser decodificado!"
        } else {
            if (!validarUTF8(mensagemCodificada)) {
                decodificado.value = "Insira uma mensagem de texto para ser decodificado!"
            } else {
                const codigoInvertido = {
                    "ai": "a",
                    "ober": "o",
                    "imes": "i",
                    "ufat": "u",
                    "enter": "e",
                };
    
                let mensagemDecodificada = ""
                let i = 0;
    
                while (i < mensagemCodificada.length) {
                    const currentChar = mensagemCodificada.charAt(i).toLowerCase();
                    let foundMatch = false;
    
                    for (const key in codigoInvertido) {
                        if (key.charAt(0) === currentChar) {
                            mensagemDecodificada += codigoInvertido[key];
                            i += key.length;
                            foundMatch = true;
                            break;
                        }
                    }
    
                    if (!foundMatch) {
                        mensagemDecodificada += currentChar;
                        i++;
                    }
                }
    
                decodificado.value = mensagemDecodificada
            }
        }
    }
}