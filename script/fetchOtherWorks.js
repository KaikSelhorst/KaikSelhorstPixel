export default function initFetchOtherWorks() {
  const otherWorkSection = document.querySelector("#other_work ul");

  function workItemLanguages(array) {
    const itens = array.map((itemArray) => `<li>${itemArray}</li>`).join("");
    return itens;
  }

  function createWorkItem(work) {
    const li = document.createElement("li");
    // WorKItem Source
    const gitIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>`;
    const liveIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  <polyline points="15 3 21 3 21 9"></polyline>
  <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>`;

    // WorkItem Creator
    li.innerHTML += `
    <div class="other_work_top">
      <img src="./assets/folder.svg" alt="Folder PixelArt">
      <div class="other_work_link">
        <a href="${work.github}" target="_blank" class="cor-0 cor-p1-hover">${gitIcon}</a>
        <a href="${work.live}" target="_blank" class="cor-0 cor-p1-hover">${liveIcon}</a>
      </div>
    </div>`;

    li.innerHTML += `
    <h3 class="font-s-1 cor-0">${work.name}</h3>
    <p class="font-xs cor-1">${work.about}</p>
    <div class="other_work_language">
    <ul class="font-xs-4 cor-2">${workItemLanguages(work.languages)}</ul>`;
    return li;
  }

  async function getotherWorksList() {
    const listWorks = await fetch("../json/otherWorkApi.json");
    const worksJSON = await listWorks.json();

    worksJSON.forEach((work) => {
      const workItem = createWorkItem(work);

      otherWorkSection.appendChild(workItem);
    });
  }
  getotherWorksList();
}
