
    function sorteia() {
      return Math.round(Math.random() * 10);
    }

    function sorteiaNumeros(quantidade) {
      var segredos = [];

      var numero = 1;

      while (numero <= quantidade) {
        var numeroAleatorio = sorteia();

        if (numeroAleatorio !== 0) {
          var achou = false;

          for (var posicao = 0; posicao < segredos.length; posicao++) {
            if (segredos[posicao] == numeroAleatorio) {
              achou = true;
              break;
            }
          }

          if (achou == false) {
            segredos.push(numeroAleatorio);
            numero++;
          }
        }
      }

      return segredos;
    }

    var segredos = sorteiaNumeros(5);

    console.log(segredos);

    var input = document.querySelector("input");
    input.focus();

    function mostrarSegredo(text) {
      document.getElementById("container__segredo").innerHTML = text;
    }

    function verifica() {
      mostrarSegredo("");
      if (input.value === "") {
        return alert("Digite um número antes de clicar!");
      } else {
        var achou = false;
        for (var posicao = 0; posicao < segredos.length; posicao++) {
          if (input.value == segredos[posicao]) {
            var text =
              "Você acertou! Você disse " +
              input.value +
              " e o segredo era: " +
              segredos;
            mostrarSegredo(text);
            achou = true;
            break;
          }
        }

        if (achou == false) {
          var text = "Você errou! Tente de novo!";
          mostrarSegredo(text);
        }
      }
      input.value = "";
      input.focus();
    }

    var button = document.querySelector(".container__button");

    button.onclick = verifica;

