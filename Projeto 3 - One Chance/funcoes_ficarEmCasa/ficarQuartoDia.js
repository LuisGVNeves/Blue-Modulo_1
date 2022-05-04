// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');

// # importando o prompt
const prompt = require('prompt-sync')();

// # Importando a função de ir quinto dia
const irQuintoDia = require('../funcoes_irTrabalho/irQuintoSextoDia');


// # Ficar em casa quarto dia
module.exports = function ficarQuartoDia(i){
  console.log(`
  Sua depressão está aumentando, você acaba de ligar a tv hoje ${mostraData(i)} e vê que: Os cientistas previram que até a manhã de amanhã, \x1b[33m metade da população humana que estava viva na segunda-feira irá falecer. 
  
  Equipes de cientistas de todo o mundo ainda estão trabalhando em uma cura. Protestos estão ocorrendo em todo o mundo e saques em massa estão em vigor.

  Algumas horas se passam e batem na sua porta.. É a sua equipe restantes de cientistas, eles querem você no trabalho hoje ! 

  \x1b[33mPorém, eles deram a opção de você ir ou ficar em casa\x1b[0m \n
  `)
  
  let irComSuaEquipe = prompt('Ir com sua equipe ? ').toUpperCase();

  // # Caso usuário não queira ir com sua equipe - Nesse caso a esposa e filha duram mais vai invocar a irQuintoDia(i)
  if(irComSuaEquipe != 'SIM'){
    console.log(`\nVocê voltou para casa e ficou o dia todo com sua filha e sua esposa vendo desenhos, comendo muitos doces.. 
    \nPorém, a tarde você fica com uma crise de ansiedade por saber que perdeu mais um dia de uma possível cura\n`);
    
    cientista.aumentarGordura(10);
    cientista.aumentarDepressao(10);

    // # 5 Dia
    irQuintoDia(i)
  }
  // # Caso usuário queira ir com  sua equipe
  if(irComSuaEquipe == 'SIM'){
    
    // Pergunta desistir de tudo caso a esposa do Dr faleça
    let desistir;

    console.log(`Chegando no trabalho com sua equipe, uma cientista que é afim de você, pergunta se você quer sair com ela.. 
    \n \x1b[33mVocê pode sair ou continuar procurando uma cura\x1b[0m`);
  
    let sairComCientista =  prompt('\nDeseja sair com a cientista gata e abandonar a cura? ').toUpperCase();

    // # Caso usuário não queira sair com a cientista
    if(sairComCientista != 'SIM'){
      console.log(`\n\x1b[33mVocê recusou o convite e optou por continuar na pesquisa.. Infelizmente ainda não deu certo, mas você fez um progresso de 15%\x1b[0m
      \nVoltando para casa tarde da noite.. Aconteceu algo na sua casa 😟\x1b[0m`);
      cientista.aumentarCura(14);

      btnEntrarQuartoMolly = prompt('\nDeseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      // # Esposa do Dr.Pilgrin falece
      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\n \x1b[31mSua esposa está na banheira e faleceu pelo seu virus..\x1b[0m');
        
        // # Cientista ficou muito triste
        cientista.aumentarDepressao(100);
      
        desistir = prompt('\nVocê deseja desistir de tudo? ').toUpperCase();
        if(desistir == 'SIM'){
          console.log(`\n \x1b[0mVocê desistiu de tudo, sua filha faleceu algumas horas depois pelo virus.. Amanhã é o fim para todos\x1b[0m \n`);
        }
        else{
          console.log(`\nVocê não dormiu, o dia já amanheceu..\n`);

          btnEntrarQuartoMolly = prompt('\nEntrar no quarto da molly? ').toUpperCase();
        
          if(btnEntrarQuartoMolly == 'SIM' || btnEntrarQuartoMolly == 'NAO'){
            console.log(`\n \x1b[32m Você entrou no quarto da Molly mesmo sem ter vontade, ela pergunta onde está a mamãe... Você apenas leva ela pra passear de carro. \x1b[0m \n`);
          }

          // # Destino pra levar a Molly
          let destino = prompt('\nDeseja levar Molly ao parque ou trabalho? ').toUpperCase();
          
          if(destino == 'TRABALHO'){
            console.log(`\nVocê optou por levar Molly ao seu trabalho ao invés do parque.. Ela brincou com as vacinas do laboratório, e no fim da tarde, morreu pela infecção da sua vacina..\n
            \nVocê já está verde e sua hora está chegando.. Você então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido\n`);
            cientista.decrementarSaude(100);
          }
          if(destino == 'PARQUE'){
            cientista.decrementarSaude(100);

            console.log(`\nMolly faleceu no parque por conta do virus. Algumas horas depois, você foi infectado pelo virus, e também faleceu.
            \n \x1b[32mVocê então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido\x1b[0m \n`);
          }

        }
      }

    }
    
    // # Caso usuário queira sair com a cientista
    if(sairComCientista == 'SIM'){
      console.log('\n');
      console.log(`Você traiu sua esposa, você ficou ainda mais depressivo,\x1b[31m você volta para casa tarde da noite..\x1b[0m`);
      console.log('\n');
      
      // Aumentar tristeza
      cientista.aumentarDepressao(100)

      btnEntrarQuartoMolly = prompt('Deseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('Deseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\nA amiga da cientista gata que você saiu, disse para sua esposa que você traiu ela.\x1b[31m Sua esposa faleceu pelo seu virus sabendo disso..\x1b[0m \n');
    
        desistir = prompt('\x1b[31mVocê deseja desistir de tudo? ').toUpperCase();
        if(desistir == 'SIM'){
          console.log(`\nVocê desistiu de tudo, sua filha faleceu algumas horas depois pelo virus\n`);
        }
        else{
          console.log(`\nVocê não dormiu, o dia já amanheceu..\n`);

          btnEntrarQuartoMolly = prompt('Entrar no quarto da molly? ').toUpperCase();
          if(btnEntrarQuartoMolly == 'SIM' || btnEntrarQuartoMolly == 'NAO'){
            console.log(`\nVocê entrou no quarto da Molly mesmo sem ter vontade, ela pergunta onde está a mamãe... Você apenas leva ela pra passear de carro.\n`);
          }

          // # Destino pra levar a Molly
          let destino = prompt('Deseja levar Molly ao parque ou ao trabalho? ').toUpperCase();
          if(destino == 'TRABALHO'){
            console.log(`\nVocê optou por levar Molly ao seu trabalho ao invés do parque.. Ela brincou com as vacinas do laboratório, e no fim da tarde, morreu pela infecção da sua vacina.. 
            \nVocê já está verde e sua hora está chegando..`);

            cientista.decrementarSaude(100);
            
            console.log(`\x1b[32mVocê então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido\x1b[0m \n`)
          }
          if(destino == 'PARQUE'){
            console.log(`\nMolly faleceu no parque por conta do virus. Algumas horas depois, você foi infectado pelo virus, e também morreu.\n
            \x1b[32mVocê então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido \x1b[0m \n`);
          }
        }
    
      }
    }

  }
}
