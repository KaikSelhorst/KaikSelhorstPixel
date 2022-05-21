export class MenuMobile {
  constructor(item,menu){
    this.item = document.querySelector(item)
    this.menu = document.querySelector(menu)
    this.menuItems = this.menu.querySelectorAll('a')

    // BIND
    this.MenuItems = this.MenuItems.bind(this)
    this.addEventItem = this.addEventItem.bind(this)

    this.MenuItems()
    this.addEventItem()
    }
  addEventItem(){
    this.item.addEventListener('click',() => {
      this.addClassMenuMobile()
      this.AriaAccessibility()
      this.StyleInBody()
    })
  }
  addClassMenuMobile(){
    this.menu.classList.toggle('active')
  }
  AriaAccessibility(){
    if(this.menu.classList.contains('active')){
      this.item.ariaLabel = 'Close Menu'
    }else{
      this.item.ariaLabel = 'Open Menu'
    }
    this.item.ariaExpanded = this.menu.classList.contains('active')
  }
  StyleInBody(){
    if(this.menu.classList.contains('active')){
      document.body.style.overflow = 'hidden'
      document.body.classList.add('blur')
    }else{
      document.body.style.removeProperty('overflow')
      document.body.classList.remove('blur')
    }
  }
  MenuItems(){
    this.menuItems.forEach(element => {
      element.addEventListener('click',()=> {
        this.menu.classList.remove('active')
        this.AriaAccessibility()
        this.StyleInBody()
      })
    });
  }
}