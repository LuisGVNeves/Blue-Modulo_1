// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');

// # importando o prompt
const prompt = require('prompt-sync')();

// # Ficar em casa segundo dia
module.exports = function ficarSegundoDia(i){
  console.log(`
  \nHoje ${mostraData(i)} Sua esposa te alertou que o seu time de cientistas estavam te ligando a manhã toda, mas você achou que eles estavam enchendo seu saco para fazer uma comemoração sobre sua vacina, por isso você nem retornou as ligações..
  \nVocê decidiu ficar em casa e fazer brownies com sua filha Molly assim que ela chegasse da escola...`);

  console.log('\n');
  let buscarMolly = prompt('\x1b[31mIr buscar sua filha Molly? \x1b[0m').toUpperCase();
  console.log('\n');

  if(buscarMolly == 'SIM'){
    console.log(`Você passou no mercado para comprar os ingredientes para fazer os Brownies, e buscou sua filha Molly na escola.
    ${cientista.aumentarFelicidade(10)}
    ${cientista.decrementarDinheiro(120)}`);
    console.log(`Você voltando pra casa após buscar sua filha Molly na escola, olha o jornal que está em frente a sua casa e se assusta com a \x1b[31m[NOTICIA:]\x1b[0m " A cura do câncer descoberta no início desta semana foi considerada "além de mortal", de acordo com as autoridades:\n
    \x1b[31mE48K15 não para apenas em matar células cancerígenas, a droga continua a matar todas as outras células vivas não apenas no corpo humano, mas de todo o planeta Terra. Se a droga à base de gás fosse usada, poderia causar danos catastróficos à terra.\x1b[0m\n   
    \x1b[31mAgora, você entendeu o porque das ligações todas...\x1b[0m
    ${cientista.aumentarDepressao(20)}`);
  }

  if(buscarMolly == 'NAO'){
    console.log(`Você escolheu não ir buscar a Molly, porém, sua esposa te obrigou e você teve que ir mesmo assim. No caminho você passou no mercado para comprar os ingredientes para fazer Brownies com sua filha, você no meio do caminho furou o pneu..\n
    ${cientista.decrementarDinheiro(120)} com Brownies
    ${cientista.decrementarDinheiro(320)} com pneu do carro
    \nVocê voltando pra casa após buscar sua filha Molly na escola, olha o jornal que está em frente a sua casa e se assusta com a \x1b[31m[NOTICIA:]\x1b[0m " A cura do câncer descoberta no início desta semana foi considerada "além de mortal", de acordo com as autoridades:\n\x1b[31mE48K15 não para apenas em matar células cancerígenas, a droga continua a matar todas as outras células vivas não apenas no corpo humano, mas de todo o planeta Terra.\n
    Se a droga à base de gás fosse usada, poderia causar danos catastróficos à terra.\x1b[0m \n\n \x1b[31mAgora, você entendeu o porque das ligações todas...\x1b[0m \n\n${cientista.aumentarDepressao(20)}`);

  }

  console.log(`00:00h você recebeu uma ligação e descobriu que um dos cientistas que trabalha com você, cometeu um ato contra sua própria vida, no telhado,por conta das repercussões da vacina.
  \nO seu amigo cientista chefe, disse que amanhã vocês vão fazer uma conferência internacional explicando o erro da vacina, para toda população.`);
}
