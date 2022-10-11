export default class Scrollnima {
  constructor(section, chave) {
    this.section = document.querySelectorAll(section);
    this.TelaMetade = window.innerHeight * 0.6;
    this.ativa = chave;

    this.verificaDistancia = this.verificaDistancia.bind(this);
  }

  getDistancia() {
    this.distance = Array.from(this.section).map((sessao) => {
      const topo = sessao.offsetTop;
      return {
        element: sessao,
        offset: Math.floor(topo - this.TelaMetade),
      };
    });
  }

  verificaDistancia() {
    const scroll = window.pageYOffset;
    this.distance.forEach((item) => {
      if (scroll > item.offset) {
        item.element.classList.add(this.ativa);
      } else if (item.element.classList.contains(this.ativa)) {
        item.element.classList.remove(this.ativa);
      }
    });
  }

  AtivaPrimeiro() {
    this.section[0].classList.add(this.ativa);
  }

  init() {
    if (this.section.length) {
      this.getDistancia();
      this.AtivaPrimeiro();
      window.addEventListener("scroll", this.verificaDistancia);
    }
    return this;
  }
}
