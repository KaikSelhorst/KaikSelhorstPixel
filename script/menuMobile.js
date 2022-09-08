export default class MenuMobile {
  constructor(item, menu, classMenu, itemsMenu, mxWidth) {
    this.item = document.querySelector(item);
    this.menu = document.querySelector(menu);
    this.menuItems = document.querySelectorAll(itemsMenu);
    this.classMenu = classMenu;
    this.windowMedia = matchMedia(`(max-width:${mxWidth}px)`).matches;

    this.checkMenu = this.checkMenu.bind(this);
  }

  addEventItem() {
    this.item.addEventListener("click", this.checkMenu);
  }

  checkMenu() {
    if (this.menu.classList.contains(this.classMenu)) {
      this.menu.classList.remove(this.classMenu);
    } else {
      this.menu.classList.add(this.classMenu);
    }
    this.ariaExpanded();
    this.StyleInBody();
  }

  ariaExpanded() {
    this.item.ariaExpanded = this.menu.classList.contains(this.classMenu);
  }

  StyleInBody() {
    if (this.menu.classList.contains(this.classMenu))
      document.body.classList.add("blur");
    else document.body.classList.remove("blur");
  }

  MenuItems() {
    this.menuItems.forEach((item) => {
      item.addEventListener("click", this.checkMenu);
    });
  }

  init() {
    if (this.windowMedia) {
      if (this.item && this.MenuItems && this.menu) {
        this.MenuItems();
        this.addEventItem();
      }
    }
    return this;
  }
}
