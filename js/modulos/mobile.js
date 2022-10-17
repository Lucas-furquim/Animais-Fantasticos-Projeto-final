export default class Mobile {
  constructor(RespMobile, btn, htmlPag) {
    this.RespMobile = document.querySelector(RespMobile);
    this.btn = document.querySelector(btn);
    this.html = htmlPag;
  }

  MobileBtn() {
    this.btn.addEventListener("click", () => {
      this.RespMobile.classList.toggle("ativo");
      this.btn.classList.toggle("ativo");
    });
  }

  CiqueFora() {
    let x = 0;
    this.html.addEventListener("click", () => {
      if (x === 1) {
        this.RespMobile.classList.remove("ativo");
        this.btn.classList.remove("ativo");
        x = 0;
      } else {
        x += 1;
      }
    });
  }

  init() {
    if (this.RespMobile) {
      this.MobileBtn();
      this.CiqueFora();
    }
    return this;
  }
}
