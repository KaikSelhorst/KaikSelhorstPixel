import { smoothScrollTo } from "./SmoothEffect.js";

export class SmoothScroll {
  constructor(menuItems) {
    this.menuItems = document.querySelectorAll(menuItems);
    this.eventaddInItems();
  }
  eventaddInItems() {
    this.menuItems.forEach((element) => {
      element.addEventListener("click", this.ScrollToIdClick);
    });
  }
  ScrollToIdClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const to = document.querySelector(id).offsetTop - 80;
    smoothScrollTo(0, to);
  }
}

export class activeSmoothScrollEfect {
  constructor(section) {
    this.section = Array.from(document.querySelectorAll(section));
    this.handleScroll = this.handleScroll.bind(this);
    this.activeNavScroll();
    this.addIndicator();
    this.eventAddInItemsIndicator();
    this.handleScroll();
  }
  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll);
  }
  addIndicator() {
    let indicator = document.querySelector(".section_indicator");
    indicator.innerHTML = this.section
      .map((item) => `<a href="#${item.id}"></a>`)
      .join("");
  }
  eventAddInItemsIndicator() {
    let indicatorItems = document.querySelectorAll(".section_indicator a");
    indicatorItems.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute("href");
        const to = document.querySelector(id).offsetTop - 80;
        smoothScrollTo(0, to);
      });
    });
  }
  handleScroll() {
    let indicatorItems = document.querySelectorAll(".section_indicator > a");
    this.section.forEach((itemSection, i) => {
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
