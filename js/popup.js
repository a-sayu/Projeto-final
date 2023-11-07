function definirEstilo(id, valor){
    var elemento = document.getElementById(id);
    if (elemento) elemento.style.display = valor;
}
function obterEstilo(id){
    var elemento = document.getElementById(id);
    return elemento ? elemento.style.display : "none";
}

function logar(){
    if (obterEstilo("Cadastrar") == "flex") {
        definirEstilo("Cadastrar", "none");
        definirEstilo("Login", "flex" )
    } else if (obterEstilo("Login") == "flex")
        definirEstilo("Login", "none");
    else definirEstilo("Login", "flex");
}
function cadastrar(){
    if (obterEstilo("Login") == "flex") {
        definirEstilo("Login", "none");
        definirEstilo("Cadastrar", "flex" )
    } else if (obterEstilo("Cadastrar") == "flex")
        definirEstilo("Cadastrar", "none");
    else definirEstilo("Cadastrar", "flex");
}