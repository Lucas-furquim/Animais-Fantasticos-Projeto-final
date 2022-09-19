export default function ativar() {
  const login = document.querySelector("[data-login='login']");
  const fechar = document.querySelector("[data-modal='fechar']");
  const container = document.querySelector('[data-modal="container"');
  const entra = document.querySelector('[data-modal="entrar"]');

  function abrirModal(event) {
    event.preventDefault();
    container.classList.add("ativo");
  }

  function fechaModal() {
    container.classList.remove("ativo");
  }

  function fechaTela(tela) {
    const veri = tela.target.dataset.modal;
    if (veri === "container") {
      fechaModal();
    }
  }
  if (login && fechar && container && entra) {
    login.addEventListener("click", abrirModal);
    fechar.addEventListener("click", fechaModal);
    container.addEventListener("click", fechaTela);
  }
}
