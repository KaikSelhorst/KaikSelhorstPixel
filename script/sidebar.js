import SmoothScroll from "./SmoothScroll.js";
export default class initSidebar {
  constructor(sections) {
    this.sections = Array.from(document.querySelectorAll(sections));
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
    this.addIndicatorToSection();
  }
  addIndicatorToSection() {
    let indicatorSection = document.querySelector(".section_indicator");
    let indicators = this.createIndicatorBox();
    indicators.forEach((item) => indicatorSection.appendChild(item));
    this.indicatorsElements = ".section_indicator a";
    new SmoothScroll(this.indicatorsElements);
    this.handleScroll();
  }
  createIndicatorBox() {
    let indicators = this.sections.map(({ id }) => {
      const item = document.createElement("a");
      const itemId = `#${id}`;
      const itemClean = id.replace("_", " ");
      item.href = itemId;
      item.dataset.tooltip = "";
      item.setAttribute("aria-label", `Go to section ${itemClean}`);
      return item;
    });
    return indicators;
  }
  handleScroll() {
    let indicatorItems = document.querySelectorAll(this.indicatorsElements);
    this.sections.forEach((itemSection, i) => {
      if (
        window.pageYOffset >
        itemSection.offsetTop - window.innerHeight * 0.5
      ) {
        indicatorItems[i].classList.add("activeSection");
      } else {
        indicatorItems[i].classList.remove("activeSection");
      }
    });
  }
}
