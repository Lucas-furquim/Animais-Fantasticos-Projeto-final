export default class Scrollnima {
  constructor(section, chave) {
    this.section = document.querySelectorAll(section);
    this.TelaMetade = window.innerHeight * 0.6;
    this.ativa = chave;

    this.animaScroll = this.animaScroll.bind(this);
  }

  AtivaPrimeiro() {
    this.section[0].classList.add("ativo");
  }

  animaScroll() {
    this.section.forEach((item) => {
      const secTop = item.getBoundingClientRect().top;
      if (secTop < this.TelaMetade) {
        item.classList.add("ativo");
      } else if (
        item.classList.contains("ativo") &&
        secTop > this.TelaMetade + 250
      ) {
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    this.AtivaPrimeiro();
    window.addEventListener("scroll", this.animaScroll);
  }
}
