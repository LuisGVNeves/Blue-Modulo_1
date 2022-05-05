// # importando a função mostraData(i)
const mostraData = require('../mostraData.js');

// # Importando o objeto cientista
const cientista = require('../objeto.js');


// # Importando prompt
const prompt = require('prompt-sync')();


// # Importando a função de ir quinto dia
const irQuintoDia = require('../funcoes_irTrabalho/irQuintoSextoDia');


// # Ir quarto dia
module.exports = function irQuartoDia(i){
  
  console.log(`Hoje ${mostraData(i)} Os cientistas previram que até a manhã de amanhã, metade da população humana que estava viva na segunda-feira estará morta. Equipes de cientistas de todo o mundo ainda estão trabalhando em uma cura. Protestos estão ocorrendo em todo o mundo e saques em massa estão a todo vapor. Você saindo de casa, vê que a sua equipe de cientistas restantes estão na sua porta, e falaram que precisa de você agora no laboratório.. 
  \n \x1b[33mPorém, eles deram a opção de você ir ou ficar em casa\x1b[0m \n`);

  let irComSuaEquipe = prompt('\x1b[35mIr com sua equipe?\x1b[0m ').toUpperCase();

  // # Caso usuário queira ficar em casa
  if(irComSuaEquipe != 'SIM'){
    console.log('\n');
    console.log(`Você voltou para casa e ficou o dia todo com sua filha e sua esposa vendo desenhos, comendo muitos doces, porém, a tarde você fica com uma crise de ansiedade por saber que perdeu mais um dia de uma possível cura\n`);
    console.log(`
    ${cientista.aumentarDepressao(10)}
    ${cientista.decrementarSaude(10)}
    ${cientista.aumentarGordura(7)}
    `);
    
    // # 5 Dia
    irQuintoDia(i)
  }

  // # Caso usuário queira ir com  sua equipe para o trabalho
  if(irComSuaEquipe == 'SIM'){
    console.log('\n');
    console.log(`Chegando no trabalho com sua equipe, uma cientista que é afim de você, pergunta se você quer sair com ela..\n
    \x1b[33mVocê pode sair ou continuar procurando uma cura\x1b[0m \n`);
  
    let sairComCientista =  prompt('Deseja sair com a cientista gata e abandonar a cura? ').toUpperCase();

    // # Caso usuário não queira sair com a cientista
    if(sairComCientista != 'SIM'){
      console.log('\n');
      console.log(`Você recusou o convite e optou por continuar na pesquisa.. Infelizmente ainda não deu certo, mas você fez um progresso de 15%`);
      console.log(cientista.aumentarCura(12));

      btnEntrarQuartoMolly = prompt('\nDeseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\n');
        console.log('Sua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\n');
        console.log('\x1b[33mSua esposa faleceu pelo seu virus..\x1b[0m');

        // Todos os atributos do cientista foram zerados
        cientista.desistir();
      }

      let desejaTrabalhar = prompt('Deseja ir trabalhar?').toUpperCase();
      if(desejaTrabalhar == 'SIM'){
        console.log('\n');
        console.log(`Dr.${cientista.nome} está com depressão não consegue mais ir ao trabalho..\n\nHoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
      }
      else{
        console.log(`\n\nDe qualquer jeito, se você tivesse escolhido que queria ir para o trabalho, o Dr.${cientista.nome} recusaria.. Ele está com depressão não conseguiria mais ir ao trabalho..
        Hoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
      }
    }

    // # Caso usuário aceite sair com a cientista
    if(sairComCientista == 'SIM'){
      console.log('\n');
      console.log(`Você traiu sua esposa, você ficou ainda mais depressivo, você volta para casa tarde da noite..`);
      console.log('\n');
      
      btnEntrarQuartoMolly = prompt('Deseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\n');
        console.log('Sua filha está dormindo..');
        console.log('\n');
      }

      btnEntrarBanheiro = prompt('Deseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\n');
        console.log('A amiga da cientista gata que você saiu, disse para sua esposa que você traiu ela. Sua esposa faleceu pelo seu virus sabendo disso..');
        cientista.aumentarDepressao(100);
      }


      console.log(`\nHoje ${mostraData(i + 1)} você não dormiu..\n\n`);

      btnEntrarQuartoMolly = prompt('Deseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\n');
        console.log('Sua filha está dormindo..');
        console.log('\n');
      }

      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\n');
        console.log(`\x1b[33m...Dr.${cientista.nome} se recusa e entrar\x1b[0m`);
        console.log('\n');
      }

      let desejaTrabalhar = prompt('Deseja ir trabalhar?').toUpperCase();
      if(desejaTrabalhar == 'SIM'){
        console.log('\n');
        console.log(`Dr.${cientista.nome} está com depressão não consegue mais ir ao trabalho.. 
        \nHoje ${mostraData(i + 1)} \x1b[33m é o dia em que todas as células morrerão..\x1b[0m`);
        cientista.desistir();
      }
      else{
        console.log('\n');
        console.log(`De qualquer jeito, se você tivesse escolhido que queria ir para o trabalho, o Dr.${cientista.nome} recusaria.. 
        \nEle está com depressão não conseguiria mais ir ao trabalho.. Hoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
        cientista.desistir();
      }
    }
  }
  
}