// # importando o prompt
const prompt = require('prompt-sync')();

// # Pergunta pra iniciar game
console.log('\n');
let iniciarJogo = prompt('Você deseja iniciar o Jogo One Chance ?').toUpperCase();;
console.log('\n');

/*
# Assim que usuário digitar SIM, vai dar o break, porque se não o do (while) entraria em loop infinito
porque o while está while(== SIM).

- Então já vai entrar no while de baixo

# Caso usuário digite NAO, vai entrar no else, e eu vou perguntar se ele tem certeza, se ele dizer SIM
a estrutura para, e o jogo não começa, caso contrário, vai perguntar de novo se quer iniciar o jogo
*/

// # Importando objeto cientista
const cientista = require('./objeto.js');

// # Iniciar o Jogo
do{
  if(iniciarJogo == 'SIM'){
    // # Nome do cientista
    let nomeCientista = prompt('Qual o nome do cientista?');
    cientista.nome = nomeCientista;
    break;
  }
  else{
    let certeza = prompt('Tem certeza? ').toUpperCase();
    if(certeza == 'SIM'){
      break;
    }
    else {
      iniciarJogo = prompt('Você deseja iniciar o Jogo One Chance ?').toUpperCase();
    }
  }
}while(iniciarJogo == 'SIM')


/* 
# Objetivo: Loop de 4 repetições para simular a passagem de tempo de 4 dias 
(posteriormente o 5  e 6 dias estão acoplados em outras funções)
*/
while(iniciarJogo == 'SIM'){
  // # Função que faz as perguntas básicas de acordo com o dia
  const perguntasBasicas = require('./perguntasBasicas.js');
  
  // # Funções que serão invocadas caso o usuário escolha ir ao trabalho de acordo com o dia
  const irPrimeiroDia = require('./funcoes_irTrabalho/irPrimeiroDia.js');
  const irSegundoDia = require('./funcoes_irTrabalho/irSegundoDia.js');
  const irTerceiroDia = require('./funcoes_irTrabalho/irTerceiroDia.js');
  const irQuartoDia = require('./funcoes_irTrabalho/irQuartoDia.js');
  const irQuintoDia = require('./funcoes_irTrabalho/irQuintoSextoDia.js');
  
  // # Funções que serão invocadas caso usuário escolha ficar em casa de acordo com o dia
  const ficarPrimeiroDia = require('./funcoes_ficarEmCasa/ficarPrimeiroDia.js');
  const ficarSegundoDia = require('./funcoes_ficarEmCasa/ficarSegundoDia.js');
  const ficarTerceiroDia = require('./funcoes_ficarEmCasa/ficarTerceiroDia.js');
  const ficarQuartoDia = require('./funcoes_ficarEmCasa/ficarQuartoDia.js');


  let pergunta;

  // # Contagem dos dias
  for(let i = 0; i <= 4; i++){
    // # 1 Dia
    if(i == 1){
      console.log('\n');

      // # Perguntas se quer ir pro quarto e pro banheiro
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho primeiro dia
        irPrimeiroDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa primeiro dia
        ficarPrimeiroDia(i)
      }
    }
    // # 2 Dia
    if(i == 2){
      console.log('\n');

      // # Perguntas basicas
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho segundo dia
        irSegundoDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa segundo dia
        ficarSegundoDia(i)
      }
    }
    // # 3 Dia
    if(i == 3){
      console.log('\n');

      // # Perguntas basicas
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho segundo dia
        irTerceiroDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa segundo dia
        ficarTerceiroDia(i)
      }
    }
    // 4 dia
    if(i == 4){
      console.log('\n');

      perguntasBasicas(i);

      pergunta = prompt('\x1b[33mVocê deseja ir trabalhar?\x1b[0m').toUpperCase();
      if(pergunta == 'SIM'){
        irQuartoDia(i);
      }
      else{ 
        ficarQuartoDia(i);
      }  
    }
  }

  // # Assim que chegar no final, usuário pode ter a opção de rejogar o jogo
  let rejogar = prompt('\nVocê deseja re-jogar o Jogo One Chance ?').toUpperCase();
  if(rejogar != 'SIM'){
    break;
  }
  else{
    iniciarJogo = 'SIM';
  }
}
