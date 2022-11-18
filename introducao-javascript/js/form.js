var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var pacienteAdicionado = obtemPacienteDoFormulario(form);

    var pacienteAdicionadoTR = montaTR(pacienteAdicionado);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteAdicionadoTR);

});

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTR(pacienteAdicionado){
    var pacienteAdicionadoTr = document.createElement("tr");
    pacienteAdicionadoTr.classList.add("paciente");

    var nomeTd = montaTd(pacienteAdicionado.nome,'info-nome')
    var pesoTd = montaTd(pacienteAdicionado.peso,'info-peso')
    var alturaTd = montaTd(pacienteAdicionado.altura,'info-altura')
    var gorduraTd = montaTd(pacienteAdicionado.gordura,'info-gordura')
    var imcTd = montaTd(pacienteAdicionado.imc,'info-imc')

    pacienteAdicionadoTr.appendChild(nomeTd);
    pacienteAdicionadoTr.appendChild(pesoTd);
    pacienteAdicionadoTr.appendChild(alturaTd);
    pacienteAdicionadoTr.appendChild(gorduraTd);
    pacienteAdicionadoTr.appendChild(imcTd);

    return pacienteAdicionadoTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}