export default class Theme {
  constructor(btnSwitch, popup, container, themeClass) {
    this.btnSwitch = document.querySelector(btnSwitch);
    this.popup = document.querySelector(popup);
    this.container = document.querySelector(container);
    this.themeClass = themeClass;

    this.handleClick = this.handleClick.bind(this);

    this.getDefaultTheme();
  }

  handlePopup() {
    this.popup.classList.add("enable");
    // Setting Time for remove Pop Up
    setTimeout(() => this.popup.classList.remove("enable"), 6000);
  }

  setThemeClass() {
    this.container.classList.toggle(this.themeClass);
  }

  checkTheme() {
    if (this.container.classList.contains(this.themeClass)) {
      localStorage.setItem("theme", this.themeClass);
    } else {
      localStorage.removeItem("theme");
    }
  }

  getDefaultTheme() {
    if (localStorage.getItem("theme") === this.themeClass) {
      this.setThemeClass();
    }
  }

  handleClick() {
    this.handlePopup();
    this.setThemeClass();
    this.checkTheme();
  }

  init() {
    if (this.btnSwitch && this.popup && this.container) {
      this.btnSwitch.addEventListener("click", this.handleClick);
    }
    return this;
  }
}
