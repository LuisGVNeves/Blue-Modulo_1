let cientista = {
  nome: undefined,
  alturaCientista: 1.80,
  pesoCientista: 80,
  profissao: "Cientista",
  criatividade: 50,
  depressao: 0,
  felicidade: 50,
  gordura: 18,
  saude: 100,
  ansiedade:0,
  dinheiro: 1100,
  arrVacina: [1],
  progressoCura:0,

  // # Métodos que vão incrementar ou decrementar os atributos do cientista, caso usuário escolha uma opção "errada"
  decrementarSaude: function(valor){
    if(this.saude <= 100){
      this.saude -= valor;
      return `\n\n💗Você ficou menos saudável - \x1b[33m${valor}\x1b[0m`;
    }else{
      this.saude = 0;
    }
  },
  decrementarCriatividade: function(valor){
    if(this.criatividade <= 100){
      this.criatividade -= valor;
      console.log(`\n💡Criatividade ${cientista.nome} - \x1b[33m${this.criatividade}\x1b[0m`);
    }
    else{
      console.log(`\n💡Criatividade atingiu o menor nível do Dr.${cientista.nome} - \x1b[33m${this.criatividade}\x1b[0m`);
    }
  },
  decrementarDinheiro: function(valor){
    this.dinheiro -= valor;
    return `Você gastou - \x1b[33m${valor}\x1b[0mR$💰`;
  },
  aumentarDepressao: function(valor){
    if(this.depressao <= 100){
      this.depressao += valor;
      return `\nDr.${cientista.nome} ganhou + \x1b[33m${valor}\x1b[0m depressão😔\n`;
    }else{
      this.depressao = 100;
      return`Dr.${cientista.nome} atingiu o seu limite de 😔Depressão: \x1b[33m${this.depressao}\x1b[0m %`;
    }

  },
  aumentarAnsiedade: function(valor){
    if(this.ansiedade <= 100){
      this.ansiedade += valor;
      return `\nDr.${cientista.nome} ganhou + ${valor} ansiedade😥\n`;
    }else{
      this.ansiedade = 100;
      return `Dr.${cientista.nome} atingiu o seu limite de 😔Ansiedade: ${this.ansiedade}%`;
    }
  },
  aumentarGordura: function(fat){
    this.gordura += fat;
    this.pesoCientista = (this.pesoCientista + (fat / 1));
    return `\n\n🍫 ${cientista.nome} ficou mais gordo +${fat}KG\n\n`;
  },
  // # Métodos de array reduce pra transformar todos os números em um só, pra calcular a cura da vacina
  aumentarCura: function(valor){
    this.arrVacina.push(valor);

    this.arrVacina.reduce((acc,atual) => {
      this.progressoCura = acc + atual;
      return this.progressoCura;
    })
    return `progresso da cura: ${this.progressoCura}% ⌛⏱️`;
  },
  aumentarFelicidade: function(valor){
    if(this.felicidade <= 100){
      this.felicidade += valor;
      return `\nDr.${cientista.nome} está mais feliz + ${this.felicidade}🎉\n`;
    }
    else{
      this.felicidade = 100;
      return `\nDr.${cientista.nome} atingiu o máximo da felicidade +${valor}🎉\n`;
    }
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
    \n`);
  }
};
module.exports = cientista;