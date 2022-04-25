const { log } = require('console');

// # Variáveis para armazenar os status do personagem.
const drPilgrin = {
  saude: 100,
  felicidade: 100,
  depressao: 0,
  dinheiro: 1000,

  // Métodos do obj
  incrementarAtributos: function(){
    
    // # Se felicidade for >= 100 vai receber de novo apenas 100, caso contrário vai ser incrementada em +10
    this.felicidade >= 100 ? this.felicidade = 100 : this.felicidade += 10
    this.saude >= 100 ? this.saude = 100 : this.saude += 10

    this.dinheiro += 250;

    console.log(`Atributos aumentados: 
    ${this.felicidade} felicidade 
    ${this.saude} saúde
    250R$ dinheiro\n`);
  },
  decrementarAtributos: function(){
    this.felicidade -= 10;
    this.saude -= 10;
    this.dinheiro -= 100;
    this.depressao += 20;
  }
};

// # importando o prompt
const prompt = require('prompt-sync')();

// # Mensagem inicial do jogo
console.log(`\nVocê é um cientista chamado Dr.Pilgrin, você na tarde de ontem desenvolveu uma cura para o câncer..Porém, você não esperava que essa cura
poderia se tornar um pesadelo...Você tem seis dias!\n`);


// # Perguntas que alteram esses status do personagem
let pergunta = prompt('Você deseja ir trabalhar?').toUpperCase();

// # Progresso da vacina
let progresso = [];


/*
  # Laço de repetição que determinará os ciclos onde a história vai se passar.
  Determinar o que acontecerá ao final do ciclo e como ficarão os status. 

  # Variável para controle da passagem do tempo, vai ser o i do meu for
  e para mostrar na tela a passagem do tempo ocorrendo função mostrarData()

  Objetivo: Fazer um laço de 6 repetições para simular 6 dias, como já sei o tanto
  que preciso, vou utilizar for
*/
for(let i=0; i<=6; i++){

  // 1 Dia
  if(i == 1){

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();

    }
    else{ 
 
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();

      // Dr.pilgrin gastou 300 reais no parque com a filha
      drPilgrin.dinheiro -= 300;

      
      // Decrementar array do progresso da vacina
      decrementaArray();
    }    
  }
  // 2 dia
  if(i == 2){
    pergunta = prompt('Você deseja ir trabalhar no segundo dia?').toUpperCase();

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();
    }
    else{
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();

      // Decrementar array do progresso da vacina
      decrementaArray();
    }
  }

  // 3 dia
  if(i == 3){
    pergunta = prompt('Você deseja ir trabalhar no terceiro dia?').toUpperCase();

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();
    }
    else{
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();

      // Você comeu muito brownies e sua gordura aumentou
      drPilgrin.gordura += 10;

      // Decrementar array do progresso da vacina
      decrementaArray();

    }

  }
  // 4 dia
  if(i == 4){
    pergunta = prompt('Você deseja ir trabalhar no quarto dia?').toUpperCase();

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();
    }
    else{
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();


      // Decrementar array do progresso da vacina
      decrementaArray();
    }
  }

  // 5 dia
  if(i == 5){
    pergunta = prompt('Você deseja ir trabalhar no quinto dia?').toUpperCase();

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();
    }
    else{
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();


      // Decrementar array do progresso da vacina
      decrementaArray();
    }
  }

  // 5 dia
  if(i == 6){
    pergunta = prompt('Você deseja ir trabalhar no Sexto dia?').toUpperCase();

    if(pergunta == 'SIM'){
      // Chamando função que incrementa array progresso
      incrementaArray(20);
      
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      irAoTrabalho(i)

      // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
      drPilgrin.incrementarAtributos();
    }
    else{
      // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
      ficarEmCasa(i);

      // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
      drPilgrin.decrementarAtributos();


      // Decrementar array do progresso da vacina
      decrementaArray();
    }
  }

}


// # Função que incrementa o array de progresso da cura da vacina toda vez que o usuário vai ao trabalho
function incrementaArray(valor){
  progresso.push(valor);
}

// # Função que decrementa o array de progresso da cura da vacina toda vez que o usuário não vai ao trabalho
function decrementaArray(){
  progresso.pop()
}

