export default function compraBitcoin() {
  const spanBit = document.querySelector(".compraBitcoin");
  const tiraCentavos = /,\d+/g;
  function ativa() {
    fetch("https://blockchain.info/ticker")
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
