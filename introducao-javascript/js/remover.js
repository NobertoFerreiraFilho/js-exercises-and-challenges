var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (e) {
  e.target.parentNode.classList.add("fadeOut");
  
  setTimeout(function(){
      e.target.parentNode.remove();
  }, 500);
});
