"use strict";

// =============================================================
// Entregável Web – Introdução ao JavaScript – Semana 03
// Execução: node app.js (ou colar no console do navegador)
// =============================================================

const titulo = (texto) => console.log(`\n===== ${texto} =====`);

// =============================================================
// BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
// =============================================================
titulo("BLOCO 1 – Fundamentos e Variáveis");

// 1.1 let pontos: valor inicial, soma de 10 na linha seguinte
let pontos = 50;
pontos = pontos + 10; // equivalente a pontos += 10
console.log("Pontos:", pontos); // 60

// 1.2 const MAX_PONTOS: tentativa de reatribuição
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // gera TypeError
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  // Motivo: const cria uma ligação (binding) imutável. Depois de
  // inicializada, o identificador não pode apontar para outro valor.
}

// 1.3 Um exemplo de cada tipo primitivo + typeof
const texto = "Olá, JavaScript";
const numero = 42;
const verdadeiro = true;
let indefinido; // declarada sem valor => undefined
const nulo = null;

console.log("typeof string   :", typeof texto);       // "string"
console.log("typeof number   :", typeof numero);      // "number"
console.log("typeof boolean  :", typeof verdadeiro);  // "boolean"
console.log("typeof undefined:", typeof indefinido);  // "undefined"
console.log("typeof null     :", typeof nulo);        // "object" (bug histórico da linguagem)

// 1.4 Template Literals x concatenação
const nome = "Fernando";
const curso = "Desenvolvimento Web";

const fraseTemplate = `Meu nome é ${nome} e estou estudando ${curso}.`;
const fraseConcatenada = "Meu nome é " + nome + " e estou estudando " + curso + ".";

console.log("Template Literal:", fraseTemplate);
console.log("Concatenação    :", fraseConcatenada);
console.log("São iguais?", fraseTemplate === fraseConcatenada); // true

// =============================================================
// BLOCO 2 – FUNÇÕES
// =============================================================
titulo("BLOCO 2 – Funções");

// 2.1 Função declarada: chamada ANTES da declaração (hoisting funciona)
console.log("Hoisting (declarada): ehMaiorDeIdade(20) =", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log("ehMaiorDeIdade(15) =", ehMaiorDeIdade(15)); // false

// 2.2 Função de expressão: chamada ANTES da declaração => erro
// A variável const existe, mas está na "Temporal Dead Zone" até a linha
// da declaração. Por isso o erro é ReferenceError.
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log("Depois da declaração: ehMaiorDeIdadeExpressao(20) =", ehMaiorDeIdadeExpressao(20));

// 2.3 Função dobro em três formas
function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2; // forma curta: retorno implícito

console.log("dobroDeclarada(4) =", dobroDeclarada(4)); // 8
console.log("dobroExpressao(4) =", dobroExpressao(4)); // 8
console.log("dobroArrow(4)     =", dobroArrow(4));     // 8

// 2.4 Parâmetro com valor padrão
const dobroPadrao = (n = 1) => n * 2;

console.log("dobroPadrao(5) =", dobroPadrao(5)); // 10
console.log("dobroPadrao()  =", dobroPadrao());  // 2 (usa n = 1)

// =============================================================
// BLOCO 3 – CONTROLE DE FLUXO
// =============================================================
titulo("BLOCO 3 – Controle de Fluxo");

// 3.1 classificarNota com if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 8   ->", classificarNota(8));   // Aprovado
console.log("Nota 6   ->", classificarNota(6));   // Aprovado
console.log("Nota 4.5 ->", classificarNota(4.5)); // Reprovado

// 3.2 switch com corSemaforo
console.log("\n--- Semáforo ---");
const corSemaforo = "amarelo"; // teste também "vermelho" e "verde"

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3.3 Tabuada do 5 com for clássico
console.log("\n--- Tabuada do 5 ---");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 3.4 Contagem regressiva com while
console.log("\n--- Contagem regressiva ---");
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem--; // condição de parada: evita loop infinito
}
console.log("Fim!");

// 3.5 Pares e ímpares de 1 a 20: com for e com while
console.log("\n--- Par ou ímpar (for) ---");
for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? "par" : "ímpar"}`);
}

console.log("\n--- Par ou ímpar (while) ---");
let k = 1;
while (k <= 20) {
  console.log(`${k} é ${k % 2 === 0 ? "par" : "ímpar"}`);
  k++;
}

// 3.6 diaDaSemana com switch e default
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido";
  }
}

console.log("\n--- Dia da semana ---");
console.log("diaDaSemana(1) =", diaDaSemana(1)); // Domingo
console.log("diaDaSemana(5) =", diaDaSemana(5)); // Quinta-feira
console.log("diaDaSemana(7) =", diaDaSemana(7)); // Sábado
console.log("diaDaSemana(9) =", diaDaSemana(9)); // Número inválido
