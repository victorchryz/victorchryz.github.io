// Obtém referências aos elementos relevantes
const body = document.body;
const modeToggle = document.getElementById('mode-toggle');

// Função para alternar o modo claro e escuro
function toggleMode() {
  body.classList.toggle('light');
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeToggle.innerHTML = 'Light Mode';
  } else {
    modeToggle.innerHTML = 'Dark Mode';
  }
}

// Definir o modo claro como padrão
body.classList.add('light');

// Adicionar evento de clique ao botão
modeToggle.addEventListener('click', toggleMode);
