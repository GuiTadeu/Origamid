// Variaveis evitam repetições desnecessarias
// DRY - Don't Repeat Yourself

// Pode se declarar varias variaveis utilizando virgula
var nome = "Guilherme",
    idade = "18",
    x = 30,
    y = 70,
    resultado = x + y;

// Uma variavel pode ser vazia (undefined)
var semValor;
console.log(semValor);

// Utilize o TypeOf para saber o tipo da variavel
console.log(typeof nome);

// Concatenação
var nome = "Guilherme",
    sobrenome = "Tadeu",
    nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Use barra inversa para ignorar funções de determinados caracteres
var empresa1 = "Apple",
    empresa2 = "Google";
console.log(empresa1 + " é mais \"valiosa\" que " + empresa2);

// NaN - Not a Number
var peso = "80KG",
    pesoPorDois = peso / 2;
console.log(pesoPorDois);

// JavaScript consegue dividir string se for numero
var peso = "80",
    pesoPorDois = peso / 2;
console.log(pesoPorDois);
