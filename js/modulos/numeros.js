export default class numeros {
  constructor(sectionTarget, numero, ObserveClass) {
    this.section = document.querySelector(sectionTarget);
    this.numeros = document.querySelectorAll(numero);
    this.ObserveClass = ObserveClass;
  }

  animaNumero() {
    console.log(this.numeros);
    this.numeros.forEach((item) => {
      const valor = +item.innerText;

      let start = 0;
      const timer = setInterval(() => {
        const divide = Math.floor(valor / 100);
        start += divide;
        item.innerText = start;
        if (start > valor) {
          item.innerText = item.innerHTML;
          clearInterval(timer);
        }
      }, 30 * Math.random());
    });
  }

  addMudou() {
    this.observador = new MutationObserver((mutacao) => {
      if (mutacao[0].target.classList.contains(this.ObserveClass)) {
        this.observador.disconnect();
        this.animaNumero();
      }
    });
    this.observador.observe(this.section, { attributes: true });
  }

  init() {
    if (this.section && this.numeros && this.ObserveClass) {
      this.addMudou();
    }
    return this;
  }
}

// export default function numeros() {}

// const sectionTarget = document.querySelector(".numeros");
// function animaNumero() {
//   const numero = document.querySelectorAll("[data-numero]");

//   numero.forEach((item) => {
//     const valor = +item.innerText;

//     let start = 0;
//     const timer = setInterval(() => {
//       const divide = Math.floor(valor / 100);
//       start += divide;
//       item.innerText = start;
//       if (start > valor) {
//         item.innerText = item.innerHTML;
//         clearInterval(timer);
//       }
//     }, 30 * Math.random());
//   });
// }

// let observador;

// function mudou(mutacao) {
//   console.log(mutacao);
//   if (mutacao[0].target.classList.contains("ativo")) {
//     observador.disconnect();
//     animaNumero();
//   }
// }

// observador = new MutationObserver(mudou);

// observador.observe(sectionTarget, { attributes: true });
