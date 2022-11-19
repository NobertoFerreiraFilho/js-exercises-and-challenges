var campoFiltro = document.querySelector("#filtrar-tabela");
console.log(campoFiltro);

/*1ª forma de fazer o filtro usando RegExp() */

/* campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
    
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    pacientes.forEach(function (paciente) {
      paciente.classList.remove("invisivel");
    });
  }
}); */


/*2ª forma de fazer o filtro usando substring() */
campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
    
      var comparavel = nome.substring(0, this.value.length).toLowerCase();

      if (!(this.value.toLowerCase() == comparavel)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    pacientes.forEach(function (paciente) {
      paciente.classList.remove("invisivel");
    });
  }
});
