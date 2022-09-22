// Accordion List
export default class Accordion {
  constructor(lista) {
    this.accLista = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  activeAccordion(e) {
    const dd = e.currentTarget.nextElementSibling;
    const at = dd.classList.contains("ativo");
    if (at) {
      e.currentTarget.classList.remove("ativo");
      dd.classList.remove("ativo");
    } else {
      e.currentTarget.classList.add("ativo");
      dd.classList.add("ativo");
    }
  }

  addAccordion() {
    this.accLista.forEach((item) => {
      item.addEventListener("click", this.activeAccordion);
    });
  }

  init() {
    this.accLista[0].classList.add(this.activeClass);
    this.accLista[0].nextElementSibling.classList.add(this.activeClass);
    this.addAccordion();
    return this;
  }
}
