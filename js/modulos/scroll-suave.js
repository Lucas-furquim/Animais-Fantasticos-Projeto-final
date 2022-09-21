export default class scrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.linkEvent = this.linkEvent.bind(this);
  }

  linkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView(this.options);
      });
    });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.linkEvent);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.linkEvent();
    }
    return this;
  }
}
