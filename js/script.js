import substituiJs from "./modulos/trocajs.js";
import addData from "./modulos/dataset.js";
import ScrollSuave from "./modulos/scroll-suave.js";
import anima from "./modulos/anima-scroll.js";
import Accordion from "./modulos/accordion.js";
import imagens from "./modulos/imagens.js";
import ativar from "./modulos/modal.js";
import toltip from "./modulos/toltip.js";
import dropMenu from "./modulos/dropmenu.js";
import mobile from "./modulos/mobile.js";
import numeros from "./modulos/numeros.js";
import funcionamento from "./modulos/tempo.js";
import compraBitcoin from "./modulos/bitcoin.js";

addData();
substituiJs();
const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-atributes='js-faq-lista'] dt");
accordion.init();

ativar();
funcionamento();
compraBitcoin();
numeros();
mobile();
dropMenu();
toltip();
imagens();
anima();
