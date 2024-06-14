const form = document.getElementById("formulario");
const nomes = [];
const numero = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarLinha();
  atualizaTabela();
});

function adicionarLinha() {
  const inputNome = document.getElementById("nome");
  const inputNumero = document.getElementById("telefone");
  nomes.push(inputNome.value);
  numero.push(inputNumero.value);

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputNumero.value}</td>`;
  linha += `</tr>`;

  linhas += linha;

  inputNome.value = "";
  inputNumero.value = "";
  console.log(linha);
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
