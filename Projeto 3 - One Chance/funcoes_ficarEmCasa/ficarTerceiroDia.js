// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');

// # Ficar em casa terceiro dia
module.exports = function ficarTerceiroDia(i){
  console.log(`\nA pergunta da sua esposa mexeu com você, e você ficou desmotivado de querer ir procurar uma cura, então você resolveu ficar em casa, no sofá deprimido e comendo sorvete com sua filha.. 
  \nNa tv você vê a noticia: Hoje ${mostraData(i)} \x1b[31m[líderes mundiais em todo o mundo se dirigiram ao seu povo e lhes falaram sobre o futuro "fim dos dias".\x1b[0m
  \nO vírus destruidor de células já está amplamente espalhado e está afetando o mundo. 
  \nOs primeiros sinais do vírus em sua área aparentemente incluem a morte de plantas, isso inclui coisas como grama e árvores. 
  \nOs cientistas dizem que, à taxa de propagação da infecção pode se alastrar pelo mundo todo.\n
  ${cientista.aumentarDepressao(20)}${cientista.aumentarGordura(10)}
  `);
}
