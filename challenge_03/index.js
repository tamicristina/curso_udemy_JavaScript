//Ex.1

var myvar = {};

//Ex.2

var pessoa = {
  nome: "Tamires",
  sobrenome: "Cristina",
  sexo: "Feminino",
  idade: 28,
  altura: 1.54,
  peso: 58,
  andando: false,
  caminhouQuantosMetros: 0,
};

//Ex.3
pessoa.fazerAniversario = function () {
  return pessoa.idade++;
};

//Ex.4

pessoa.andar = function (metros) {
  return (pessoa.caminhouQuantosMetros += metros), (pessoa.andando = true);
};

//Ex.5

pessoa.parar = function () {
  return (pessoa.andando = false);
};

// console.log(pessoa.parar());

//Ex. 6

pessoa.nomeCompleto = function () {
  return "Olá, meu nome é " + "" + pessoa.nome + " " + pessoa.sobrenome;
};

//Ex. 7
pessoa.mostrarIdade = function () {
  return "Olá, eu tenho" + " " + pessoa.idade + " " + "anos";
};

//Ex. 8

pessoa.mostrarPeso = function () {
  return "Eu peso" + " " + pessoa.peso + "Kg";
};

pessoa.mostrarAltura = function () {
  return "Minha altura é" + " " + pessoa.altura + "m";
};

//Ex. 10

pessoa.nomeCompleto(); //Olá, meu nome é Tamires Cristina

//Ex. 11

pessoa.mostrarIdade(); //28

//Ex. 12

pessoa.mostrarPeso(); //58

//Ex. 13
pessoa.mostrarAltura(); //1.54

//Ex. 14
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

//Ex. 15
pessoa.mostrarIdade(); //31

//Ex. 16
pessoa.andar(5);
pessoa.andar(6);
pessoa.andar(7);

//Ex.17

pessoa.andando; //true;

//Ex.18

pessoa.parar();

//Ex.19
//False

//Ex.20
pessoa.caminhouQuantosMetros; //18

//Ex.21

pessoa.apresentacao = function () {
  var sexo = "o";
  var idadeAnos = "anos";
  var metrosCaminhados = "metros";
  if (pessoa.sexo === "Feminino") {
    sexo = "a";
  }
  if (pessoa.idade === 1) {
    idadeAnos = "ano";
  }
  if (pessoa.caminhouQuantosMetros === 1) {
    metrosCaminhados = "metro";
  }
  return (
    "Olá, eu sou " +
    sexo +
    " " +
    pessoa.nome +
    " " +
    pessoa.sobrenome +
    ", tenho" +
    " " +
    pessoa.idade +
    " " +
    idadeAnos +
    "," +
    " " +
    pessoa.altura +
    ", " +
    "meu peso é" +
    " " +
    pessoa.peso +
    "Kg" +
    " " +
    "e, só hoje, eu já caminhei" +
    " " +
    pessoa.caminhouQuantosMetros +
    " " +
    metrosCaminhados +
    "!"
  );
};

//Ex.22
console.log(pessoa.apresentacao());
