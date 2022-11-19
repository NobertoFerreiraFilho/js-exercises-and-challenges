var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      document.querySelector("#erro-ajax").classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status, xhr.responseText);
      document.querySelector("#erro-ajax").classList.remove("invisivel");
    }
  });

  xhr.send();
});
