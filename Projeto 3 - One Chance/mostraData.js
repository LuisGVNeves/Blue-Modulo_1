// # Função que mostra a DATA atual
module.exports = function mostraData(i){

  // # Instanciando a data
  const data = new Date();

  // # Retorna o dia da semana em numero intervalo de [1-7]
  let dia = data.getDay();

  /*
    # O i que estou recebendo no parâmetro, vai alterar a ordem dos dias, lá no loop,
    caso o loop esteja no laço 1, então eu vou chamar essa função mostraData(), que vai
    receber esse (i) do for, e toda vez que o laço de repetição incrementar, essa função
    vai ser invocada, mudando também o valor do (i) do parâmetro, mostrando o dia da semana
    atual lá no for
  */

  i == 1 ? dia = '\x1b[36msegunda-feira\x1b[0m' : false;
  i == 2 ? dia = '\x1b[36mterça-feira\x1b[0m' : false;
  i == 3 ? dia = '\x1b[36mQuarta-feira\x1b[0m' : false;
  i == 4 ? dia = '\x1b[36mQuinta-feira\x1b[0m' : false;
  i == 5 ? dia = '\x1b[36mSexta-feira\x1b[0m' : false;
  i == 6 ? dia = '\x1b[36mSabado\x1b[0m' : false;
  i == 7 ? dia = '\x1b[36mDomingo\x1b[0m' : false;

  return dia;
}
