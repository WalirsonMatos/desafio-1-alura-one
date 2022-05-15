const inputTexto = document.querySelector("#input-texto");
const mensagem = document.querySelector("#mensagem");
const btn = document.querySelector("#copy"); 
const element = document.querySelector("#titulo");
const text = "Mensagem Secreta Encriptada";
const interval = 150;


// funcao da imagem desaparecer//
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage ="none"
}

//funcao de criptografa a mensagem//
function encriptar(stringEncriptada){
    let  listaCodigo =  [[ "e" , "enter" ] ,  [ "i" , "imes" ] ,  [ "a" , "ai" ] , [ "o" , "ober" ] ,  [ "u" , "ufat" ] ] ;
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i=0; i < listaCodigo.length; i++){
        if(stringEncriptada.includes(listaCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(listaCodigo[i][0], listaCodigo[i][1])
        }
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage ="none"
}

//funcao de descriptografa a mensagem//
function desencriptar(stringDesencriptada){
    let listaCodigo  =  [ [ "enter" , "e" ] ,  [ "imes" , "i" ] ,  [ "ai" , "a" ] , [ "ober" , "o" ] ,  [ "ufat" , "u" ] ] ;
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i=0; i < listaCodigo.length; i++){
        if(stringDesencriptada.includes(listaCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(listaCodigo[i][0], listaCodigo[i][1])
        }
    }

    return stringDesencriptada
}

// botao de copiar e limpar ao mesmo tempo//
btn.addEventListener('click', function(e) {
    var textArea = document.querySelector("#mensagem");
    textArea.select();
    document.execCommand('copy');
    location.reload()

    alert("Texto copiado")

});

// titulo que se digita sozinho//
function showText(element, text, interval) {
    const char = text.split("").reverse();
    const typer = setInterval(() => {

        if(!char.length) {
return clearInterval(typer); //condicao de parada//
        }
const next = char.pop();
element.innerHTML += next;
    }, interval);

    
}

showText(element, text, interval);