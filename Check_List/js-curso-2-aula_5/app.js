let lista = [];
let contador = 0;
// Essa função adiciona elementos á elemento a lista 
function adicionarTarefa(){
    // a variavel texto pega o valor da barra 
    let texto = document.querySelector('input').value;
    //essa função é chamada para limpar a barra de pesquisa
    limparCampo();
    // Adiciona, o que tiver na barra de pesquisa, á lista
    lista.push(texto);
    //é variavel é a mensagem que aparece ao Adicionar algo na lista
    let mensagem = 'Foi adicionado: '+ texto+', á sua Lista';
    tectoTela('h1', mensagem)
    //remove o disable do conteiner do botão delete quando é adicionado um elemento 
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('listaNome').removeAttribute('disabled');
}
//Serve para amostrar uma mensagem quando tiver fazia
function listaFazia(){
    if(lista.length === 0){
            tectoTela('h1', 'Sua lista Esta Vazia');
            document.getElementById('reiniciar').setAttribute('disabled', true);
            document.getElementById('listaNome').setAttribute('disabled', true);
    }
}

//Serve para amostrar o que tem na lista
function verLista(){
    for(let i = 1; i <= lista.length; i++){
        tectoTela('h1', lista);
    }

    listaFazia();
    limparCampo();
}
//modifica o o texto do conteiner com dois parametros
function tectoTela(teg, textoDiferenciado){
    let textoApareceTela = document.querySelector(teg);
    textoApareceTela.innerHTML = textoDiferenciado;
}
//Deleta elemento da lista
function deletarTarefa(){
        //busca o valor da barra de pesquisa
        let textoRemovivel = document.querySelector('input').value
        //verifica se o valor esta dentro da sua lista
        if(lista.includes(textoRemovivel) ){
            lista = lista.filter(item=>item !==textoRemovivel);
            let textoDeletado = textoRemovivel+ ', foi deletado de sua Lista';
            tectoTela('h1', textoDeletado)
        }
        //verifica se a lista esta zerada e mostra mensagem na tela
        if(lista.length === 0){
            tectoTela('h1', 'Sua lista Esta Vazia');
            document.getElementById('reiniciar').setAttribute('disabled', true);
            document.getElementById('listaNome').setAttribute('disabled', true);
    }
        

    console.log(lista);
    limparCampo();
}
//limpa o campo de pesquisa para inserir novo elemento
function limparCampo(){
    texto = document.querySelector('input');
    texto.value = '';
}
