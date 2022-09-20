export default class scrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavor: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
  }

  scrollSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  linkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.scrollSection(e);
      });
    });
  }

  init() {
    this.linkEvent();
  }
}
