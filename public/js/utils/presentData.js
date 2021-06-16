import { fetchData } from "./fetchData.js";

const root = document.querySelector(".root-directory");

const presentData = (htmlElements) => {
  root.innerHTML = htmlElements;
};

export { presentData };
