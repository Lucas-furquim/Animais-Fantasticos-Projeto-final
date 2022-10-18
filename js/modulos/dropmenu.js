export default class dropMenu {
  constructor(section, elemento, html) {
    this.section = document.querySelector(section);
    this.elemento = document.querySelector(elemento);
    this.html = html;

    this.clique = this.clique.bind(this);
    this.htmlClique = this.htmlClique.bind(this);
  }

  clique(e) {
    e.preventDefault();
    this.classList.toggle("ativo");
  }

  htmlClique(e) {
    e.preventDefault();
    const sobre = e.target;
    if (sobre !== this.elemento) {
      this.dropmenu.classList.remove("ativo");
    }
  }

  addEventos() {
    this.section.addEventListener("click", this.clique);
    this.html.addEventListener("click", this.htmlClique);
  }

  init() {
    if (this.section.length) {
      this.addEventos();
    }
    return this;
  }
}
