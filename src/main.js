import star from "./assets/images/svg/small-star.svg";
import github from "./assets/images/svg/github-color.svg";
import browser from "./assets/images/svg/browser.svg";

const url = "https://api.github.com/users/kamilMalinowski/repos?direction=desc";
const projects = document.querySelector(".projects--js");
const position = document.querySelector(".position--js");

const positions = [
  "Frontend Developer",
  "Css Developer",
  "UI&UX Developer",
  "Cool Developer",
  "Maybe one day a FullStack Developer"
];
let positionNumber = 0;
position.innerHTML = positions[positionNumber];

function changePositionName() {
  setInterval(() => {
    position.innerHTML = positions[positionNumber];
    positionNumber++;
    if (positionNumber >= positions.length) positionNumber = 0;
  }, 8000);
}

changePositionName()

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    for (let repo of res) {
      const {
        id,
        html_url,
        description,
        name,
        homepage,
        stargazers_count,
        topics,
      } = repo;

      let tags = "";
      for (let tag of topics) {
        tags += `<li class="text-sm font-medium tracking-wider bg-gray-800 bg-gradient-to-br from-gradientfrom to-gradientto rounded px-2 py-1 flex items-center">${tag}</li>`;
      }
      const projectTemplate = `<article class="bg-mygray-900 bg-gradient-to-br from-gradientfrom to-gradientto rounded-custom ">
    <div class="p-4  bg-gray-800 bg-gradient-to-br from-gradientfrom to-gradientto  flex gap-[0.375rem] border-b-2 border-mygray-900 shadow-card rounded-t-custom">
      <div class="rounded-full w-3 h-3 bg-mygray-900 opacity-50"></div>
      <div class="rounded-full w-3 h-3 bg-mygray-900 opacity-50"></div>
      <div class="rounded-full w-3 h-3 bg-mygray-900 opacity-50"></div>
    </div>
    <div class="p-5 md:p-10">
      <header class="flex gap-4 items-center mb-4">
        <h3 class="font-bold text-2xl">${name}</h3>
        <p class="max-w-max rounded px-2 py-1 flex items-center gap-[0.125rem] text-gray-400 bg-gray-800 bg-gradient-to-br from-gradientfrom to-gradientto font-medium leading-4">
          <img width="16" height="16" class="w-4 h-4" src="${star}" alt="" />
          ${stargazers_count}
        </p>
      </header>
      <p class="md:text-xl text-gray-400">${description}</p>
      <ul class="flex gap-2 mt-4 flex-wrap">${tags}</ul>
      <div class="flex flex-col gap-4 mt-10 md:flex-row">
        <a class="md:text-xl bg-mygray-900 text-primary rounded-xl border border-gray-800 font-bold tracking-wider flex gap-3 px-5 py-4 max-w-max" href="${homepage}" target="_blank" rel="noreferrer nofollow">
          <img width="24" height="24" class="w-6 h-6" src="${browser}" alt="" />
          View demo
        </a>
        <a class="md:text-xl bg-mygray-900 text-primary rounded-xl border border-gray-800 font-bold tracking-wider flex gap-3 px-5 py-4 max-w-max" href="${html_url}" target="_blank" rel="noreferrer nofollow">
          <img width="24" height="24" class="w-6 h-6" src="${github}" alt="" />
          Source code
        </a>
      </div>
    </div>
    </article>`;

      if (id !== 714817685 && description !== null)
        projects.insertAdjacentHTML("afterbegin", projectTemplate);
    }
  })
  .catch((error) => console.log(error));
