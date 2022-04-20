// # Objetivo: Assim que a página carregar, vai executar a função de tocar Música
window.addEventListener("load", function(){
  tocarMusicas()
});

// # Função responsável por ativar o efeito de teclado e depois de 3seg ativar o som principal do jogo
function tocarMusicas(){
  let audio_typing = new Audio('../sound/typing.mp3');
  audio_typing.play();

  setTimeout(() =>{
    let somPrincipal = new Audio('../sound/principal.mp3');
    somPrincipal.play();
  },3000)
}

// # Personagem principal = Objeto Dr.Pilgrin
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
  Objetivo:
  - SetTimeOut de 3seg, para que dê tempo do usuário conseguir ver a animação do <h1,
  e também que consiga escutar o barulhinho do teclado
  - Junto vou iniciar a contagem dos dias baseado nos cliques dos botões
  - Se o usuário clicar nos botões ir trabalhar ou ficar em casa, antes de dar 3seg 
  não vai dar em nada, porque o fluxo só vai começar depois de 3seg
*/

setTimeout(() => {
  // Variáveis do DOM, para serem acessadas após 3 seg

  // # Imagem principal home
  let imagem_dr = document.getElementById('imagem-dr');
  
  // # Titulo principal: "Em cinco dias, todas as celulas..."
  let h1 = document.getElementById('h1-principal');

  // # Botões de ficar em casa ou ir trabalhar
  let btn_FicarEmCasa = document.getElementById('btn-ficarEmCasa');
  let btn_irTrabalhar = document.getElementById('btn-irTrabalhar');
  
  // # Paragrafo que mostra motivação ao escolher ir pro trabalho ou ficar em casa
  let paragrafoMotivacao = document.getElementById('motivacao');

  // # Foto do dr. no trabalho
  let fotoDrNoTrabalho = document.getElementById('drTrabalhoPhoto');
  
  // # Container da barra de progresso
  let container_barra_progresso = document.querySelector('#container-barra-progresso');


  // Porcentagem da barra de progresso animado
  let porcentoBarra = document.getElementById('porcento-numero');


  // # Progresso do usuário que vai ser incrementado toda vez que ele ir pro trabalho
  let progresso = [];
  
  /*
    Objetivo: Controle de passagem do tempo
    - Decrementar os dias na frase principal do <h1>
    "Em SEIS dias, todas as células...."
    "Em CINCO dias, todas as células...."
    "Em UM DIA, todas as celulas.."
  */
  let dias_contados = document.getElementById('dias-contados');
  let dia = document.getElementById('dias');
  function decrementarDias(){
    if(contadorFicarEmCasa == 1 || contadorTrabalho == 1){
      dias_contados.innerText = 'quatro';
    }
    if(contadorFicarEmCasa == 2 || contadorTrabalho == 2){
      dias_contados.innerText = 'três';
    }    
    if(contadorFicarEmCasa == 3 || contadorTrabalho == 3){
      dias_contados.innerText = 'dois';
    }
    if(contadorFicarEmCasa == 4 || contadorTrabalho == 4){
      dias_contados.innerText = 'um';
      dia.innerText = 'dia';
    }
    if(contadorFicarEmCasa == 5 || contadorTrabalho == 5){
      // Concatenei o texto assim para não perder o efeito de digitação no css
      h1.innerText = 'Finalmente' +' temos'+ ' a'+ ' alegria'+ ' de'+ ' anunciar'+ ' a' + 'cura '+' do ' + ' corona '+ ' virus'+ ' foi'+ ' alcançada'+ ' !'+ ' Parabéns'+ ' Dr'+' .'+ ' Pilgrin';
    }
  }

  // # Funcao adicionar classe hidden para esconder os elementos
  function addHidden(elemento){
    elemento.classList.add('hidden');
  }
  
  // # Função remover classe hidden para aparecer os elementos
  function removeHidden(elemento){
    elemento.classList.remove('hidden');
  }
  
  // # Função para incrementar progresso no array
  function aumentarProgresso(num){
    return progresso.push(num);
  }
  
  // # Função para mostrar o quanto o usuário avançou na pesquisa
  function avancouNaPesquisa(){
    for(let i=0; i< progresso.length; i++){
      if(progresso[i] == 20){
        paragrafoMotivacao.innerText = `Você foi ao trabalho e avançou 20% na pesquisa ! parabéns`;
        porcentoBarra.innerText = '20%';
      }
      if(progresso[i] == 40){
        paragrafoMotivacao.innerText = `Você foi ao trabalho e avançou 40% na pesquisa ! parabéns`;
        porcentoBarra.innerText = '40%';
      }
      if(progresso[i] == 60){
        paragrafoMotivacao.innerText = `Você foi ao trabalho e avançou 60% na pesquisa ! parabéns`;
        porcentoBarra.innerText = '60%';
      }
      if(progresso[i] == 80){
        paragrafoMotivacao.innerText = `Você foi ao trabalho e avançou 80% na pesquisa ! parabéns`;
        porcentoBarra.innerText = '80%';
      }
      if(progresso[i] == 100){
        paragrafoMotivacao.innerText = `Você foi ao trabalho e avançou 100% na pesquisa ! parabéns`;
        porcentoBarra.innerText = '100%';
      }
    }
  }

  /*
    # Case para quando o usuário for trabalhar
    - Se ele clicar no botão ir trabalhar, o contadorTrabalho vai incrementar em 1, então isso mostra
    que o usuário foi trabalhar 1 vez, cada vez que esse botão é clicado, essa variável é incrementada.
  */
  let contadorTrabalho = 0;
  btn_irTrabalhar.addEventListener('click', function(){

    // Incrementação da variável que indica que usuário clicou no botão de ir trabalhar
    contadorTrabalho++;

    // # DIA 1 INDO AO TRABALHO
    if(contadorTrabalho == 1){
      console.log('Foi ao trabalho primeiro dia');

      /*
        Objetivo:
        - Usuário escolheu ir trabalhar, portanto os elementos que estavam disponíveis
        precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(imagem_dr);
      addHidden(h1);
      addHidden(btn_FicarEmCasa);
      /*
        Objetivo:
        - Mostrar a barra de progresso que a cura do corona está chegando
        - Adicionar no array o progresso +20%
        - Adicionar palavra de motivação ao usuário escolher ir trabalhar
        - Aumentar o atributo do personagem
        - Decrementar o dia

        ** IMPORTANTE **
        A barra de progresso tem uma animação de 5 segundos, então após 6seg eu vou liberar de novo
        os botões de ir ao trabalho ou de ficarem em casa para serem clicados novamente
      */

      // Aumentando progresso do array
      aumentarProgresso(20);
           
      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();
     
      // Palavra de motivação ao usuário escolher ir trabalhar, mostrando que aumentou a % da barra
      avancouNaPesquisa()

      // Mostrando a barra de progresso + as porcentagens + paragrafo de motivação
      removeHidden(container_barra_progresso);
      removeHidden(porcentoBarra);
      removeHidden(paragrafoMotivacao);

      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);
        removeHidden(h1);
        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        addHidden(container_barra_progresso);
        addHidden(paragrafoMotivacao);
        addHidden(fotoDrNoTrabalho);

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();

      },6000)

    }
    // # DIA 2 INDO AO TRABALHO
    if(contadorTrabalho == 2 && contadorFicarEmCasa == 0){
      console.log('Foi ao trabalho pela segunda vez');
  
      /*
        Objetivo:
        - Usuário escolheu ir trabalhar, portanto os elementos que estavam disponíveis
        precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(imagem_dr);
      addHidden(h1);
      addHidden(btn_FicarEmCasa);
      /*
        Objetivo:
        - Mostrar a barra de progresso que a cura do corona está chegando
        - Adicionar no array o progresso +20%
        - Adicionar palavra de motivação ao usuário escolher ir trabalhar
        - Aumentar o atributo do personagem
        - Decrementar o dia

        ** IMPORTANTE **
        A barra de progresso tem uma animação de 5 segundos, então após 6seg eu vou liberar de novo
        os botões de ir ao trabalho ou de ficarem em casa para serem clicados novamente
      */
  
      // Aumentando progresso do array
      aumentarProgresso(40);
            
      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();
      
      // Palavra de motivação ao usuário escolher ir trabalhar, mostrando que aumentou a % da barra
      avancouNaPesquisa()

      // Mostrando a barra de progresso + as porcentagens + paragrafo de motivação
      removeHidden(container_barra_progresso);
      removeHidden(porcentoBarra);
      removeHidden(paragrafoMotivacao);

      // # Após 6 segundos...
      setTimeout(() => {
  
        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);
        removeHidden(h1);
        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        addHidden(container_barra_progresso);
        addHidden(paragrafoMotivacao);
        addHidden(fotoDrNoTrabalho);

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();
  
      },6000)

    }
    // # DIA 3 INDO AO TRABALHO
    if(contadorTrabalho == 3 && contadorFicarEmCasa == 0){
      console.log('Foi ao trabalho pela terceira vez');
  
      /*
        Objetivo:
        - Usuário escolheu ir trabalhar, portanto os elementos que estavam disponíveis
        precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(imagem_dr);
      addHidden(h1);
      addHidden(btn_FicarEmCasa);
      /*
        Objetivo:
        - Mostrar a barra de progresso que a cura do corona está chegando
        - Adicionar no array o progresso +20%
        - Adicionar palavra de motivação ao usuário escolher ir trabalhar
        - Aumentar o atributo do personagem
        - Decrementar o dia

        ** IMPORTANTE **
        A barra de progresso tem uma animação de 5 segundos, então após 6seg eu vou liberar de novo
        os botões de ir ao trabalho ou de ficarem em casa para serem clicados novamente
      */

      // Aumentando progresso do array
      aumentarProgresso(60);
            
      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();
      
      // Palavra de motivação ao usuário escolher ir trabalhar, mostrando que aumentou a % da barra
      avancouNaPesquisa()

      // Mostrando a barra de progresso + as porcentagens + paragrafo de motivação
      removeHidden(container_barra_progresso);
      removeHidden(porcentoBarra);
      removeHidden(paragrafoMotivacao);

      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);
        removeHidden(h1);
        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        addHidden(container_barra_progresso);
        addHidden(paragrafoMotivacao);
        addHidden(fotoDrNoTrabalho);

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();

      },6000)

    }
    // # DIA 4 INDO AO TRABALHO
    if(contadorTrabalho == 4 && contadorFicarEmCasa == 0){
      console.log('Foi ao trabalho pela quarta vez');
   
      /*
        Objetivo:
        - Usuário escolheu ir trabalhar, portanto os elementos que estavam disponíveis
        precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(imagem_dr);
      addHidden(h1);
      addHidden(btn_FicarEmCasa);
      /*
        Objetivo:
        - Mostrar a barra de progresso que a cura do corona está chegando
        - Adicionar no array o progresso +20%
        - Adicionar palavra de motivação ao usuário escolher ir trabalhar
        - Aumentar o atributo do personagem
        - Decrementar o dia

        ** IMPORTANTE **
        A barra de progresso tem uma animação de 5 segundos, então após 6seg eu vou liberar de novo
        os botões de ir ao trabalho ou de ficarem em casa para serem clicados novamente
      */

      // Aumentando progresso do array
      aumentarProgresso(80);
            
      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();
      
      // Palavra de motivação ao usuário escolher ir trabalhar, mostrando que aumentou a % da barra
      avancouNaPesquisa()

      // Mostrando a barra de progresso + as porcentagens + paragrafo de motivação
      removeHidden(container_barra_progresso);
      removeHidden(porcentoBarra);
      removeHidden(paragrafoMotivacao);

      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);
        removeHidden(h1);
        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        addHidden(container_barra_progresso);
        addHidden(paragrafoMotivacao);
        addHidden(fotoDrNoTrabalho);

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();

      },6000)
    }
    // # DIA 5 INDO AO TRABALHO
    if(contadorTrabalho == 5 && contadorFicarEmCasa == 0){
      console.log('Foi ao trabalho pela quinta vez');
  
      /*
        Objetivo:
        - Usuário escolheu ir trabalhar, portanto os elementos que estavam disponíveis
        precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(imagem_dr);
      addHidden(h1);
      addHidden(btn_FicarEmCasa);
      /*
        Objetivo:
        - Mostrar a barra de progresso que a cura do corona está chegando
        - Adicionar no array o progresso +20%
        - Adicionar palavra de motivação ao usuário escolher ir trabalhar
        - Aumentar o atributo do personagem
        - Decrementar o dia

        ** IMPORTANTE **
        A barra de progresso tem uma animação de 5 segundos, então após 6seg eu vou liberar de novo
        os botões de ir ao trabalho ou de ficarem em casa para serem clicados novamente
      */
  
      // Aumentando progresso do array
      aumentarProgresso(100);
            
      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();
      
      // Palavra de motivação ao usuário escolher ir trabalhar, mostrando que aumentou a % da barra
      avancouNaPesquisa()

      // Mostrando a barra de progresso + as porcentagens + paragrafo de motivação
      removeHidden(container_barra_progresso);
      removeHidden(porcentoBarra);
      removeHidden(paragrafoMotivacao);

      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);
        removeHidden(h1);
        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        addHidden(container_barra_progresso);
        addHidden(paragrafoMotivacao);
        addHidden(fotoDrNoTrabalho);

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();

      },6000);

    }

  });



  /*
    # Case para quando o usuário NÃO for trabalhar
    - Se ele clicar no botão ficar em casa, o contadorFicarEmCasa vai incrementar em 1, então isso mostra
    que o usuário ficou em casa 1 vez, cada vez que esse botão é clicado, essa variável é incrementada.
  */
  let contadorFicarEmCasa = 0;
  
  // # container de qnd usuário fica em casa
  let ficarEmCasa_container = document.querySelector('.ficar-emCasa-container');
  
  // # Frase pra quando usuário escolher ficar em casa
  let ficarEmCasa_frase = document.getElementById('ficarEmCasa-frase');

  btn_FicarEmCasa.addEventListener('click', function(){
    
    contadorFicarEmCasa++;

    // # Ficou em casa primeiro dia
    if(contadorFicarEmCasa == 1){
      console.log('ficou em casa');
      /*
      Objetivo:
      - Usuário escolheu ficar em casa, portanto os elementos que estavam disponíveis
      precisam desaparecer, para isso vou adicionar a classe hidden neles
      */
      addHidden(btn_irTrabalhar);
      addHidden(btn_FicarEmCasa);
      addHidden(imagem_dr);
      addHidden(h1);

      // # Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
      removeHidden(ficarEmCasa_container);
      ficarEmCasa_frase.innerText = "Você" +" ficou" +" em" +" casa" +" com sua filha molly," +" ela" +" está" +" muito feliz," + " alguns" + " casos"+ " de" + " morte" + " se" + " alastram pelo país.";

      
      // # Adicionando a foto da molly feliz tirando a classe hidden
      let mollyPhoto = document.getElementById('mollyPhoto');
      removeHidden(mollyPhoto);


      // # Objetivo: Ao clicar no icone jornal, a imagem do primeiro dia de falta no emprego deve aparecer
      let iconeJornal = document.getElementById('icone-jornal');
      let primeiroDiaFalta = document.getElementById('primeiro-dia-falta');

      iconeJornal.addEventListener('click', function(){
        removeHidden(primeiroDiaFalta);
      })
  
  
      /*
        Objetivo:
        - diminuir no array o progresso -20%
        - Adicionar palavra de motivação/desmotivação ao usuário escolher ficar em casa
        - diminuir o atributo do personagem
        - Decrementar o dia
      */
        

      // Aumentando atributos do personagem
      drPilgrin.diminuirStamina();

      // Diminuindo progresso do array
      progresso.push('-20%');
  
  
      /* # Após 3 segundos...*/
      setTimeout(() => {
        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        removeHidden(btn_irTrabalhar);
        removeHidden(btn_FicarEmCasa);
        removeHidden(imagem_dr);

        /*
          Objetivo:
          - O usuário escolheu ficar em casa, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();
  
      },3000)
          
    }
    // # Ficou em casa segundo dia
    if(contadorFicarEmCasa == 2){
      console.log('Foi ao trabalho');
    }
    // # Ficou em casa terceiro dia
    if(contadorFicarEmCasa == 3){
      console.log('Foi ao trabalho');
    }
    // # Ficou em casa quarto dia
    if(contadorFicarEmCasa == 4){
      console.log('Foi ao trabalho');
    }
    // # Ficou em casa quinto dia
    if(contadorFicarEmCasa == 5){
      console.log('Foi ao trabalho');
    }
    if(contadorFicarEmCasa == 6){
      console.log('Foi ao trabalho');
    }

  });


},3000);
