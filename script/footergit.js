export class gitStatus {
  constructor(star,fork){
    this.star = document.querySelector(star)
    this.fork = document.querySelector(fork)
    this.GetDataRepository()
    this.GetDataRepository = this.GetDataRepository.bind(this)
  }
  GetDataRepository(){
    fetch('https://api.github.com/users/KaikSelhorst/repos')
    .then(response => response.json())
    .then(data => data.forEach(element => {
      if(element.name == 'My-Gallery'){
        console.log(element)
        this.star.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        ${element.stargazers_count}
        `
        this.fork.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
        ${element.forks}
        `
      }
    }))
    .catch(e => console.error(e))
  }
  
}