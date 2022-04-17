// # Assim que a página carregar, vai executar as funções principais
window.addEventListener("load", function(){

  // Função que vai ser executada ao carregar página
  tocarEfeitoTeclado()
});

// # Função responsável por ativar o efeito de teclado e depois de 3seg ativar o som principal do jogo
function tocarEfeitoTeclado(){
  let audio_typing = new Audio('../sound/typing.mp3');
  audio_typing.play();

  setTimeout(() =>{
    let somPrincipal = new Audio('../sound/principal.mp3');
    somPrincipal.play();
  },3000)

}

// Objeto drPilgrin
let drPilgrin = {
  nome: 'Dr. Pilgrin',
  idade: 34,
  stamina: 100,
  esperanca: 100,
  felicidade: 100,

  // # Métodos do obj

  // Toda vez que o usuário apertar o botão de ficar em casa, a stamina vai ser decrementada em -20
  diminuirStamina: function(){
    this.stamina -= 20;
  },

  // Toda vez que o usuário apertar o botão para ir ao trabalho, vai ocorrer uma melhora nos atributos
  aumentarAtributos: function(){
    this.esperanca += 10;
    this.felicidade += 10;
  }
};



/*
  - O setTimeOut está ai, porque eu só quero que comece a "contar" os dias no loop, após 3 segundos
  - Esses 3 segundos é para dar tempo do usuário ver o que está escrito na tela, no caso a frase
  principal: "Em seis dias...", e também basicamente é o tempo do barulho do teclado acabar e 
  a musica principal começar.
*/

setTimeout(() => {

  // Temporizador de dias
  for(let i=1; i <=6; i++){

    // # Dia 1
    if(i == 1){
      console.log(i);
    }
    // # Dia 2
    if(i == 2){
      console.log(i);
    }
    // # Dia 3
    if(i == 3){
      console.log(i);
    }
    // # Dia 4
    if(i == 4){
      console.log(i);
    }
    // # Dia 5
    if(i == 5){
      console.log(i);
    }
    // # Dia 6
    if(i == 6){

    }
  }

},3000);
