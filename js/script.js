import substituiJs from "./modulos/trocajs.js";
import addData from "./modulos/dataset.js";
import ScrollSuave from "./modulos/scroll-suave.js";
import ScrollAnima from "./modulos/anima-scroll.js";
import Accordion from "./modulos/accordion.js";
import Tabnav from "./modulos/tabnav.js";
import Modal from "./modulos/modal.js";
import Toltip from "./modulos/toltip.js";
import DropMenu from "./modulos/dropmenu.js";
import mobile from "./modulos/mobile.js";
import Numeros from "./modulos/numeros.js";
import funcionamento from "./modulos/tempo.js";
import compraBitcoin from "./modulos/bitcoin.js";

addData();
substituiJs();
const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-atributes='js-faq-lista'] dt");
accordion.init();

const tabnave = new Tabnav(
  "[data-atributes='js-tabmenu'] li",
  "[data-atributes='js-desc'] section"
);
tabnave.init();

const modal = new Modal(
  "[data-login='login']",
  "[data-modal='fechar']",
  '[data-modal="container"',
  '[data-modal="entrar"]'
);
modal.init();

const toltip = new Toltip("[data-toltip]");
toltip.init();

funcionamento();
compraBitcoin("https://blockchain.info/ticker", ".compraBitcoin");
mobile();

// Numeros();
const numero = new Numeros(".numeros", "[data-numero]", "ativo");
numero.init();

// dropMenu();
const dropmenu = new DropMenu(
  "[data-dropmenu]",
  ".sobre",
  document.documentElement
);
dropmenu.init();

const animaScroll = new ScrollAnima("[data-atributes='js-scroll']", "ativo");
animaScroll.init();
