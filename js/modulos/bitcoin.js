export default function compraBitcoin(url, target) {
  const spanBit = document.querySelector(target);
  const tiraCentavos = /,\d+/g;
  function ativa() {
    fetch(url)
      .then((r) => {
        r.json().then((bit) => {
          const {
            BRL: { buy },
          } = bit;
          const real = Math.floor(buy).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          const dinheiroFinal = real.replace(tiraCentavos, "");
          spanBit.innerHTML = dinheiroFinal;
        });
      })
      .catch(() => {
        spanBit.innerHTML = "Não foi possivel carregar os valores";
      });
  }
  ativa();
  setInterval(() => {
    ativa();
  }, 30000);
}
