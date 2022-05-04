// # importando a função mostraData(i)
const mostraData = require('./mostraData.js');

// # Importando o objeto cientista
const cientista = require('./objeto.js');

// # Importando prompt
const prompt = require('prompt-sync')();


// # Função que mostra no console as perguntas pro usuário, se ele quer ir no banheiro ou no quarto da molly de acordo com o dia
module.exports = function perguntasBasicas(i){
  let btnEntrarQuartoMolly;
  let btnEntrarBanheiro;
  if(i == 1){
    console.log('\n\n----------------------------------------------------------------------------------------------------------\n\n');


    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34m                        EM SEIS DIAS TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                  \x1b[0m`);
    console.log('');

    // # Caracteristicas Dr.
    console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
    \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%    💗Saúde: ${cientista.saude}    📆Dia: ${i}`);


    console.log('\n\n');
    console.log(`Você acorda numa ${mostraData(i)} sai do seu quarto e encontra sua esposa, 
    \nela diz para você se apressar para não se atrasar em ir ao trabalho`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly? \x1b[0m').toUpperCase();    
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');
      console.log(`Você entra no quarto da sua filha e ela pergunta se precisa ir pra escola hoje... Você diz que sim\n\n`);
    }

    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      let pesoPerdido = 2;
      cientista.pesoCientista -= pesoPerdido;
      console.log('\n');    
      console.log(`Você entra no banheiro e relaxa -${pesoPerdido} KG\n\n`);
    }
    
  }    
  if(i == 2){
    console.log('\n\n----------------------------------------------------------------------------------------------------------\n\n');

    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34m                        EM CINCO DIAS TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                  \x1b[0m`);
    console.log('');


    // # Caracteristicas Dr.
    console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
    \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%    💗Saúde: ${cientista.saude}    📆Dia: ${i}`);
  
  
  
    console.log('\n\n');
    console.log(`\x1b[31mVocê acorda com um pesadelo estranho.. Hoje é ${mostraData(i)} \x1b[0m`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no quarto da sua filha e ela fala que sua esposa está no banheiro..\n\n`);
    }
  
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro e sua esposa diz que o telefone tocou a manhã inteira querendo falar com você..
      \nEra seu trabalho ${cientista.aumentarAnsiedade(10)}`);
    }
  }
  if(i == 3){
    console.log('\n\n----------------------------------------------------------------------------------------------------------\n\n');

    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34m                        EM QUATRO DIAS TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                  \x1b[0m`);
    console.log('');
    
    
    // # Caracteristicas Dr.
    console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
    \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%    💗Saúde: ${cientista.saude}    📆Dia: ${i}`);
    

    console.log('\n\n');
    console.log(`\x1b[31m Hoje ${mostraData(i)} Você levanta da cama e sua esposa pergunta se você precisa mesmo ir pro trabalho, já que está tudo acabado.\x1b[0m`);
    console.log('\n');

    console.log(`${cientista.aumentarDepressao(8)}${cientista.aumentarAnsiedade(7)}`);    

      
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro, se olha no espelho e bate uma crise de arrependimento do porquê você fez a vacina.. ${cientista.aumentarAnsiedade(8)} ${cientista.aumentarDepressao(10)}`);
    }

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');
      console.log(`Você entra no quarto da sua filha e ela pergunta o porque não precisa ir pra escola hoje?..\n`);

      let resposta = prompt('\x1b[35mFale pra sua filha qualquer coisa para que ela entenda o porque ela não precisa ir para escola hoje: \x1b[0m');
    
      if(resposta.length < 20){
        console.log('\n');
        console.log(`Sua filha não gostou da sua resposta porque você deu uma resposta\x1b[31m menor que 20 letras..\x1b[0m Agora você tem que levar ela pra escola mesmo assim.\n
        ${cientista.decrementarDinheiro(100)} de gasolina ${cientista.aumentarAnsiedade(5)}`);
      }
      else{
        console.log(`Como você não teve preguiça de digitar uma boa resposta, sua filha aceitou sua resposta e ficou em casa.${cientista.aumentarAnsiedade(5)}\n`);
      }
    }

  }
  if(i == 4){
    console.log('\n\n----------------------------------------------------------------------------------------------------------\n\n');


    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34m                        EM TRÊS DIAS TODAS AS CÉLULAS DO PLANETA MORRERÃO, VOCÊ TEM UMA CHANCE!                                  \x1b[0m`);
    console.log('');
    
    
    // # Caracteristicas Dr.
    console.log(`\x1b[30mCARACTERISTICAS ATUAIS: do Dr.${cientista.nome}\x1b[0m 
    \n😔Depressão: ${cientista.depressao}    😥Ansiedade: ${cientista.ansiedade}    🎉Felicidade: ${cientista.felicidade}    💰Dinheiro: ${cientista.dinheiro}R$ \n\n🔟Peso: ${cientista.pesoCientista}    ⏱️ Progresso Cura: ${cientista.progressoCura}%    💗Saúde: ${cientista.saude}    📆Dia: ${i}`);
      

    console.log('\n\n');
    console.log(`\x1b[31m Hoje ${mostraData(i)} Você levanta da cama depressivo. ${cientista.aumentarDepressao(3)}\x1b[0m`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no quarto da sua filha e ela está dormindo`);
      console.log('\n');    
    }
  
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro, e toma um banho..`);
      console.log('\n');    
    }
  }
}
