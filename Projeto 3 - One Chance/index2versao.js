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

*/

do{
  
  if(pergunta == 'SIM'){
    // Chamando função que incrementa array progresso
    incrementaArray(20);
    
    // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
    irAoTrabalho(i = 1)

    // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
    drPilgrin.incrementarAtributos();

    break;
  }
  // Se não for ao trabalho 1 dia
  else{ 

    // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
    ficarEmCasa(i = 1);

    // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
    drPilgrin.decrementarAtributos();

    // Dr.pilgrin gastou 300 reais no parque com a filha
    drPilgrin.dinheiro -= 300;
  }
}
while(pergunta != 'NAO');


// 2 Dia trabalhando
pergunta = prompt('Você deseja ir trabalhar no 2 dia?').toUpperCase();
do{
  if(pergunta == 'SIM'){
    // Chamando função que incrementa array progresso
    incrementaArray(20);
    
    // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
    irAoTrabalho(i = 2)

    // Toda vez que Dr.Pilgrin vai ao trabalho, os atributos dele aumentam
    drPilgrin.incrementarAtributos();
    break;
  }
  // Se não for ao trabalho 2 dia
  else{ 

    // Função que mostra msg no console, de acordo com o dia que o personagem está situado na história
    ficarEmCasa(i = 2);

    // Toda vez que Dr.Pilgrin fica em casa, os atributos dele diminuindo
    drPilgrin.decrementarAtributos();

    // Dr.pilgrin gastou 300 reais no parque com a filha
    drPilgrin.dinheiro -= 300;
  }
}
while(pergunta != 'NAO');






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
  if(dia == 3){
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

  // Se o dia de ir ao trabalho foi igual a 1
  if(i == 1){
    console.log(`
    Cura do câncer aconteceu! hoje ${mostraData(i)} um time de cientistas liderados pelo Dr.Pilgrin conseguiram inventar uma vacina que cura o câncer. 
    Essa vacina consegue destruir as células cancerigenas e também poderá ser usada para destruir outras células ruins do corpo humano. 
    A cura é chamada atualmente de E48K15\n`);
  }
  if(i == 2){

  }

}

// # Função que mostra no console a história do personagem caso ele não vá ao trabalho
function ficarEmCasa(i){
  // Se o dia de ficar em casa for igual a 1
  if(i == 1){
    console.log(`\x1b[36m%s\x1b[0m',
    Na tarde de ontem você descobriu o cancêr! hoje ${mostraData(i)} todo o seu time de cientistas liderados por você Dr.Pilgrin resolveram
    comemorar hoje.. Porém você resolveu ficar em casa com sua filha Molly, ela ficou muito feliz, vocês passaram a tarde se divertindo
    no parquinho se divertindo, porém o time de cientistas ligaram pra você para você ir no laboratório depressa.. Porém, você ignorou\n`);
  }
}
