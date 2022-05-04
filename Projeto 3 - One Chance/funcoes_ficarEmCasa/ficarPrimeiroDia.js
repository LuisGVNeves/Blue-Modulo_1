// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');


// # Ficar em casa primeiro dia
module.exports = function ficarPrimeiroDia(i){
  console.log(`\nHoje ${mostraData(i)} você preferiu ficar em casa com sua familia relaxando, você diz para sua esposa que hoje vai ficar em casa com eles..
  \nSua esposa e filha ficaram felizes. Você foi comprar pão e viu que no jornal a frente da sua casa, estava com seu rosto, parabenizando você e sua equipe pela vacina E48K15 cura do câncer.
  \n\x1b[32m${cientista.decrementarDinheiro(30)}\x1b[0m do pão`);
  console.log('');
}
