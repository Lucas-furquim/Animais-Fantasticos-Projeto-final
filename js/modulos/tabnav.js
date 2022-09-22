export default class Tabnav {
  constructor(img, descricao) {
    this.imgs = document.querySelectorAll(img);
    this.desc = document.querySelectorAll(descricao);
  }

  ativa(index) {
    this.desc.forEach((item) => {
      item.classList.remove("ativo");
    });

    this.desc[index].classList.add("ativo");
  }

  init() {
    if (this.imgs.length && this.desc.length) {
      this.ativa(0);
      this.imgs.forEach((item, index) => {
        item.addEventListener("click", () => {
          this.ativa(index);
        });
      });
    }
    return this;
  }
}
