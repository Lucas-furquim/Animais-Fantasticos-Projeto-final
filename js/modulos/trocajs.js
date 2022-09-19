export default function substituiJs() {
  const classes = Array.from(document.querySelectorAll("[class*='js']"));

  classes.forEach((item) => {
    const elementos = item;
    const lista = Array.from(item.classList);

    lista.forEach((item1) => {
      if (item1.includes("js-")) {
        elementos.setAttribute("data-atributes", item1);
        elementos.classList.remove(item1);
      }
    });
  });
}
