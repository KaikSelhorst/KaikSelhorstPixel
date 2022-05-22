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
  constructor(elementIndicatorSection,section){
    this.section = document.querySelectorAll(section)
    this.elementIndicatorSection = document.querySelectorAll(elementIndicatorSection)
    this.handleScroll = this.handleScroll.bind(this)
    this.activeNavScroll()
    this.handleScroll()
  }
  handleScroll(){
    this.section.forEach((section,i) => {
      if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5){
        this.elementIndicatorSection[i].classList.add('active')
      }else{
        this.elementIndicatorSection[i].classList.remove('active')
      }
    })
  }
  activeNavScroll(){
    window.addEventListener('scroll',this.handleScroll)
  }
}