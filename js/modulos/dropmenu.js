export default function dropMenu() {
  const dropmenu = document.querySelector("[data-dropmenu]");
  const elementoSobre = document.querySelector(".sobre");
  const html = document.documentElement;

  const clique = function clique(e) {
    e.preventDefault();
    this.classList.toggle("ativo");
  };

  ["touchstart", "click"].forEach((eventos) => {
    dropmenu.addEventListener(eventos, clique);
  });

  function htmlClique(e) {
    e.preventDefault();
    const sobre = e.target;
    if (sobre !== elementoSobre) {
      dropmenu.classList.remove("ativo");
    }
  }

  ["touchstart", "click"].forEach((eventos) => {
    html.addEventListener(eventos, htmlClique);
  });
}
