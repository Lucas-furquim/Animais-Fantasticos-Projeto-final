export default function funcionamento() {
  const fechamento = document.querySelector(".dados li:last-child");
  const dias = new Date().getDay();
  const horas = new Date().getHours();

  if (horas >= 8 && horas < 18 && dias <= 5 && dias >= 1) {
    fechamento.classList.add("ativo");
  } else {
    fechamento.classList.remove("ativo");
  }
}
