export default class GitStatus {
  constructor(star, fork, projectName) {
    this.star = document.querySelector(star);
    this.fork = document.querySelector(fork);
    this.projectName = projectName;
    this.getStatus();
  }

  async getStatus() {
    const url = "https://api.github.com/users/KaikSelhorst/repos";
    const data = await fetch(url)
      .then((r) => r.json())
      .then((d) => d)
      .catch((e) => console.error(e));

    data.forEach((project) => {
      const projectNameIs = project.name === this.projectName;
      const projectStars = project.stargazers_count;
      const projectForks = project.forks;

      if (projectNameIs) {
        this.star.innerHTML += projectStars;
        this.fork.innerHTML += projectForks;
      }
    });
  }
}
