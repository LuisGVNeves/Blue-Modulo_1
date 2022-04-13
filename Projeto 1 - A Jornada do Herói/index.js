/*

  Background pensado:
    Um criminoso chamado Bob foi investigado por roubar uma loja de pão, a policia concluiu as seguintes
    caracteristicas de bob:
     - Nome: Bob
     - Idade: 26
     - Horário e lugar do roubo: rua Keneddy as 23:00
     - Vestimenta: Camiseta preta e óculos escuros
     - Tamanho do seu tênis: 37

*/


// Importando biblioteca prompt
const prompt = require('prompt-sync')();

// # Pergunta ao usuário - Ser utilizado com prompt
let pergunta;

// # Variável para ser contada no DO WHILE loop
let contador = 1;

// # Variáveis que vão armazenar quantas vezes o usuário digitou sim ou não
let qtdSim = 0;
let qtdNao = 0;


do {
  /*
    # Simulei 5 rodadas de perguntas no loop, utilizando o contador, a cada rodada vai surgir um prompt
    perguntando sobre bob.
    - Se o usuário responder Sim ou sim, vou incrementar a variável de contagem qtdSim
    - Se o usuário responder Não ou Nao ou nao ou não, vou incrementar a variável de contagem qtdSim
    - Se não vou retornar que a resposta foi inválida
  */
  if(contador == 1){
    pergunta = prompt('Seu nome é Bob? Sim | Não: ');

    if(pergunta == 'Sim' || pergunta == 'sim'){
      qtdSim++;
    }
    else if(pergunta == 'Não' || pergunta == 'Nao' || pergunta == 'não' || pergunta == 'nao'){
      qtdNao++;
    }
    else {
      console.log('Resposta inválida');
    }
  }
  if(contador == 2){
    pergunta = prompt('Sua idade é 26? Sim | Não: ');
    
    if(pergunta == 'Sim' || pergunta == 'sim'){
      qtdSim++;
    }
    else if(pergunta == 'Não' || pergunta == 'Nao' || pergunta == 'não' || pergunta == 'nao'){
      qtdNao++;
    }
    else {
      console.log('Resposta inválida');
    }
  }
  if(contador == 3){
    pergunta = prompt('Você estava na rua Keneddy as 23:00? Sim | Não: ');
    
    if(pergunta == 'Sim' || pergunta == 'sim'){
      qtdSim++;
    }
    else if(pergunta == 'Não' || pergunta == 'Nao' || pergunta == 'não' || pergunta == 'nao'){
      qtdNao++;
    }
    else {
      console.log('Resposta inválida');
    }
  }
  if(contador == 4){
    pergunta = prompt('Você estava vestido de camiseta preta e óculos escuros? Sim | Não: ');

    if(pergunta == 'Sim' || pergunta == 'sim'){
      qtdSim++;
    }
    else if(pergunta == 'Não' || pergunta == 'Nao' || pergunta == 'não' || pergunta == 'nao'){
      qtdNao++;
    }
    else {
      console.log('Resposta inválida');
    }
  }
  if(contador == 5){
    pergunta = prompt('O tamanho do seu tênis era 37? Sim | Não: ');
    
    if(pergunta == 'Sim' || pergunta == 'sim'){
      qtdSim++;
    }
    else if(pergunta == 'Não' || pergunta == 'Nao' || pergunta == 'não' || pergunta == 'nao'){
      qtdNao++;
    }
    else {
      console.log('Resposta inválida');
    }
  }
  
  contador++;
}while(contador <= 5);

/*
  - Aqui eu faço as condições pra ver se é culpado ou não baseado na quantidade de sim ou não
*/

if(qtdSim >= 5){
  console.log('Você é o culpado!!');
} 
else if(qtdSim >= 4){
  console.log('Você esta se tornando bem suspeito !');
}
else if(qtdSim >=3){
  console.log('Você está entrando em uma linha tênue entre suspeito e malvado');
}
else if(qtdSim >= 2){
  console.log('Você está livre por enquanto');
}
else{
  console.log('Você é inocente !');
}