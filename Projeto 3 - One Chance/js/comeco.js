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
  let imagem_dr = document.getElementById('imagem-dr');
  let h1 = document.getElementById('h1-principal');
  let btn_FicarEmCasa = document.getElementById('btn-ficarEmCasa');
  let btn_irTrabalhar = document.getElementById('btn-irTrabalhar');
  let paragrafoMotivacao = document.getElementById('motivacao');
  let fotoDrNoTrabalho = document.getElementById('work');
  let container_barra_progresso = document.querySelector('#container-barra-progresso');

  let vinte_porcento = document.getElementById('vinte-porcento');
  let quarenta_porcento  = document.getElementById('quarenta-porcento');
  let sessenta_porcento = document.querySelector('#sessenta-porcento');
  let oitenta_porcento = document.querySelector('#oitenta-porcento');
  let cem_porcento = document.getElementById('cem-porcento');


  // Progresso do usuário
  let progresso = [];
  
  /*
    Objetivo:
    - Decrementar os dias na frase principal do <h1>
    "Em SEIS dias, todas as células...."
    "Em CINCO dias, todas as células...."
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
      h1.innerText = 'A '+' cura '+' do ' + ' corona '+ ' virus'+ ' foi'+ ' alcançada'+ ' !'+ ' Parabéns'+ ' Dr'+' .'+ ' Pilgrin';
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
      btn_irTrabalhar.classList.add('hidden');
      imagem_dr.classList.add('hidden');
      h1.classList.add('hidden');
      btn_FicarEmCasa.classList.add('hidden');


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
      
      // Removendo a classe Hidden para que a barra apareça na tela
      container_barra_progresso.classList.remove('hidden');

      // Tirando a classe hidden, para que o <h2> com 20% apareça
      vinte_porcento.classList.remove('hidden');

      // Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
      paragrafoMotivacao.innerText = "Você foi ao trabalho e avançou 20% na pesquisa ! parabéns"
      paragrafoMotivacao.classList.remove('hidden');

      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();

      // Aumentando progresso do array
      progresso.push('20%');


      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        btn_irTrabalhar.classList.remove('hidden');
        btn_FicarEmCasa.classList.remove('hidden');
        imagem_dr.classList.remove('hidden');
        h1.classList.remove('hidden');


        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        container_barra_progresso.classList.add('hidden');
        paragrafoMotivacao.classList.add('hidden');
        fotoDrNoTrabalho.classList.add('hidden');

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
      btn_irTrabalhar.classList.add('hidden');
      imagem_dr.classList.add('hidden');
      h1.classList.add('hidden');
      btn_FicarEmCasa.classList.add('hidden');


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
      
      // Removendo a classe Hidden para que a barra apareça na tela
      container_barra_progresso.classList.remove('hidden');

      // Tirando a classe hidden, para que o <h2> com 40% apareça
      quarenta_porcento.classList.remove('hidden');

      // Adicionando classe hidden, para que os 20% desapareça
      vinte_porcento.classList.add("hidden");


      // Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
      paragrafoMotivacao.innerText = "Você foi ao trabalho e avançou 40% na pesquisa ! parabéns"
      paragrafoMotivacao.classList.remove('hidden');

      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();

      // Aumentando progresso do array
      progresso.push('40%');


      // # Após 6 segundos...
      setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        btn_irTrabalhar.classList.remove('hidden');
        btn_FicarEmCasa.classList.remove('hidden');
        imagem_dr.classList.remove('hidden');
        h1.classList.remove('hidden');


        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        container_barra_progresso.classList.add('hidden');
        paragrafoMotivacao.classList.add('hidden');
        fotoDrNoTrabalho.classList.add('hidden');

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
        btn_irTrabalhar.classList.add('hidden');
        imagem_dr.classList.add('hidden');
        h1.classList.add('hidden');
        btn_FicarEmCasa.classList.add('hidden');
  
  
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
        
        // Removendo a classe Hidden para que a barra apareça na tela
        container_barra_progresso.classList.remove('hidden');
  
        
        // Adicionando classe hidden, para que os 20% | 40% desapareça
        vinte_porcento.classList.add("hidden");
        quarenta_porcento.classList.add("hidden");
        
        // Tirando a classe hidden, para que o <h2> com 60% apareça
        sessenta_porcento.classList.remove('hidden');
  
        // Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
        paragrafoMotivacao.innerText = "Você foi ao trabalho e avançou 60% na pesquisa ! parabéns"
        paragrafoMotivacao.classList.remove('hidden');
  
        // Aumentando atributos do personagem
        drPilgrin.aumentarAtributos();
  
        // Aumentando progresso do array
        progresso.push('60%');
  
  
        // # Após 6 segundos...
        setTimeout(() => {
  
          /*
            Objetivo:
            - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
            - Remover a classe hidden da imagem do médico pilgrin na casa dele
            - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
          */
          btn_irTrabalhar.classList.remove('hidden');
          btn_FicarEmCasa.classList.remove('hidden');
          imagem_dr.classList.remove('hidden');
          h1.classList.remove('hidden');
  
  
          /*
            Objetivo:
            - Remover a barra de progresso
            - Remover o paragrafo de motivação
            - Remover a foto do Dr. Pilgrin no trabalho
          */
          container_barra_progresso.classList.add('hidden');
          paragrafoMotivacao.classList.add('hidden');
          fotoDrNoTrabalho.classList.add('hidden');
  
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
      btn_irTrabalhar.classList.add('hidden');
      imagem_dr.classList.add('hidden');
      h1.classList.add('hidden');
      btn_FicarEmCasa.classList.add('hidden');
  
  
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
        
      // Removendo a classe Hidden para que a barra apareça na tela
      container_barra_progresso.classList.remove('hidden');

      
      // Adicionando classe hidden, para que os 20% | 40% | 60 % desapareça
      vinte_porcento.classList.add("hidden");
      quarenta_porcento.classList.add("hidden");
      sessenta_porcento.classList.add("hidden");
      
      // Tirando a classe hidden, para que o <h2> com 80% apareça
      oitenta_porcento.classList.remove("hidden");

      // Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
      paragrafoMotivacao.innerText = "Você foi ao trabalho e avançou 80% na pesquisa ! parabéns"
      paragrafoMotivacao.classList.remove("hidden");

      // Aumentando atributos do personagem
      drPilgrin.aumentarAtributos();

      // Aumentando progresso do array
      progresso.push('80%');
  
  
      // # Após 6 segundos...
      setTimeout(() => {
  
        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        btn_irTrabalhar.classList.remove('hidden');
        btn_FicarEmCasa.classList.remove('hidden');
        imagem_dr.classList.remove('hidden');
        h1.classList.remove('hidden');


        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        container_barra_progresso.classList.add('hidden');
        paragrafoMotivacao.classList.add('hidden');
        fotoDrNoTrabalho.classList.add('hidden');

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
        btn_irTrabalhar.classList.add('hidden');
        imagem_dr.classList.add('hidden');
        h1.classList.add('hidden');
        btn_FicarEmCasa.classList.add('hidden');
  
  
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
        
        // Removendo a classe Hidden para que a barra apareça na tela
        container_barra_progresso.classList.remove('hidden');
  
        
        // Adicionando classe hidden, para que os 20% | 40% | 60% | 80% desapareça
        vinte_porcento.classList.add("hidden");
        quarenta_porcento.classList.add("hidden");
        sessenta_porcento.classList.add("hidden");
        oitenta_porcento.classList.add("hidden");
        
        // Tirando a classe hidden, para que o <h2> com 80% apareça
        cem_porcento.classList.remove("hidden");

        // Removendo a classe Hidden para que a palavra de Motivação <p> apareça na tela
        paragrafoMotivacao.innerText = "Você foi ao trabalho e avançou 100% na pesquisa ! parabéns"
        paragrafoMotivacao.classList.remove("hidden");
  
        // Aumentando atributos do personagem
        drPilgrin.aumentarAtributos();
  
        // Aumentando progresso do array
        progresso.push('100%');
  
  
        // # Após 6 segundos...
        setTimeout(() => {

        /*
          Objetivo:
          - Remover a classe hidden dos botões de ir para o trabalho e de ficar em casa
          - Remover a classe hidden da imagem do médico pilgrin na casa dele
          - Remover a classe hidden do principal titulo da página "Em seis dias, todas as células ...."
        */
        btn_irTrabalhar.classList.remove('hidden');
        btn_FicarEmCasa.classList.remove('hidden');
        imagem_dr.classList.remove('hidden');
        h1.classList.remove('hidden');


        /*
          Objetivo:
          - Remover a barra de progresso
          - Remover o paragrafo de motivação
          - Remover a foto do Dr. Pilgrin no trabalho
        */
        container_barra_progresso.classList.add('hidden');
        paragrafoMotivacao.classList.add('hidden');
        fotoDrNoTrabalho.classList.add('hidden');

        /*
          Objetivo:
          - O usuário escolheu ir ao trabalho, portanto já se passou um dia, então vou invocar a função
          decrementarDias() que é responsável por decrementar os dias
        */
        decrementarDias();  
      },6000)
    }
  });



  /*
    # Case para quando o usuário NÃO for trabalhar
    - Se ele clicar no botão ficar em casa, o contadorFicarEmCasa vai incrementar em 1, então isso mostra
    que o usuário ficou em casa 1 vez, cada vez que esse botão é clicado, essa variável é incrementada.
  */
  let contadorFicarEmCasa = 0;
    

  btn_FicarEmCasa.addEventListener('click', function(){
    contadorFicarEmCasa++;

    if(contadorFicarEmCasa == 1){
      console.log('ficou em casa');
      btn_irTrabalhar.classList.add('hidden');
      btn_FicarEmCasa.classList.add('hidden');
      imagem_dr.classList.add('hidden');
      h1.classList.add('hidden');
    }
    if(contadorFicarEmCasa == 2){
      console.log('Foi ao trabalho');
    }
    if(contadorFicarEmCasa == 3){
      console.log('Foi ao trabalho');
    }
    if(contadorFicarEmCasa == 4){
      console.log('Foi ao trabalho');
    }
    if(contadorFicarEmCasa == 5){
      console.log('Foi ao trabalho');
    }
    if(contadorFicarEmCasa == 6){
      console.log('Foi ao trabalho');
    }

  });


},3000);
