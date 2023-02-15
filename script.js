const validacao = () => {
  const email = document.querySelector('#email').value;
  console.log(email);
  const senha = document.querySelector('#senha').value;
  console.log(senha);

  if ((email === 'tryber@teste.com') && (senha === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

window.onload = () => {
  const botaoValidar = document.querySelector('#validacao');
  botaoValidar.addEventListener('click', validacao);

  const botaoSubmit = document.querySelector('#submit-btn');
  const inputPromo = document.querySelector('#agreement');
  botaoSubmit.disabled = true;
  botaoSubmit.addEventListener('click', (event) => {
    event.preventDefault();
  });

  inputPromo.addEventListener('click', () => {
    if (inputPromo.checked) {
      botaoSubmit.disabled = false;
    } else {
      botaoSubmit.disabled = true;
    }
  });
};
