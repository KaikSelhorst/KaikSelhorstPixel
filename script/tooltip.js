export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);

    document.body.appendChild(this.tooltipBox);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerHTML = text;
    this.tooltipBox = tooltipBox;
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
