export default function imagens() {
  const imgs = document.querySelectorAll("[data-atributes='js-tabmenu'] li");
  const desc = document.querySelectorAll("[data-atributes='js-desc'] section");

  function ativa(index) {
    desc.forEach((item) => {
      item.classList.remove("ativo");
    });

    desc[index].classList.add("ativo");
  }
  if (imgs.length && desc.length) {
    ativa(0);

    imgs.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativa(index);
      });
    });
  }
}
