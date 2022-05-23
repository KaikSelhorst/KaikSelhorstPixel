import {smoothScrollTo} from './SmoothEffect.js'

export class SmoothScroll {
  constructor(menuItems){
    this.menuItems = document.querySelectorAll(menuItems)
    this.eventaddInItems()
  }
  eventaddInItems(){
    this.menuItems.forEach(element => {
      element.addEventListener('click',this.ScrollToIdClick )
    })
  }
  ScrollToIdClick(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop - 80
    smoothScrollTo(0,to)   
  }
}

export class activeSmoothScrollEfect{
  constructor(section){
    this.section = Array.from(document.querySelectorAll(section))
    this.handleScroll = this.handleScroll.bind(this)
    this.activeNavScroll()
    this.addSpanItem()
    this.handleScroll()
  }
  activeNavScroll(){
    window.addEventListener('scroll',this.handleScroll)
  }
  addSpanItem(){
    let indicator = document.querySelector('.section_indicator')
    indicator.innerHTML = this.section.map(item => `<span></span>`).join('')
  }
  handleScroll(){
    let spanItems = document.querySelectorAll('.section_indicator > span')
    this.section.forEach((itemSection,i) => {
      if(window.pageYOffset > itemSection.offsetTop - window.innerHeight * 0.5){
        spanItems[i].classList.add('active')
      }else{
        spanItems[i].classList.remove('active')
      }
    })
  }
}