var nomeEmpresa = document.querySelector("#nome_empresa");
var nomeFundador = document.querySelector("#nome_fundador");
var enderocoEmpresa = document.querySelector("#endereco_empresa");
var emailEmpresa = document.querySelector("#email_empresa");
var numeroTelefone = document.querySelector("#numero_telefone");
var setorAtuacao = document.querySelector("#setor_atuacao");
var montante = document.querySelector("#montante");
var finalidadeFinanciamento = document.querySelector("#finalidade_financiamento");
var progressoEmpresa = document.querySelector("#progresso_empresa");

var inputForm = document.querySelectorAll(".input-form");
var inputArray = [
  nomeEmpresa,
  nomeFundador,
  enderocoEmpresa,
  emailEmpresa,
  numeroTelefone,
  setorAtuacao,
  montante,
  finalidadeFinanciamento,
  progressoEmpresa,
];

function submit() {
  for (i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i].value == "") {
      alert("preencha tudo");
      break;
    }
  }
}

console.log(inputForm)
