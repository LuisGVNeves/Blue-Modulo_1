// # Variavel que você quer alterar pra true
let alvo = false;

// # Função que altera o valor da variavel que você quer alterar pra true
function alterarValor(){
  // # Aqui pode ter uma variavel booleana carregando consigo o valor TRUE
  let verdadeiro = true;

  // # E aqui você retorna esse TRUE
  return verdadeiro;
}

// # Se o retorno da função alterarValor() for igual a TRUE, então você altera a variavel que você quer pra TRUE
if(alterarValor() == true){
  alvo = true;
}

console.log(alvo);