// # Função que mostra a DATA atual
function mostraData(i){

  // # Instanciando a data
  const data = new Date();

  // # Retorna o dia da semana em numero, e eu transformo em string passando os dias em string
  let dia = data.getDay();

  /*
    # O i que estou recebendo no parâmetro, vai alterar a ordem dos dias, lá no loop,
    caso o loop esteja no laço 1, então eu vou chamar essa função mostraData(), que vai
    receber esse (i) do for, e toda vez que o laço de repetição incrementar, essa função
    vai ser invocada, mudando também o valor do (i) do parâmetro, mostrando o dia da semana
    atual lá no for
  */
  if(i == 1){
    dia = 'segunda-feira';
    return dia;
  }
  if(i == 2){
    dia = 'terça-feira';
    return dia;
  }
  if(i == 3){
    dia = 'Quarta-feira';
    return dia;
  }
  if(i == 4){
    dia = 'Quinta-feira';
    return dia;
  }
  if(i == 5){
    dia = 'Sexta-feira';
    return dia;
  }
  if(dia == 6){
    dia = 'Sabado';
    return dia;
  }
  if(dia == 7){
    dia = 'Domingo';
    return dia;
  }
}

// # Função que mostra no console a história do personagem caso ele vá ao trabalho
function irAoTrabalho(i){
  // ## Fonte: mudar a cor https://qastack.com.br/programming/9781218/how-to-change-node-jss-console-font-color


  // Se o dia de ir ao trabalho foi igual a 1
  if(i == 1){
    console.log(`
    Cura do câncer aconteceu! hoje \x1b[36m${mostraData(i)}\x1b[0m um time de cientistas liderados pelo Dr.Pilgrin conseguiram inventar uma vacina que cura o câncer. 
    Essa vacina consegue destruir as células cancerigenas e também poderá ser usada para destruir outras células ruins do corpo humano. 
    A cura é chamada atualmente de E48K15\n`);
  }
  if(i == 2){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m sua filha Molly, pediu para vocês verem um filme com muita pipoca, mas você preferiu ignorar ela e ir trabalhar 
    chegando no trabalho você descobriu que a cura do câncer que você fez, está agindo estranhamente, matando células saudáveis... 
    O seu time de pesquisa está assustado com isso, você fez algumas ligações no trabalho para que essas informações não se tornem públicas..
    `);
  }
  if(i == 3){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m você resolveu atender as ligações do pessoal do trabalho que precisam urgentemente da sua ajuda no
    laboratório, chegando lá, você  descobriu que a cura que você fez, não apenas mata as células cancerígenas do corpo humano, 
    como também mata TODAS AS CÉLULAS DO SEU CORPO, não se limitando a isso, tendo potencial para \x1b[31mDESTRUIR TODAS AS CÉLULAS DO PLANETA\x1b[0m 
    A imprensa chegou ao local do seu trabalho, o assunto virou notícia internacional, as autoridades estão de olho em você.      
    O cientista chefe que trabalha com você disse que a equipe está fodida, vocês perderam 50% dos acionistas.
    `);
  }
  if(i == 4){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m os seus vizinhos souberam por fofocas, de que o criador da vacina que está matando o mundo é você e atacaram pedras no seu carro
    enquanto você dirigia ao trabalho, o seu chefe cometeu suicidio com medo do que poderia ter acontecido com ele, você está sozinho... Você deseja ir ao trabalho mesmo assim ou voltar pra casa?
    \n\n`);

    let novaPergunta = prompt('Deseja voltar para casa? ').toUpperCase();
    if(novaPergunta == 'SIM'){
      console.log(`
      \x1b[31m\nVoltando para casa você começa a notar que as paisagens estão morrendo, o belo jardim que você via agora está morto graças a sua vacina..\x1b[0m
      `);
    }
    else{
      console.log(`
      \x1b[32m\nVocê chegando ao trabalho, teve um insight sobre o que está acontecendo na vacina.. Você finalmente consegue encontrar a cura, porém, 75% do planeta já morreu..\x1b[0m
      `);
    }
  }
  if(i == 5){
    novaPergunta = prompt('Deseja levar a cura pra sua familia? ').toUpperCase();
    if(novaPergunta == 'SIM'){
      console.log(`\x1b[31m\nVoltando pra casa com a esperança de curar sua familia.. Já é tarde demais.. Molly sua filhinha e sua esposa morreram.\x1b[0m`);
    }
    else{
      console.log(`\x1b[31m\nVocê acaba de tomar a cura e ser curado,porém, acaba de ver que 95% da população mundial já morreu.. Você tenta se comunicar.. Mas sem sucesso\x1b[0m`);
    }
  }
  if(i == 6){
    novaPergunta = prompt('Deseja ir pra casa ou pro trabalho? ').toUpperCase();
    if(novaPergunta == 'TRABALHO' ||  pergunta == 'sim'){
      console.log(`\x1b[31mVocê encontrou o Dr.Chester chorando e dizendo que você fodeu com o mundo, ele te da uma paulada na cabeça,
      e você acorda do seu sonho, descobrindo que isso tudo foi só um pesadelo, e que realmente você achou a cura do câncer 
      e está tudo bem\x1b[0m`);
    }
    else{
      console.log(`\x1b[31mVocê encontra o fantasma da sua filha na cozinha, pedindo ajuda, quando você vai até ela ajudar,
      você é teletransportado para o mundo real, e descobre que tudo não passou de um sonho e que você realmente achou
      a cura do câncer\x1b[0m`);
    }
  }

}

// # Função que mostra no console a história do personagem caso ele não vá ao trabalho
function ficarEmCasa(i){
  // Se o dia de ficar em casa for igual a 1
  if(i == 1){
    console.log(`
    Na tarde de ontem você descobriu o cancêr! hoje \x1b[36m${mostraData(i)}\x1b[0m todo o seu time de cientistas liderados por você Dr.Pilgrin resolveram
    comemorar... Porém você resolveu ficar em casa com sua filha Molly, ela ficou muito feliz, vocês passaram a tarde se divertindo
    no parquinho, porém o time de cientistas ligaram pra você para você ir no laboratório depressa.. Porém, você ignorou\n`);
  }
  if(i == 2){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m você passou o dia todo com sua filha Molly, vocês viram filme com muita pipoca, você continou ignorando as ligações 
    do seu trabalho por achar que são apenas felicitações pelo seu ótimo trabalho de ter descoberto a cura do câncer..
    `);
  }
  if(i == 3){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m sua esposa atendeu a ligação e descobriu que todos no trabalho estão putos com você, e que os seus colegas
    precisam urgentemente falar com você. Sua esposa soube o que houve com a vacina que cura câncer e já está sem esperanças na cura e pede pra que
    você fique mais em casa, e deixe que seus colegas cientistas resolvam.. Você passou o dia cozinhando com sua filha, Molly e fez bastante brownies
    para comer com ela. Você recebeu uma ligação e descobriu que se você tivesse ido no 3 dia, você poderia ter uma chance de entrar no laboratório 
    para achar uma cura.
    `);
  }
  if(i == 4){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m todos os presidentes de todas as nações acabaram de anunciar na TV que o fim do mundo está próximo... 
    A população está em choque, ainda não foi revelado a identidade do criador da vacina que é você. e a população está furiosa pra saber quem foi o criador...
    Você vendo a TV, teve um insight de qual é o problema e como resolver para que a vacina que está matando o mundo todo funcione..
    `);
    let novaPergunta = prompt('Deseja ir pro trabalho? ').toUpperCase();
    if(novaPergunta == 'SIM'){
      console.log(`
      \x1b[32m\n Você finalmente consegue encontrar a cura, porém, 75% do planeta já morreu..\x1b[0m
      `);
    }
    else{
      console.log(`
      \x1b[31m\nVocê ignora seu insight e apenas fica curtindo seus ultimos momentos com sua filha Molly..\x1b[0m
      `);
    }
  }
  if(i == 5){
    console.log(`
    Hoje \x1b[36m${mostraData(i)}\x1b[0m Sua filha Molly e sua esposa morreram, assim como seus vizinhos, você por faltar 5 dias no trabalho, foi demitido e
    sua depressão aumentou, agora você está impossibilitado de procurar uma nova cura pra vacina que você criou.. 
    A previsão é que em 6 dias \x1b[31mtodas as células do planeta morrerão.\x1b[0m
    `);
  }
  if(i == 6){
    console.log(`
    Hoje \x1b[31m${mostraData(i)}\x1b[0m todas as células do planeta morreram, você em poucos minutos estará morto por não ter conseguido a cura da vacina!
    `);
  }
}
