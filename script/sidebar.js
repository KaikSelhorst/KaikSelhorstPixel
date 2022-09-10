import SmoothScroll from "./SmoothScroll.js";

export default class Sidebar {
  constructor(sections, containerIndicator, sectionClass) {
    this.sectionClass = sectionClass;
    this.containerIndicator = document.querySelector(containerIndicator);
    this.sections = [...document.querySelectorAll(sections)];

    window.addEventListener("scroll", () => this.handleScroll());

    // Bind
    this.checkOffsetTop = this.checkOffsetTop.bind(this);
  }

  createSideNav() {
    this.indicatorItems = this.sections.map(this.createItemIndicator);

    this.indicatorItems.forEach((item) =>
      this.containerIndicator.appendChild(item)
    );

    const smoothScroll = new SmoothScroll(".section_indicator a");
    smoothScroll.init();

    this.handleScroll();
  }

  createItemIndicator({ id }) {
    const item = document.createElement("a");
    const itemId = `#${id}`;
    const itemClean = id.replace("_", " ");
    item.href = itemId;
    item.dataset.tooltip = "";
    item.setAttribute("aria-label", `Go to section ${itemClean}`);
    return item;
  }

  checkOffsetTop(itemSection, i) {
    if (window.pageYOffset > itemSection.offsetTop - window.innerHeight * 0.5) {
      this.indicatorItems[i].classList.add(this.sectionClass);
    } else {
      this.indicatorItems[i].classList.remove(this.sectionClass);
    }
  }

  handleScroll() {
    this.sections.forEach(this.checkOffsetTop);
  }

  init() {
    if (this.sections.length) {
      this.createSideNav();
    }
    return this;
  }
}
