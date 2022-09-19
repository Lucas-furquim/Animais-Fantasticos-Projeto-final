export default function toltip() {
  const tolltip = document.querySelectorAll("[data-toltip]");

  function movimento(criaDiv) {
    window.addEventListener("mousemove", (e) => {
      criaDiv.style.top = e.pageY + 15 + "px";
      criaDiv.style.left = e.pageX + 15 + "px";
    });
  }

  function criaTooltip(element) {
    const criaDiv = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    criaDiv.classList.add("tooltip");
    criaDiv.innerText = texto;
    document.body.appendChild(criaDiv);
    movimento(criaDiv);
    return criaDiv;
  }

  tolltip.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      criaTooltip(e.currentTarget);
    });
  });

  tolltip.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      const tooltip = document.querySelector(".tooltip");
      document.body.removeChild(tooltip);
    });
  });
}
