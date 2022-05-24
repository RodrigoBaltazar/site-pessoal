
// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})

// Ativar carregamento no botão de enviar formulário para

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

const msgTextArea = document.querySelector('#mensagem');
const emailField = document.querySelector('#email');


btnEnviar.addEventListener("click", ()=>{
// Prevem botão enviar de trocar para o enviando ao tentar enviar mensagem & email vazios
    if (msgTextArea.value != "" && emailField.value != "")
    {
        btnEnviar.style.display = "none";
        btnEnviarLoader.style.display = "inline-block";
    }
})


setTimeout(() => {
  document.querySelector('#msg-alert').style.display = 'none';
}, 5000)