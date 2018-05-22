var pessoa = {
  nome: "Guilherme",
  idade: "18 anos",
  faculdade: "FIAP",
  profissao: "Desenvolvedor Front-End"
};

// DOT NOTATION GET
console.log(pessoa.nome);

// DOT NOTATION SET
pessoa.nome = "Tadeu";
console.log(pessoa.nome);

// É possivel adicionar propriedades e métodos
pessoa.sexo = "Masculino"
console.log(pessoa);

// Valores podem ser funções, métodos
// Funções Anonimas
var quadrado = {
  qtdLados: 4,
  area: function(pLado){
    return pLado * pLado;
  }
}

console.log(quadrado.area(4));
