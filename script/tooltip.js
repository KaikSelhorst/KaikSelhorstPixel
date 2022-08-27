export default class InitTooltip {
  constructor(TooltipData) {
    this.tooltips = document.querySelectorAll(TooltipData);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.init();
  }

  init() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.onMouseOver);
    });
  }

  onMouseOver(event) {
    const element = event.currentTarget;
    const tooltipBox = this.createTooltip(element);
    document.body.appendChild(tooltipBox);

    const onMouseMove = {
      handleEvent() {
        const mouseY = event.pageY;
        const mouseX = event.pageX;

        tooltipBox.style.top = `${mouseY + 20}px`;
        tooltipBox.style.left = `${mouseX + 20}px`;
      },
    };
    element.addEventListener("mousemove", onMouseMove);

    const onMouseLeave = {
      handleEvent() {
        tooltipBox.remove();
        element.removeEventListener("mousemove", onMouseMove);
        element.removeEventListener("mouseleave", onMouseLeave);
      },
    };
    element.addEventListener("mouseleave", onMouseLeave);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerHTML = text;
    tooltipBox.classList.add("tooltip");
    return tooltipBox;
  }
}
