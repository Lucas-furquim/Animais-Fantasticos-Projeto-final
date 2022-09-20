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

const scrollSuave = new ScrollSuave("[data-atributes='js-menu'] a[href^='#']");
scrollSuave.init();

substituiJs();
addData();
imagens();
Accordion();
anima();
ativar();
toltip();
dropMenu();
mobile();
numeros();
funcionamento();
compraBitcoin();
