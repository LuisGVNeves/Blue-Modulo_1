// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');


// # Importando prompt
const prompt = require('prompt-sync')();



// # Ir quinto dia e retorna a função de ir 6 dia também
module.exports = function irQuintoDia(i){
  // # Mensagem inicial assim que usuário sai do quarto
  console.log(`\x1b[34m                                                    EM DOIS DIAS TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                                    \x1b[0m`);
  console.log('');
  
  
  // # Caracteristicas Dr.
  console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
  \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%   💗Saúde: ${cientista.saude}    📆Dia: ${i}`);

  
  console.log('\n\n');
  console.log(`\nVocê acorda numa ${mostraData(i + 1)} sai do seu quarto depressivo embora ontem você tenha ficado feliz com sua familia\n`)

  btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
  if(btnEntrarQuartoMolly == 'SIM'){
    console.log(`\nMolly não está no quarto dela \n`);
  }

  btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
  if(btnEntrarBanheiro == 'SIM'){
    console.log(`\nMolly não está no banheiro também..\n`);
  }

  let procurarEsposaEmolly = prompt('Deseja procurar Molly e sua Esposa?').toUpperCase();
  if(procurarEsposaEmolly == 'SIM'){
  
    // Ao procurar a esposa e molly na rua, precisa abastecer, gastadno grana
    console.log('\n');
    let irNaRua = prompt('Deseja procurar Molly e sua Esposa na rua?').toUpperCase();
    console.log('\n');
  
    if(irNaRua == 'SIM'){
      console.log(`${cientista.decrementarDinheiro(277)} de gasolina para procurar sua filha Molly e sua Esposa..\n
      Você não achou e voltou pra casa e descobre que elas faleceram graças a sua vacina..`);
      cientista.aumentarDepressao(100);
    }
    else{
      console.log(`\n\x1b[31mVocê procura sua esposa e sua filha pela casa e descobre que elas faleceram graças a sua vacina.. Você passa o dia todo deprimido ouvindo musica.\x1b[0m`);
      cientista.aumentarDepressao(100);
    }

  }



  // #6 Dia
  function irSextoDia(){
    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34m                                                    EM UM DIA TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                                    \x1b[0m`);
    console.log('');
    
    
    // # Caracteristicas Dr.
    console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
    \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%    💗Saúde: ${cientista.saude}    📆Dia: ${i}`);
      
    
    console.log('\n\n');
    console.log('\nVocê não dormiu, apenas levantou e entrou no carro..\n');


    let destino = prompt('Deseja ir ao parque ou ir no trabalho? ').toUpperCase();
    if(destino == 'TRABALHO'){
      console.log(`\nVocê teve uma idéia genial no trabalho e conseguiu fazer a cura..\n`);
      
      // Aumentou a cura em 100%
      cientista.aumentarCura(100);

      let injetarCura = prompt("Você quer injetar a cura em você?💉").toUpperCase();
      if(injetarCura == 'SIM'){
        console.log(`\n\x1b[32mVocê injetou a cura, porém, essa cura parou seu coração..\x1b[0m\n`);
        cientista.desistir();
      }
      else{
        let telhadoOuParque = prompt('Você preferiu não tomar vacina para viver mais.. Você deseja ir no parque ou continuar no trabalho?').toUpperCase();
        if(telhadoOuParque == 'PARQUE'){
          console.log('\nVocê achou sua paz no parque..\n');
          cientista.desistir();
        }
        else{
          console.log('\nVocê achou a paz do seu jeito..\n');
          cientista.desistir();
        }

      }
    }
    if(destino == 'PARQUE'){
      console.log(`Você acendeu um cigarrinho e ficou em paz no parque.. Hoje sexta-feira todas as células irão falecer`);
      cientista.desistir();
    }
  }

  return irSextoDia();
}