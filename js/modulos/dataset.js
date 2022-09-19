export default function addData() {
  const sec = document.querySelectorAll(".animais-descricao section");
  let x = 0;

  sec.forEach((item) => {
    const modulo = x % 2;
    if (modulo !== 0) {
      item.setAttribute("data-anime", "show-right");
    } else {
      item.setAttribute("data-anime", "show-down");
    }
    x += 1;
  });
  sec.forEach((item) => {
    item.classList.add(item.dataset.anime);
  });
}
