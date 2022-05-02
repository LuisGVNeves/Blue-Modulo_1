// # importando o prompt
const prompt = require('prompt-sync')();

// # Pergunta pra iniciar game
console.log('\n');
let iniciarJogo = prompt('Você deseja iniciar o Jogo One Chance ?').toUpperCase();
console.log('\n');


let nomeCientista = prompt('Qual o nome do cientista?');
console.log('\n');


// # Objeto cientista
const cientista ={
  nome: nomeCientista,
  alturaCientista: 1.80,
  pesoCientista: 80,
  profissao: "Cientista",
  criatividade: 100,
  depressao: 0,
  felicidade: 100,
  gordura: 18,
  saude: 100,
  ansiedade:0,
  progressoCura: [1],
  dinheiro: 1100,

  // # Métodos que vão incrementar ou decrementar os atributos do cientista, caso usuário escolha uma opção "errada"
  decrementarSaude: function(valor){
    this.saude -= valor;
    console.log(`\n💊Saúde do ${cientista.nome} - ${this.saude}`)
  },
  decrementarFelicidade: function(valor = 5){
    if(this.felicidade >= 100){
      this.felicidade -= valor;
      console.log(`🎉Felicidade ${cientista.nome} - ${this.felicidade}`);
    }
    else{
      console.log(`Dr.${cientista.nome} atingiu o máximo da infelicidade`);
    }
  },
  decrementarCriatividade: function(valor){
    this.criatividade -= valor;
    console.log(`💡Criatividade ${cientista.nome} - ${this.criatividade}`);
  },
  decrementarDinheiro: function(valor){
    this.dinheiro -= valor;
    return `Você gastou - ${valor}R$`;
  },
  aumentarDepressao: function(valor){
    if(this.depressao >= 100 || this.ansiedade >= 100){
      console.log(`\nDr ${cientista.nome} atingiu o seu limite de 😔Depressão: ${this.depressao} % `);
    }else{
      this.depressao += valor;
      this.ansiedade += valor;
      console.log(`\n😔Depressão ${cientista.nome} + ${this.depressao}\n Ansiedade ${cientista.nome} + ${this.ansiedade}`);
    }
  },
  aumentarGordura: function(fat){
    this.gordura += fat;
    console.log(`🍫 ${cientista.nome} ficou mais gordo +${this.gordura}`);
  },
  // # Métodos de array reduce pra transformar todos os números em um só, pra calcular a cura da vacina
  aumentarCura: function(valor){
    let totalCura;
    this.progressoCura.push(valor);

    // # Calcular progresso da cura
    this.progressoCura.reduce((acumulador,atual) => {
      return totalCura = acumulador + atual;
    })
    return `Progresso da cura: ${totalCura}% ⌛`;
  },
  aumentarFelicidade: function(valor){
    this.felicidade += valor;
    return `Dr.${cientista.nome} está mais feliz + ${this.felicidade} 🤗`;
  },


  // # Desistir de td
  desistir: function(){
    this.criatividade = 0;
    this.depressao = 0;
    this.felicidade = 0;
    this.gordura = 0;
    this.saude = 0;
    this.ansiedade = 0;
    console.log(`\n
    💡Criatividade ${cientista.nome} -${this.criatividade}
    😔Depressão ${cientista.nome} -${this.depressao}
    🎉Felicidade ${cientista.nome} -${this.felicidade}
    💊Saúde do ${cientista.nome} -${this.saude}
    \n
    `);
  }
};

// # Perguntas que alteram esses status do personagem
let pergunta;

// # Botões de entrar no quarto da Molly(filha) e entrar no banheiro botões invocados na função perguntasBasicas()
let btnEntrarBanheiro;
let btnEntrarQuartoMolly;



