function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
  }

  function mostra(frase) {
    document.write(frase);
    pulaLinha();
  }

  function calculaImc(altura, peso) {
    return peso / ((altura/100) * (altura/100));
  }

  var nome = prompt("Informe o seu nome");
  var alturaInformada = prompt(nome + ", informe sua altura em cm");
  var pesoInformado = prompt(nome + ", informe seu peso em kg");

  var imc = calculaImc(alturaInformada, pesoInformado);

  mostra(nome + ", o seu IMC é " + imc);

  if (imc < 18.5) {
    mostra("Você está abaixo do recomendado");
  }

  if (imc > 25) {
    mostra("Você está acima do recomendado");
  }

  if (imc >= 18.5 && imc <= 25) {
    mostra("Seu IMC está excelente!");
  }nob