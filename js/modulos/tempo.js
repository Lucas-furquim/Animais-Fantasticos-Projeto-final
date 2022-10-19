export default class funcionamento {
  constructor(fechamento, dias, hora) {
    this.fechar = document.querySelector(fechamento);
    this.dias = dias;
    this.horas = hora;
  }

  HorarioComercial() {
    if (this.horas >= 8 && this.horas < 18 && this.dias <= 5 && this.dias >= 1) {
      this.fechar.classList.add("ativo");
    } else {
      this.fechar.classList.remove("ativo");
    }
  }

  init() {
    if (this.fechar.lenght) {
      this.HorarioComercial();
    }
    return this;
  }
}
