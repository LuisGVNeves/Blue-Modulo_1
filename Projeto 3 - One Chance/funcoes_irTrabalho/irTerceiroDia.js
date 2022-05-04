// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');

// # Importando prompt
const prompt = require('prompt-sync')();



// # Ir Terceiro Dia
module.exports = function irTerceiroDia(i){
  console.log(`\nHoje ${mostraData(i)} Você saindo de casa extremamente ansioso, de praxe vai ler o jornal de novo: \x1b[31mNOTICIA: Líderes mundiais em todo o mundo se dirigiram ao seu povo e lhes falaram sobre o futuro "fim dos dias".\x1b[0mO vírus destruidor de células já está amplamente espalhado e está afetando o mundo. Os primeiros sinais do vírus em sua área aparentemente incluem a morte de plantas, isso inclui coisas como grama e árvores. Os cientistas dizem que, à taxa de propagação da infecção pode se alastrar pelo mundo todo. Você faz o discurso na conferência internacional, porém, você é vaiado ao vivo e vê que a população local está protestando nas ruas..\n...Chegando ao trabalho você nota que a maioria dos cientistas que trabalharam na vacina, já perderam suas esperanças.. 
  \n \x1b[31m o cientista Bruce disse que deve haver algo que você e ele podem fazer para arrumar a vacina.. Ele disse que se você quiser, pode abrir as portas do laboratório pra você estudar uma cura..\x1b[0m 
  \nOu..
  \n \x1b[35mVocê pode voltar para casa\x1b[0m \n`);
  /*
    # Objetivo: No 3 dia Cientista Bruce faz uma oferta pra procurar vacina, caso usuário vá
    ele aumenta o progresso da cura, caso não, ele vai ficar em casa porque no 3 dia que é
    quarta feira, a esposa dele disse que já estava tudo acabado, então isso demostivou ele.
  
  ### FIX
  */
  let ofertaBruce = prompt('\x1b[31mVocê deseja ir com Bruce para tentar fazer uma cura para a vacina?\x1b[0m ').toUpperCase();

  if(ofertaBruce != 'SIM'){
    console.log('\n');
    console.log('Você voltou para casa e ficou com sua esposa que tinha falado que já estava tudo fodido.');
    console.log(`${cientista.aumentarDepressao(5)}${cientista.decrementarSaude(30)}`);
  }
  if(ofertaBruce == 'SIM'){
    console.log('\n');
    console.log('A cura ainda não foi achada, mas você progrediu e conseguiu ver o principal problema da sua vacina. Sua depressão aumentou.');
    cientista.aumentarDepressao(11);
    cientista.aumentarFelicidade(10);
    cientista.aumentarCura(5);
  }
  
}