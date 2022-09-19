export default function scroll() {
  const links = document.querySelectorAll(
    "[data-atributes='js-menu'] a[href^='#']"
  );

  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
