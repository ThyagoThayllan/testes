//  1 - Primeiro problema
const numberInput = document.getElementById("number");
const button = document.getElementById("button");
const result = document.getElementById("result");

let number;

numberInput.addEventListener("input", (e) => {
  number = parseInt(e.target.value);

  result.innerText = "";
});

button.addEventListener("click", () => {
  isFibonacciNumber(number);
  numberInput.focus();
});

function isFibonacciNumber(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    result.style.color = "green";
    result.innerText = "Pertence à sequência de Fibonacci.";
    return;
  }

  if (!num) {
    alert("Preencha o campo.");
    return;
  }

  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  if (b === num) {
    result.style.color = "green";
    result.innerText = "Pertence à sequência de Fibonacci.";
    return;
  } else {
    result.style.color = "red";
    result.innerText = "Não pertence à sequência de Fibonacci.";
    return;
  }
}

//  2 - Segundo problema
const text = document.getElementById("text");
const buttonText = document.getElementById("buttonText");
const resultText = document.getElementById("resultText");

let wordToSearch = text.value;

text.addEventListener("input", (e) => {
  wordToSearch = e.target.value;
  resultText.innerText = "";
});

buttonText.addEventListener("click", () => {
  searchLetterA(wordToSearch);
  text.focus();
});

function searchLetterA(string) {
  let count = 0;
  let existA = false;

  if (!string) {
    return alert("Preencha o campo!");
  }

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();

    if (
      letter === "a" ||
      letter === "á" ||
      letter === "à" ||
      letter === "â" ||
      letter === "ã"
    ) {
      count++;
      existA = true;
    }
  }

  if (existA) {
    resultText.style.color = "green";
    resultText.innerText = `Contém ${count} ${
      count > 1 ? "letras" : "letra"
    } "A"!`;
  } else {
    resultText.style.color = "red";
    resultText.innerText = "Não contém nenhuma letra A!";
  }
}

//  3 -  Terceiro problema
const somaResult = document.getElementById("somaResult");

setTimeout(() => {
  let indice = 12;
  let soma = 0;
  let k = 1;

  while (k < indice) {
    k++;
    soma += k;
  }

  somaResult.style.backgroundColor = "green";
  somaResult.style.padding = "0 1rem";
  somaResult.style.borderRadius = "5px";
  somaResult.innerText = soma;
}, 2000);
