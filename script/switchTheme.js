export default class SwitchTheme {
  constructor(item, popup) {
    this.item = document.querySelector(item);
    this.popup = document.querySelector(popup);
    this.addEventItem();
    this.defaultTheme();
    this.addEventItnem = this.addEventItem.bind(this);
  }
  addEventItem() {
    this.item.addEventListener("click", () => {
      this.addClassInBodyAndLocalStorage();
      this.AriaAccessibility();
    });
  }
  addClassInBodyAndLocalStorage() {
    document.body.classList.toggle("white");
    this.popup.classList.toggle("enable");
    setTimeout(this.addClassInBodyAndLocalStorage, 6300);
    // Adds the Selected Theme to Local Storage
    // window.localStorage.setItem('Theme',document.body.classList.contains('white'))
  }
  defaultTheme() {
    if (window.localStorage.getItem("Theme") == "true") {
      document.body.classList.add("white");
      // responsible for changing colors in :root ->
      // document.documentElement.style.setProperty('--purple', '#');
    } else {
      document.body.classList.remove("white");
    }
  }
  AriaAccessibility() {
    if (document.body.classList.contains("white")) {
      this.item.ariaLabel = "Switch Theme to Dark";
    } else {
      this.item.ariaLabel = "Switch Theme to White";
    }
  }
}
