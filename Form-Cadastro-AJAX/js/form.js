var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var pacienteAdicionado = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(pacienteAdicionado);
    console.log(erros);

  if (erros.length > 0) {
    exibeMensagemDeErro(erros);
  } else {

    adicionaPacienteNaTabela(paciente);

    form.reset();
    document.querySelector('#mensagens-erro').innerHTML = "";
  }
});



function adicionaPacienteNaTabela(paciente){
  var pacienteAdicionadoTR = montaTR(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteAdicionadoTR);
}



function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTR(pacienteAdicionado) {
  var pacienteAdicionadoTr = document.createElement("tr");
  addClass(pacienteAdicionadoTr, "paciente");

  pacienteAdicionadoTr.appendChild(
    montaTd(pacienteAdicionado.nome, "info-nome")
  );
  pacienteAdicionadoTr.appendChild(
    montaTd(pacienteAdicionado.peso, "info-peso")
  );
  pacienteAdicionadoTr.appendChild(
    montaTd(pacienteAdicionado.altura, "info-altura")
  );
  pacienteAdicionadoTr.appendChild(
    montaTd(pacienteAdicionado.gordura, "info-gordura")
  );
  pacienteAdicionadoTr.appendChild(montaTd(pacienteAdicionado.imc, "info-imc"));
  console.log(pacienteAdicionadoTr);
  return pacienteAdicionadoTr;
}

function addClass(dado, classe) {
  var tagClass = dado.classList.add(classe);
  return tagClass;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  addClass(td, classe);
  return td;
  s;
}
function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Favor Preencher o nome");
  }
  if (paciente.peso.length == 0) {
    erros.push("Favor Preencher o peso");
  }
  if (paciente.altura.length == 0) {
    erros.push("Favor Preencher o altura");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso iválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura iválida");
  }

  if (paciente.gordura.length == 0) {
    erros.push("Favor Preencher o % de gordura");
  }

  return erros;
}

function exibeMensagemDeErro(erros) {
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        li.classList.add('erro');
        ul.appendChild(li);
    })   
    
    console.log(ul);
}
