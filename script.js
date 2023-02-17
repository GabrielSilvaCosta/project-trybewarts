const botaoSubmit = document.querySelector('#submit-btn');
const botaoValidar = document.querySelector('#validacao');
const main = document.querySelector('main');
const formularioPrincipal = document.querySelector('#evaluation-form');
const validacao = () => {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  if ((email === 'tryber@teste.com') && (senha === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

botaoValidar.addEventListener('click', validacao);

const divulgacaoDeInformacoes = document.querySelector('#agreement');
botaoSubmit.disabled = true;

divulgacaoDeInformacoes.addEventListener('click', () => {
  if (divulgacaoDeInformacoes.checked) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
});

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.textContent = 500;
textarea.addEventListener('keyup', () => {
  counter.textContent = 500 - textarea.value.length;
});

const selectedSubjects = [];
const selecionaSubjectsChecked = () => {
  const subjects = document.querySelectorAll('.subject:checked');
  for (let index = 0; index < subjects.length; index += 1) {
    selectedSubjects.push(` ${subjects[index].value}`);
  }
  return selectedSubjects;
};

const conteudoFormulario = (event) => {
  event.preventDefault();
  const firstName = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const family = document.querySelector('input[name="family"]:checked');
  const evaluation = document.querySelector('input[name="rate"]:checked');
  const formulario = document.createElement('form');
  formulario.setAttribute('id', 'form-data');
  formulario.innerHTML = `<p> Nome: ${firstName.value} ${lastName.value} </p>
  <p> Email: ${email.value} </p>
  <p> Casa: ${house.value} </p>
  <p> Família: ${family.value} </p>
  <p> Matérias: ${selecionaSubjectsChecked()} </p>
  <p> Avaliação: ${evaluation.value} </p>
  <p> Observações: ${textarea.value} </p>`;
  formularioPrincipal.style.display = 'none';
  main.insertBefore(formulario, main.firstChild);
};

botaoSubmit.addEventListener('click', conteudoFormulario);
