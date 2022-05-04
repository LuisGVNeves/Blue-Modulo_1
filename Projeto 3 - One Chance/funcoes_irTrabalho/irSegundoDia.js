// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');

// # Importando prompt
const prompt = require('prompt-sync')();


// # Ir Segundo Dia
module.exports = function irSegundoDia(i){
  console.log(`\nVocê saindo de casa olha o jornal e descobre que seu rosto está no jornal de novo..
  \n\n \x1b[31mNOTICIA:\x1b[0m
  \n"Hoje ${mostraData(i)} a cura do câncer descoberta no início desta semana foi considerada "além de mortal", de acordo com as autoridades:\n \x1b[31m E48K15 não para apenas em matar células cancerígenas, a droga continua a matar todas as outras células vivas não apenas no corpo humano, mas de todo o planeta Terra.\x1b[0m Se a droga à base de gás fosse usada, poderia causar danos catastróficos à terra.\x1b[0m
  \n \x1b[31mAgora, você entendeu o porque das ligações todas...\x1b[0m\n
  \n..Chegando no trabalho, o cientista chefe que trabalha com você avisa que toda a equipe está fodida por causa da vacina..\n`)
  
  let trabalharNaVacina = prompt("Deseja trabalhar na vacina? ").toUpperCase();
  if(trabalharNaVacina == 'SIM'){
    cientista.aumentarCura(2);
    console.log(`\nDr.${cientista.nome} trabalhou na cura, mas só conseguiu avançar ${cientista.progressoCura}%\n`);
  }

  let irAoTelhado = prompt('\x1b[35mIr ao telhado fumar um cigarrinho pra relaxar a mente?\x1b[0m ').toUpperCase();
  if(irAoTelhado == 'SIM'){
    console.log(`\nVocê vai ao telhado tomar um ar e fumar um cigarrets, e vê um dos cientistas que trabalharam com você na vacina..
    \nEle no momento de desespero, deu um fim a vida dele por medo do que a vacina poderia causar ao mundo e a ele.\n
    ${cientista.aumentarDepressao(20)}
    ${cientista.aumentarAnsiedade(20)}
    ${cientista.decrementarSaude(10)}`);
  }
  else{
    console.log(`\nO cientista chefe que trabalha com você avisou que amanhã vocês vão fazer uma conferência internacional explicando o erro da vacina, para toda população.
    você ouve um barulho no telhado.. Seu colega que ajudou na vacina acaba de cometer aquilo.. 
    ${cientista.aumentarDepressao(20)}
    ${cientista.aumentarAnsiedade(20)}`);
  }
}
