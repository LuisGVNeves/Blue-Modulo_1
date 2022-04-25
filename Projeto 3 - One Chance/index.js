// # Variáveis para armazenar os status do personagem.
const drPilgrin = {
  saude: 100,
  felicidade: 100,
  depressao: 0,
  dinheiro: 1000,

  // Métodos do obj
  incrementarAtributos: function(){
    if(this.felicidade <= 100 || this.saude <= 100){
      this.felicidade += 10;
      this.saude += 10;
      this.dinheiro += 100;
    }
  },
  decrementarAtributos: function(){
    this.felicidade -= 10;
    this.saude -= 10;
    this.dinheiro -= 100;
    this.depressao += 20;
  }
};

// # importando o prompt
const prompt = require('prompt')();

// # Mensagem inicial do jogo
console.log('Você é um cientista chamado Dr.Pilgrin, você na tarde de ontem desenvolveu uma cura para o câncer.. Porém, você não esperava que essa cura poderia se tornar um pesadelo... Você tem seis dias!');
