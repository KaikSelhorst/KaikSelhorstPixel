import icons from "./icons.js";

const { gitIcon, externalLink, folder } = icons.returnIcons();

export default class initOtherWorks {
  constructor(section, url) {
    this.section = document.querySelector(section);
    this.url = url;
    this.init();
  }

  createElement(elementType, className = null) {
    const li = document.createElement(elementType);
    if (!(className === null)) li.classList.add(className);
    return li;
  }

  createLangBox(languages) {
    return languages.map((language) => `<li>${language}</li>`).join("");
  }

  createItem({ github, live, name, about, languages }) {
    const itemBox = this.createElement("li");
    itemBox.innerHTML = `
    <div class="other_work_top">
      ${folder}
      <div class="other_work_link">
        <a href="${github}" target="_blank" class="cor-0 cor-p1-hover">${gitIcon}</a>
        <a href="${live}" target="_blank" class="cor-0 cor-p1-hover">${externalLink}</a>
      </div>
    </div>
    <h3 class="font-s-1 cor-0">${name}</h3>
    <p class="font-xs cor-1">${about}</p>
    <div class="other_work_language">
    <ul class="font-xs-4 cor-2">${this.createLangBox(languages)}</ul>`;

    return itemBox;
  }

  async init() {
    try {
      const listWorks = await fetch(this.url);
      const worksJSON = await listWorks.json();

      worksJSON.forEach((work) => {
        const workItem = this.createItem(work);
        this.section.appendChild(workItem);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
