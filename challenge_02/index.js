//Ex.1

function soma(a, b) {
  return a + b;
}

//Ex.2

var resultado = soma(10, 20) + 5;

//Ex.3
var newVar;

//Ex.4
function adicionarValor() {
  var newVar = 25;
  return `O valor da variável agora é ${newVar}`;
}

//Ex.5
adicionarValor();

//Ex.6
/*O valor da variável agora é 25*/

//Ex.7

function multiplicacao(n1, n2, n3) {
  var multiplicacaoRes = 0;

  if (n1 === undefined || n2 === undefined || n3 === undefined) {
    return "Preencha os valores corretamente";
  } else {
    multiplicacaoRes = n1 * n2 * n3 + 2;
  }

  return multiplicacaoRes;
}

//Ex.8.1
console.log(multiplicacao(5, 5));
//Ex.8.2
console.log(multiplicacao(5, 5, 15));

//Ex.9
function tresArgumentos(n1, n2, n3) {
  if (n1 !== undefined && n2 === undefined && n3 === undefined) {
    return n1;
  } else if (n1 !== undefined && n2 !== undefined && n3 === undefined) {
    return n1 + n2;
  } else if (n1 !== undefined && n2 !== undefined && n3 !== undefined) {
    return (n1 + n2) / n3;
  } else if (n1 === undefined && n2 === undefined && n3 === undefined) {
    return false;
  } else {
    return null;
  }
}

//Ex.10

console.log(tresArgumentos()); //false
console.log(tresArgumentos(5, 20)); //25
console.log(tresArgumentos(5, 20, 10)); //2.5
