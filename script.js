const lista = [
     "Olá, bom dia!",
    "Sou Alfred, uma falsa IA generativa.",
    "Fui criado em uma aula de IA pelo F1nnt3ir0.",
    "'IA' significa Inteligência Artificial, em inglês 'AI' - Artificial Inteligence.",
    "Ainda estou adquirindo conhecimento.",
    "Sou apenas um mordomo com textos e uma lista de frases que aparecem quando você clica em um botão",
    "Tenha um exímio dia, Senhor."
]
var n = 0;
 function funcao(){
    resposta.innerHTML = lista[n];
    n++;
    if(n > 6) n = 0;
 }