// # Iniciando o Game
while(iniciarJogo == 'SIM'){

  // # Objetivo: Loop de 4 repetições para simular a passagem de tempo de 4 dias (posteriormente o 5  e 6 dias estão acoplados em outras funções)
  for(let i = 0; i <= 6; i++){
    // # 1 Dia
    if(i == 1){
      console.log('\n');

      // # Perguntas basicas
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho primeiro dia
        irPrimeiroDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa primeiro dia
        ficarPrimeiroDia(i)
      }
    }
    // # 2 Dia
    if(i == 2){
      console.log('\n');

      // # Perguntas basicas
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho segundo dia
        irSegundoDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa segundo dia
        ficarSegundoDia(i)
      }
    }
    // # 3 Dia
    if(i == 3){
      console.log('\n');

      // # Perguntas basicas
      perguntasBasicas(i);

      pergunta = prompt("\x1b[33mVocê deseja ir trabalhar?\x1b[0m").toUpperCase();
      
      if(pergunta == 'SIM'){
        // # Indo ao trabalho segundo dia
        irTerceiroDia(i);
      }
      if(pergunta == 'NAO'){
        // # Ficar em casa segundo dia
        ficarTerceiroDia(i)
      }
    }
    // 4 dia
    if(i == 4){
      console.log('\n');

      perguntasBasicas(i);

      pergunta = prompt('\x1b[33mVocê deseja ir trabalhar?\x1b[0m').toUpperCase();
      if(pergunta == 'SIM'){
        irQuartoDia(i);
      }
      else{ 
        ficarQuartoDia(i);
      }  
    }

  }
  // # Assim que chegar no final, usuário pode ter a opção de rejogar o jogo
  let rejogar = prompt('\nVocê deseja re-jogar o Jogo One Chance ?').toUpperCase();
  if(rejogar != 'SIM'){
    break;
  }
  else{
    iniciarJogo = 'SIM';
  }
}

// # Função que mostra a DATA atual
function mostraData(i){

  // # Instanciando a data
  const data = new Date();

  // # Retorna o dia da semana em numero
  let dia = data.getDay();

  /*
    # O i que estou recebendo no parâmetro, vai alterar a ordem dos dias, lá no loop,
    caso o loop esteja no laço 1, então eu vou chamar essa função mostraData(), que vai
    receber esse (i) do for, e toda vez que o laço de repetição incrementar, essa função
    vai ser invocada, mudando também o valor do (i) do parâmetro, mostrando o dia da semana
    atual lá no for
    
    ## Fonte: mudar a cor console https://qastack.com.br/programming/9781218/how-to-change-node-jss-console-font-color ||   \x1b[31m
  */
  if(i == 1){
    dia = '\x1b[36msegunda-feira\x1b[0m';
    return dia;
  }
  if(i == 2){
    dia = '\x1b[36mterça-feira\x1b[0m';
    return dia;
  }
  if(i == 3){
    dia = '\x1b[36mQuarta-feira\x1b[0m';
    return dia;
  }
  if(i == 4){
    dia = '\x1b[36mQuinta-feira\x1b[0m';
    return dia;
  }
  if(i == 5){
    dia = '\x1b[36mSexta-feira\x1b[0m';
    return dia;
  }
  if(dia == 6){
    dia = '\x1b[36mSabado\x1b[0m';
    return dia;
  }
  if(dia == 7){
    dia = '\x1b[36mDomingo\x1b[0m';
    return dia;
  }
}

