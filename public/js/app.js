// Global Imports
import "./utils/navbar.js";
import "./utils/fetchData.js";

// Name Imports
import { fetchData } from "./utils/fetchData.js";
import { displayData } from "./utils/displayData.js";
import { presentData } from "./utils/presentData.js";
import { URL } from "./utils/utils.js";

// Init Function
const init = async () => {
  const data = await fetchData(URL);
  const folderTree = displayData(data);
  presentData(folderTree);
};

window.addEventListener("load", init);
