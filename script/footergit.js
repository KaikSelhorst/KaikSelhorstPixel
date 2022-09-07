export default class GitStatus {
  constructor(star, fork, projectName, url) {
    this.star = document.querySelector(star);
    this.fork = document.querySelector(fork);
    this.url = url;
    this.projectName = projectName;
  }

  async getStatus() {
    try {
      const data = await fetch(this.url)
        .then((r) => r.json())
        .then((d) => d);

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

  init() {
    if (this.fork && this.star && this.projectName) this.getStatus();
    return this;
  }
}
