import { fetchData } from "./fetchData.js";

const rootDirectory = document.querySelector(".root-directory");

const displayData = (data) => {
  const items = data
    .map((item) => {
      return `<ul>
        <li>${item.name}</li>
      </ul>`;
    })
    .join("");

  return items;
};

export { displayData };