// # Função que mostra no console as perguntas pro usuário, se ele quer ir no banheiro ou no quarto da molly de acordo com o dia
function perguntasBasicas(i){
  if(i == 1){
    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[31mEm seis dias todas as células do planeta morrerão Você tem uma chance!\x1b[0m`);
    console.log('\n');

    console.log(`Você acorda numa ${mostraData(i)} sai do seu quarto e encontra sua esposa, ela diz para você se apressar para não se atrasar em ir ao trabalho`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');
      console.log(`Você entra no quarto da sua filha e ela pergunta se precisa ir pra escola hoje... Você diz que sim`);
      console.log('\n');    
    }

    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro e da uma cagada`);
      console.log('\n');    
    }
    
  }    
  if(i == 2){
    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[34mEm Cinco dias todas as células do planeta morrerão Você tem uma chance!\x1b[0m`);
    console.log('\n');

    console.log(`\x1b[31mVocê acorda com um pesadelo estranho.. Hoje é ${mostraData(i)} \x1b[0m`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no quarto da sua filha e ela fala que sua esposa está no banheiro..`);
      console.log('\n');    
    }
  
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro e sua esposa diz que o telefone tocou a manhã inteira querendo falar com você..Era seu trabalho`);
      console.log('\n');    
    }
  }
  if(i == 3){
    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[31mEm quatro dias todas as células do planeta morrerão Você tem uma chance!\x1b[0m`);
    console.log('\n');    

    console.log(`\x1b[31m Hoje ${mostraData(i)} Você levanta da cama e sua esposa pergunta se você precisa mesmo ir pro trabalho, já que está tudo fodido.\x1b[0m`);
    console.log('\n');    

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no quarto da sua filha e ela pergunta o porque não precisa ir pra escola hoje..Você responde que é feriado para não dar medo nela`);
      console.log('\n');    
    }
  
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro, se olha no espelho e bate uma crise de arrependimento do porquê você fez a vacina..`);
      console.log('\n');    
    }
  }
  if(i == 4){
    // # Mensagem inicial assim que usuário sai do quarto
    console.log(`\x1b[31mEm três dias todas as células do planeta morrerão Você tem uma chance!\x1b[0m`);
    console.log('\n');
    
    console.log(`\x1b[31m Hoje ${mostraData(i)} Você levanta da cama depressivo.\x1b[0m`);
    console.log('\n');

    btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
    if(btnEntrarQuartoMolly == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no quarto da sua filha e ela está dormindo`);
      console.log('\n');    
    }
  
    btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
    if(btnEntrarBanheiro == 'SIM'){
      console.log('\n');    
      console.log(`Você entra no banheiro, e toma um banho..`);
      console.log('\n');    
    }
  }
}

// # Funções que são invocadas ao decorrer da história
function irPrimeiroDia(i){
  console.log(`
  Você saindo de casa olha o jornal e descobre que seu rosto está no jornal! \x1b[31m[NOTÍCIA]: "\x1b[0m Hoje ${mostraData(i)} um time de cientistas liderados pelo Dr.${cientista.nome} conseguiram inventar uma vacina que cura o câncer. Essa vacina consegue destruir as células cancerigenas e também poderá ser usada para destruir outras células ruins do corpo humano. A cura é chamada atualmente de E48K15. Chegando no laboratório, todos te aplaudem, você se sente muito orgulhoso de ter feito algo grandioso para o mundo, porém, entrando na sua sala
  \x1b[31mvocê descobre algo errado nos testes.. Você acha que é apenas um erro bobo e ignora\x1b[0m.`);
  console.log('\n');
}
function ficarPrimeiroDia(i){
  console.log(`
  Hoje ${mostraData(i)} você preferiu ficar em casa com sua familia relaxando, você diz para sua esposa que hoje vai ficar em casa com eles.. Sua esposa e filha ficaram felizes. Você foi comprar pão e viu que no jornal a frente da sua casa, estava com seu rosto, parabenizando você e sua equipe pela vacina E48K15 cura do câncer.
  
  ${cientista.aumentarFelicidade(10)}`);
  console.log('\n');
}
function irSegundoDia(i){
  console.log(`
  Você saindo de casa olha o jornal e descobre que seu rosto está no jornal de novo.. 
  
  \x1b[31m[NOTICIA:]\x1b[0m  Hoje ${mostraData(i)} a cura do câncer descoberta no início desta semana foi considerada "além de mortal", de acordo com as autoridades:
    \x1b[31m E48K15 não para apenas em matar células cancerígenas, a droga continua a matar todas as outras células vivas não apenas no corpo humano, mas de todo o planeta Terra. Se a droga à base de gás fosse usada, poderia causar danos catastróficos à terra.\x1b[0m
  
  \x1b[31mAgora, você entendeu o porque das ligações todas...\x1b[0m

  Chegando no trabalho, o cientista chefe que trabalha com você avisa que toda a equipe está fodida por causa da vacina, você vai ao telhado tomar um ar, e vê um dos cientistas que trabalharam com você na vacina.. Ele no momento de desespero, deu um fim a vida dele por medo do que a vacina poderia causar ao mundo e a ele. O cientista chefe que trabalha com você avisou que amanhã vocês vão fazer uma conferência internacional explicando o erro da vacina, para toda população.`);

  cientista.aumentarDepressao(10);
  cientista.decrementarFelicidade(10);

}
function ficarSegundoDia(i){
  console.log(`Hoje ${mostraData(i)} Sua esposa te alertou que o seu time de cientistas estavam te ligando a manhã toda, mas você achou que eles estavam enchendo seu saco para fazer uma comemoração sobre sua vacina, por isso você nem retornou as ligações.. Você decidiu ficar em casa e fazer brownies com sua filha Molly assim que ela chegasse da escola...`);

  console.log('\n');
  
  let buscarMolly = prompt('Ir buscar sua filha Molly? ').toUpperCase();
  
  console.log('\n');

  if(buscarMolly == 'SIM'){
    console.log(`Você passou no mercado para comprar os ingredientes para fazer os Brownies, e buscou sua filha Molly na escola.
    
    ${cientista.aumentarFelicidade(10)}
    ${cientista.decrementarDinheiro(30)}
    `);
  }
  if(buscarMolly != 'SIM'){
    console.log(`Você escolheu não ir buscar a Molly, porém, sua esposa te obrigou e você teve que ir mesmo assim. No caminho você passou no mercado para comprar os ingredientes para fazer Brownies com sua filha`);
    
    cientista.decrementarFelicidade(5)
    cientista.decrementarDinheiro(30)
  }

  console.log(`
  Você voltando pra casa após buscar sua filha Molly na escola, olha o jornal que está em frente a sua casa e se assusta com a \x1b[31m[NOTICIA:]\x1b[0m 
  A cura do câncer descoberta no início desta semana foi considerada "além de mortal", de acordo com as autoridades:
     \x1b[31m E48K15 não para apenas em matar células cancerígenas, a droga continua a matar todas as outras células vivas não apenas no corpo humano, mas de todo o planeta Terra. 
      
  Se a droga à base de gás fosse usada, poderia causar danos catastróficos à terra.\x1b[0m
  
  \x1b[31m Agora, você entendeu o porque das ligações todas...\x1b[0m`);

  console.log('\n');

  console.log(`
  00:00h você recebeu uma ligação e descobriu que um dos cientistas que trabalha com você, cometeu um ato contra sua própria vida, no telhado, 
  por conta das repercussões da vacina.
  
  O seu amigo cientista chefe, disse que amanhã vocês vão fazer uma conferência internacional explicando o erro da vacina, para toda população.
  `);
}
function irTerceiroDia(i){
  console.log(`
  Hoje ${mostraData(i)} Você saindo de casa extremamente ansioso, de praxe vai ler o jornal de novo:
  
  \x1b[31mNOTICIA: Líderes mundiais em todo o mundo se dirigiram ao seu povo e lhes falaram sobre o futuro "fim dos dias".\x1b[0m 
  
  O vírus destruidor de células já está amplamente espalhado e está afetando o mundo. os primeiros sinais do vírus em sua área aparentemente incluem
  
  a morte de plantas, isso inclui coisas como grama e árvores. Os cientistas dizem que, à taxa de propagação da infecção pode se alastrar pelo mundo todo.
  
  Você faz o discurso na conferência internacional, porém, você é vaiado ao vivo e vê que a população local está protestando nas ruas, chegando ao trabalho você nota que a maioria dos cientistas que trabalharam na vacina, já perderam suas esperanças.. 
  
  \x1b[31m o cientista Bruce disse que deve haver algo que você e ele podem fazer para arrumar a vacina.. Ele disse que se você quiser, pode abrir as portas do laboratório pra você estudar uma cura..\x1b[0m 
    
  Ou..
  
  \x1b[35mVocê pode voltar para casa\x1b[0m`
  
  );
  /*
    # Objetivo: No 3 dia Cientista Bruce faz uma oferta pra procurar vacina, caso usuário vá
    ele aumenta o progresso da cura, caso não, ele vai ficar em casa porque no 3 dia que é
    quarta feira, a esposa dele disse que já estava tudo acabado, então isso demostivou ele.
  */
  let ofertaBruce = prompt('\x1b[31mVocê deseja ir com Bruce para tentar fazer uma cura para a vacina?\x1b[0m ').toUpperCase();

  if(ofertaBruce != 'SIM'){
    console.log('\n');
    console.log('Você voltou para casa e ficou com sua esposa que tinha falado que já estava tudo fodido.');
    console.log('\n');
    cientista.aumentarDepressao(30);
    cientista.decrementarFelicidade(30);
    cientista.decrementarSaude(30);
  }
  if(ofertaBruce == 'SIM'){
    console.log('\n');
    console.log('A cura ainda não foi achada, mas você progrediu e conseguiu ver o principal problema da sua vacina. Sua depressão aumentou.');
    console.log('\n');

    cientista.aumentarDepressao(35);
    cientista.aumentarFelicidade(10);
    cientista.aumentarCura(5);
  }
  
}
function ficarTerceiroDia(i){
  console.log(`
  A pergunta da sua esposa mexeu com você, e você ficou desmotivado de querer ir procurar uma cura, então você resolveu ficar em casa, no sofá deprimido e comendo sorvete
  
  com sua filha.. Na tv você vê a noticia: Hoje ${mostraData(i)} \x1b[31m[líderes mundiais em todo o mundo se dirigiram ao seu povo e lhes falaram sobre o futuro "fim dos dias".\x1b[0m
  
  O vírus destruidor de células já está amplamente espalhado e está afetando o mundo. os primeiros sinais do vírus em sua área aparentemente incluem a morte de plantas, isso inclui coisas como grama e árvores. 
  
  Os cientistas dizem que, à taxa de propagação da infecção pode se alastrar pelo mundo todo.
  
  `);
  cientista.aumentarDepressao(20);
  cientista.aumentarGordura(10);
}
function irQuartoDia(i){
  
  console.log(`
  \nHoje ${mostraData(i)} Os cientistas previram que até a manhã de amanhã, metade da população humana que estava viva na segunda-feira estará morta. 
  
  Equipes de cientistas de todo o mundo ainda estão trabalhando em uma cura. 
  
  Protestos estão ocorrendo em todo o mundo e saques em massa estão a todo vapor.

  Você saindo de casa, vê que a sua equipe de cientistas restantes estão na sua porta, e falaram que precisa de você agora no laboratório.. 
  
  \x1b[33mPorém, eles deram a opção de você ir ou ficar em casa\x1b[0m \n
  
  `);

  let irComSuaEquipe = prompt('Ir ao trabalho ? ').toUpperCase();

  // # Caso usuário queira ficar em casa
  if(irComSuaEquipe != 'SIM'){
    console.log(`
    \nVocê voltou para casa e ficou o dia todo com sua filha e sua esposa vendo desenhos, comendo muitos doces, porém, a tarde você fica com uma crise de ansiedade por saber que perdeu mais um dia de uma possível cura\n`);

    cientista.aumentarGordura(10);
    cientista.aumentarDepressao(10);
    cientista.decrementarFelicidade(1);
    cientista.decrementarSaude(10);

    // # 5 Dia
    irQuintoDia(i)
  }

  // # Caso usuário queira ir com  sua equipe para o trabalho
  if(irComSuaEquipe == 'SIM'){
    console.log(`
    \nChegando no trabalho com sua equipe, uma cientista que é afim de você, pergunta se você quer sair com ela..\n
      
    \x1b[33mVocê pode sair ou continuar procurando uma cura\x1b[0m \n`);
  
    let sairComCientista =  prompt('Deseja sair com a cientista gata e abandonar a cura? ').toUpperCase();


    // # Caso usuário não queira sair com a cientista
    if(sairComCientista != 'SIM'){
      console.log(`\nVocê recusou o convite e optou por continuar na pesquisa.. Infelizmente ainda não deu certo, mas você fez um progresso de 15%`);
      
      cientista.aumentarCura(10);

      btnEntrarQuartoMolly = prompt('\nDeseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){

        console.log('\n\x1b[33m\nSua esposa faleceu pelo seu virus..\x1b[0m');
        // Todos os atributos do cientista foram zerados
        cientista.desistir();
      }

      let desejaTrabalhar = prompt('Deseja ir trabalhar?').toUpperCase();
      if(desejaTrabalhar == 'SIM'){
        console.log(`Dr.${cientista.nome} está com depressão não consegue mais ir ao trabalho.. Hoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
      }
      else{
        console.log(`
        \nDe qualquer jeito, se você tivesse escolhido que queria ir para o trabalho, o Dr.${cientista.nome} recusaria.. Ele está com depressão não conseguiria mais
        
        ir ao trabalho.. Hoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
      }
    }


    // # Caso usuário aceite sair com a cientista
    if(sairComCientista == 'SIM'){
      console.log(`\nVocê traiu sua esposa, você ficou ainda mais depressivo, você volta para casa tarde da noite..`);
      
      btnEntrarQuartoMolly = prompt('\nDeseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\nA amiga da cientista gata que você saiu, disse para sua esposa que você traiu ela. Sua esposa faleceu pelo seu virus sabendo disso..');
        cientista.aumentarDepressao(100);
      }


      console.log(`\n Hoje ${mostraData(i + 1)} você não dormiu..\n `)

      btnEntrarQuartoMolly = prompt('\nDeseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('\nDeseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log(`\x1b[33m \n...Dr.${cientista.nome} se recusa e entrar\x1b[0m \n`);
      }

      let desejaTrabalhar = prompt('Deseja ir trabalhar?').toUpperCase();
      if(desejaTrabalhar == 'SIM'){
        console.log(`
        \n Dr.${cientista.nome} está com depressão não consegue mais ir ao trabalho.. 
        
        Hoje ${mostraData(i + 1)} \x1b[33m é o dia em que todas as células morrerão..\x1b[0m`);

        cientista.progressoCura(1);

      }
      else{
        console.log(`
        \nDe qualquer jeito, se você tivesse escolhido que queria ir para o trabalho, o Dr.${cientista.nome} recusaria.. 
        
        Ele está com depressão não conseguiria mais ir ao trabalho.. Hoje ${mostraData(i + 1)} é o dia em que todas as células morrerão..`);
      
        cientista.progressoCura(1);
      }

    }
  }
  
}
function ficarQuartoDia(i){
  console.log(`
  Sua depressão está aumentando, você acaba de ver noticia na tv de que : os cientistas previram que até a manhã de amanhã, \x1b[33m metade da população humana que estava viva na segunda-feira irá falecer. 
  
  Equipes de cientistas de todo o mundo ainda estão trabalhando em uma cura. Protestos estão ocorrendo em todo o mundo e saques em massa estão em vigor.

  Algumas horas se passam e batem na sua porta.. É a sua equipe restantes de cientistas, eles querem você no trabalho hoje ! 

  \x1b[33mPorém, eles deram a opção de você ir ou ficar em casa\x1b[0m \n
  `)
  
  let irComSuaEquipe = prompt('Ir ao trabalho ? ').toUpperCase();

  // # Caso usuário não queira ir com sua equipe - Nesse caso a esposa e filha duram mais vai invocar a irQuintoDia(i)
  if(irComSuaEquipe != 'SIM'){
    console.log(`
    \nVocê voltou para casa e ficou o dia todo com sua filha e sua esposa vendo desenhos, comendo muitos doces.. 
    
    Porém, a tarde você fica com uma crise de ansiedade por saber que perdeu mais um dia de uma possível cura\n`);
    
    cientista.aumentarGordura(10);
    cientista.aumentarDepressao(10);

    // # 5 Dia
    irQuintoDia(i)
  }
  // # Caso usuário queira ir com  sua equipe
  if(irComSuaEquipe == 'SIM'){
    
    // Pergunta desistir de tudo caso a esposa do Dr faleça
    let desistir;

    console.log(`
    Chegando no trabalho com sua equipe, uma cientista que é afim de você, pergunta se você quer sair com ela.. 
    
    \x1b[33mVocê pode sair ou continuar procurando uma cura\x1b[0m`);
  
    let sairComCientista =  prompt('\nDeseja sair com a cientista gata e abandonar a cura? ').toUpperCase();

    // # Caso usuário não queira sair com a cientista
    if(sairComCientista != 'SIM'){
      console.log(`
      \n \x1b[33mVocê recusou o convite e optou por continuar na pesquisa.. Infelizmente ainda não deu certo, mas você fez um progresso de 15%\x1b[0m
      
      Voltando para casa tarde da noite.. Aconteceu algo na sua casa 😟
      `);
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
          console.log(`\n \x1b[0mVocê desistiu de tudo, sua filha faleceu algumas horas depois pelo virus.. Amanhã é o fim para todos \x1b[0m \n`);
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
            console.log(`\nVocê optou por levar Molly ao seu trabalho ao invés do parque.. Ela brincou com as vacinas do laboratório, e no fim da tarde, morreu pela infecção
            
            da sua vacina.. Você já está verde e sua hora está chegando.. Você então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista
           
            que teve um sonho lúcido\n`);
          }
          if(destino == 'PARQUE'){
            cientista.decrementarSaude(100);

            console.log(`\nMolly faleceu no parque por conta do virus. Algumas horas depois, você foi infectado pelo virus, e também faleceu.
            
            \x1b[32m Você então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido\x1b[0m \n`);
          }

        }
      }

    }
    
    // # Caso usuário queira sair com a cientista
    if(sairComCientista == 'SIM'){
      console.log('\n');
      console.log(`Você traiu sua esposa, você ficou ainda mais depressivo, \x1b[31m você volta para casa tarde da noite..\x1b[0m`);
      console.log('\n');
      
      // Aumentar tristeza
      cientista.aumentarDepressao(100)

      btnEntrarQuartoMolly = prompt('Deseja entrar no quarto da molly?').toUpperCase();
      if(btnEntrarQuartoMolly == 'SIM'){
        console.log('\nSua filha está dormindo..');
      }

      btnEntrarBanheiro = prompt('Deseja entrar no banheiro?').toUpperCase();
      if(btnEntrarBanheiro == 'SIM'){
        console.log('\nA amiga da cientista gata que você saiu, disse para sua esposa que você traiu ela.\x1b[31m Sua esposa faleceu pelo seu virus sabendo disso..\n');
     
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
            console.log(`
            \nVocê optou por levar Molly ao seu trabalho ao invés do parque.. Ela brincou com as vacinas do laboratório, e no fim da tarde, morreu pela infecção da sua vacina.. 
            
            Você já está verde e sua hora está chegando..`);

            cientista.decrementarSaude(100);
            
            console.log(`\x1b[32mVocê então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido\x1b[0m \n`)
            
          }
          if(destino == 'PARQUE'){
            console.log(`\nMolly faleceu no parque por conta do virus. Algumas horas depois, você foi infectado pelo virus, e também morreu. 
            
            \x1b[32mVocê então acorda do pesadelo e está tudo bem, não existiu vacina nenhuma, você é apenas um cientista que teve um sonho lúcido \x1b[0m \n`);
          }
        }
     
      }
    }

  }
}
function irQuintoDia(i){

  // #5 Dia
  console.log(`\nVocê acorda numa ${mostraData(i + 1)} sai do seu quarto depressivo embora ontem você tenha ficado feliz com sua familia\n`)

  btnEntrarQuartoMolly = prompt('\x1b[32mVocê deseja ir ao quarto da sua filha Molly ? \x1b[0m').toUpperCase();
  if(btnEntrarQuartoMolly == 'SIM'){
    console.log(`\nMolly não está no quarto dela \n`);
  }

  btnEntrarBanheiro = prompt('\x1b[32mVocê deseja ir ao banheiro ? \x1b[0m').toUpperCase();
  if(btnEntrarBanheiro == 'SIM'){
    console.log(`\nMolly não está no banheiro também..\n`);
  }



  console.log(`\n\x1b[31mVocê procura sua esposa e sua filha pela casa e descobre que elas faleceram graças a sua vacina.. Você passa o dia todo deprimido ouvindo musica.\x1b[0m`);
  cientista.aumentarDepressao(100);
  cientista.decrementarFelicidade(100);


  // #6 Dia
  function irSextoDia(){
    console.log('\nVocê não dormiu, apenas levantou e entrou no carro..\n');
    let destino = prompt('Deseja ir ao parque ou ir no trabalho? ').toUpperCase();

    if(destino == 'TRABALHO'){
      console.log(`\nVocê teve um insight no trabalho e conseguiu fazer a cura..\n`);
      
      cientista.aumentarCura(100);

      let injetarCura = prompt("Você quer injetar a cura em você?").toUpperCase();
      if(injetarCura == 'SIM'){
        console.log(`\nVocê injetou a cura, porém, essa cura parou seu coração..\n`);
      }
      else{
        let telhadoOuParque = prompt('Você preferiu não tomar vacina para viver mais.. Você deseja ir no parque ou continuar no trabalho?').toUpperCase();
        if(telhadoOuParque == 'PARQUE'){
          console.log('\nVocê achou sua paz no parque..\n');
        }
        else{
          console.log('\nVocê achou a paz do seu jeito..\n');
        }
      }
    }
    if(destino == 'PARQUE'){
      console.log(`Você acendeu um cigarrinho e ficou em paz no parque.. Hoje sexta-feira todas as células irão falecer`);
    }
  }

  return irSextoDia();
}