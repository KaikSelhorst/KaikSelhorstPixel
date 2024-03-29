import smoothScrollTo from "./SmoothEffect.js";

export default class SmoothScroll {
  constructor(items) {
    this.items = document.querySelectorAll(items);
  }

  eventAddInItems() {
    this.items.forEach((element) => {
      element.addEventListener("click", this.ScrollToIdClick);
    });
  }

  ScrollToIdClick(event) {
    event.preventDefault();
    const element = this;
    const id = element.getAttribute("href");
    const to = document.querySelector(id).offsetTop - 80;
    smoothScrollTo(0, to);
  }

  init() {
    if (this.items.length) {
      this.eventAddInItems();
    }
    return this;
  }
}
