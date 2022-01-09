const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  alert(
    `Obrigado ${nome.value}, agradecemos sua resposta, uma cópia das respostas foi enviada para o ${email.value}.`
  );

  limparForm();
});

const limparForm = () => {
  nome.value = '';
  email.value = '';
};
