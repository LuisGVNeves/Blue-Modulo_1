// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');


// # Funções que são invocadas ao decorrer da história
module.exports = function irPrimeiroDia(i){
  console.log('\n');
  console.log(`Você saindo de casa olha o jornal e descobre que seu rosto está no jornal! \x1b[31m[NOTÍCIA]:\x1b[0m "Hoje ${mostraData(i)} um time de cientistas liderados pelo Dr.${cientista.nome} conseguiram inventar uma vacina que cura o câncer. Essa vacina consegue destruir as células cancerigenas e também poderá ser usada para destruir outras células ruins do corpo humano. A cura é chamada atualmente de E48K15. 
  \n\n...Chegando no laboratório, todos te aplaudem, você se sente muito orgulhoso de ter feito algo grandioso para o mundo, porém, entrando na sua sala \x1b[31mvocê descobre algo errado nos testes.. Você acha que é apenas um erro bobo e ignora\x1b[0m.
  ${cientista.aumentarFelicidade(50)}`);
  console.log('\n');
}
