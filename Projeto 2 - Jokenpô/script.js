// ## Variáveis globais para serem utilizadas

// Prompt Para fazer as perguntas
const prompt = require('prompt-sync')();

// # Primeira pergunta pra saber se usuário deseja jogar
let pergunta;

// # Segunda pergunta pra saber quantas rodadas usuário quer
let rodadas;

// # Se logo de cara o usuário recusar, já vai parar aqui
pergunta = prompt('Deseja jogar: Sim | Nao ? ');
if(pergunta == 'Nao'){
  console.log('\n');
  console.log('Usuário não quis participar !');
}
else{
  rodadas = prompt('Quantas rodadas você quer fazer? ');
  console.log('\n');
  console.log('Antes de iniciar o jogo, se atente sempre a escrever em letra maiuscula nas jogadas P | PP | T');
  console.log('\n');
}


// # Essa variável vai carregar números aleatórios para simular a jogada do PC
let jogadaPC;

// # Essa variável vai ser perguntando pro usuário, qual escolha de jogo ele quer fazer Ex: pedra, papel, tesoura
let escolha;

// # Variáveis para contar a pontução dos dois jogadores
let pontosPC = 0;
let pontosUsuario = 0;


/*
  # DO WHILE - Vai ficar rodando enquanto a pergunta 'Deseja jogar?' for diferente de não

  - Dentro de DO WHILE criei um for que vai ficar dando loop pegando como valor inicial o
  número de rodadas que o usuário desejou, até 0, então vou fazer uma decrementação

  - Para simular as jogadas aleatórias do PC, eu invoquei o método floor que vai retornar
  o número "arredondado", dentro de floor, passei random, que gera números aleatórios,
  porém, números gigantes com várias casas decimais, multiplicando por 3, ele retorna
  apenas números aleatórios de 1 a 3;

  - Tendo esses números aleatórios gerados, eu consigo fazer a condição de tipo:
    Se número for igual a 1, então o PC vai jogar com Pedra e por assim vai
*/
do {
  
  for(let i=rodadas; i >0; i--) {
    
    // Jogada PC
    jogadaPC = Math.floor(Math.random() * 3);
    
    // Se jogadaPc for igual 1 = PC jogou Pedra
    if(jogadaPC == 1){
      
      // Jogada usuario
      escolha = prompt('P - Pedra | PP - Papel | T - tesoura ? ');

      // Reatribuindo Jogada PC para entrar na próxima rodada
      jogadaPC = Math.floor(Math.random() * 3);
      
      // Se escolha do usuário for igual a PP = Papel
      if(escolha == 'PP'){
        pontosUsuario++;
        console.log(`PC Jogou Pedra e Usuario Papel | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else if(escolha == 'T'){
        pontosPC++;
        console.log(`PC Jogou Pedra e Usuario Tesoura | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else {
        // Os dois jogaram Pedra = empate
        pontosPC += 0; 
        pontosUsuario += 0; 
        console.log(`PC Jogou Pedra e Usuario Pedra | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }

    }
    //  Se jogadaPc for igual 2 = PC jogou Papel
    else if(jogadaPC == 2){

      // Jogada usuario
      escolha = prompt('P - Pedra | PP - Papel | T - tesoura ? ');
      
      // // Reatribuindo Jogada PC para entrar na próxima rodada
      jogadaPC = Math.floor(Math.random() * 3);
      
      if(escolha == 'P'){
        pontosPC++;
        console.log(`PC Jogou Papel e Usuario Pedra | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else if(escolha == 'T'){
        pontosUsuario++;
        console.log(`PC Jogou Papel e Usuario Tesoura | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else {
        // Os dois jogaram Papel = empate
        pontosPC += 0; 
        pontosUsuario += 0; 
        console.log(`PC Jogou Papel e Usuario Papel | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
    }
    else { // Ultimo caso PC jogou tesoura

      // Jogada usuario
      escolha = prompt('P - Pedra | PP - Papel | T - tesoura ? ');

      // Jogada PC
      jogadaPC = Math.floor(Math.random() * 3);

      if(escolha == 'P'){
        pontosUsuario++;
        console.log(`PC Jogou Tesoura e Usuario Pedra | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else if(escolha == 'PP'){
        pontosPC++;
        console.log(`PC Jogou Tesoura e Usuario Papel | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }
      else {
        // Os dois jogaram tesoura = empate
        pontosPC += 0; 
        pontosUsuario += 0; 
        console.log(`PC Jogou Tesoura e Usuario Tesoura | PONTOS PC: ${pontosPC} | PONTOS Usuário: ${pontosUsuario}\n`);
      }

    }

  }

  /*
    # Quando código chegar nesse ponto, as rodadas iniciais que o usuário escolheu já acabaram,
    então vou fazer a pergunta de novo, caso Não, vou retornar os pontos do usuário

    - Caso SIM, vou fazer a pergunta de novo e o ciclo recomeça

    - console.log com \n porque tava dando agonia tudo junto
  */
  console.log('\n');

  pergunta = prompt('Deseja jogar uma nova partida?');
  
  if(pergunta == 'Nao'){
    console.log(`\nPontos Usuário: ${pontosUsuario}        |      Pontos PC: ${pontosPC}`);
    
    // # Mostrar mensagem no final indicando o grande campeão  
    if(pontosPC > pontosUsuario){
     console.log(`\nO grande vencedor: PC com incriveís ${pontosPC} pontos! 🏆\n`);
    }
    else if(pontosPC === pontosUsuario) {
      console.log('\nHouve um empate entre os dois jogadores !\n');
    }
    else{
      console.log(`\nO grande vencedor: Usuário com incriveís ${pontosUsuario} pontos! 🏆\n`);
    }
    
  }
  else{
    rodadas = prompt('Quantas rodadas você quer fazer? ');
  }
}while(pergunta !== 'Nao');

