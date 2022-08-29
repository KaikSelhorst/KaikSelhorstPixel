export default class GitStatus {
  constructor(star, fork, projectName) {
    this.star = document.querySelector(star);
    this.fork = document.querySelector(fork);
    this.projectName = projectName;
    this.getStatus();
  }

  async getStatus() {
    try {
      const url = "https://api.github.com/users/KaikSelhorst/repos";
      const data = await fetch(url)
        .then((r) => r.json())
        .then((d) => d)
        .catch((e) => console.error(e));

      data.forEach(({ name, stargazers_count: stars, forks }) => {
        if (name === this.projectName) {
          this.star.innerHTML += stars;
          this.fork.innerHTML += forks;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
