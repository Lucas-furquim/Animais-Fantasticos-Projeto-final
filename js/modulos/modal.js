export default class Modal {
  constructor(login, fechar, container, entrar) {
    this.login = document.querySelector(login);
    this.fechar = document.querySelector(fechar);
    this.container = document.querySelector(container);
    this.entrar = document.querySelector(entrar);

    // brind this
    this.EventAbremodal = this.EventAbremodal.bind(this);
    this.fechaTela = this.fechaTela.bind(this);
    this.entrou = this.entrou.bind(this);
  }

  abrirModal() {
    this.container.classList.toggle("ativo");
  }

  EventAbremodal(event) {
    event.preventDefault();
    this.abrirModal();
  }

  fechaModal() {
    this.container.classList.remove("ativo");
  }

  fechaTela(tela) {
    const veri = tela.target.dataset.modal;
    if (veri === "container") {
      this.fechaModal();
    }
  }

  // entrou(e) {
  // continua amanhã
  //   e.preventDefault();
  //   console.log(window);
  // }

  addEvents() {
    this.login.addEventListener("click", this.EventAbremodal);
    this.fechar.addEventListener("click", this.EventAbremodal);
    this.container.addEventListener("click", this.fechaTela);
    // this.entrar.addEventListener("click", this.entrou);
  }

  init() {
    if (this.login && this.fechar && this.container && this.entrar) {
      this.addEvents();
    }
    return this;
  }
}
