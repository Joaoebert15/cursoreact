const inputNome = document.querySelector('#nome');
const enviarNomeBtn = document.querySelector('#enviarNome');
const saud = document.querySelector('#saud');

enviarNomeBtn.addEventListener('click',  function() {

    inputNome.style.display = 'none'
    enviarNomeBtn.style.display = 'none'

    inputNome.style.border = 'none'


    

  let nome = inputNome.value.trim();

  if (!nome || nome.length === 0) {
    nome = 'Usuário';
  }

  let dataHoraAtual = new Date();
  let hora = dataHoraAtual.getHours();
  let saudacao;

  if (hora < 12) {
    saudacao = 'BOM DIA';
  } else if (hora < 18) {
    saudacao = 'BOA TARDE';
  } else {
    saudacao = 'BOA NOITE';
  }

  saud.style.display = 'flex';
  saud.style.justifyContent = 'center';
  saud.innerHTML = `<h1>OLÁ, ${saudacao} ${nome.toUpperCase()} </h1>`;
});
