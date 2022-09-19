export default function mobile() {
  const RespMobile = document.querySelector('[data-menu="lista"]');
  const btn = document.querySelector('[data-menu="mobile"]');
  const html = document.documentElement;
  let x = 0;

  btn.addEventListener("click", () => {
    mobile.classList.toggle("ativo");
    btn.classList.toggle("ativo");
  });

  html.addEventListener("click", () => {
    if (x === 1) {
      RespMobile.classList.remove("ativo");
      btn.classList.remove("ativo");
      x = 0;
    } else {
      x += 1;
    }
  });
}
