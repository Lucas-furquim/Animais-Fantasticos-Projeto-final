export default class toltip {
  constructor(tolltip) {
    this.tolltip = document.querySelectorAll(tolltip);
  }

  movimento(criaDiv) {
    if (window.innerWidth < 700) {
      window.addEventListener("mousemove", (e) => {
        if (e.pageX < 510) {
          criaDiv.style.top = e.pageY + 15 + "px";
          criaDiv.style.left = e.pageX + 15 + "px";
        } else {
          criaDiv.style.left = e.pageX - 170 + "px";
          criaDiv.style.top = e.pageY + 15 + "px";
        }
      });
    } else {
      window.addEventListener("mousemove", (e) => {
        criaDiv.style.top = e.pageY + 15 + "px";
        criaDiv.style.left = e.pageX + 15 + "px";
      });
    }
  }

  criaTooltip(element) {
    const criaDiv = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    criaDiv.classList.add("tooltip");
    criaDiv.innerText = texto;
    document.body.appendChild(criaDiv);
    this.movimento(criaDiv);
    return criaDiv;
  }

  AtivaToltip() {
    this.tolltip.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        this.criaTooltip(e.currentTarget);
      });
    });
  }

  criaCaixa() {
    this.tolltip.forEach((item) => {
      item.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip");
        document.body.removeChild(tooltip);
      });
    });
  }

  init() {
    if (this.tolltip) {
      this.AtivaToltip();
      this.criaCaixa();
    }
    return this;
  }
}
