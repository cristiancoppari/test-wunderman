// Global Imports
import './utils/navbar.js';

// Name Imports
import { fetchData } from './utils/fetchData.js';
import { displayData } from './utils/displayData.js';
import { presentData } from './utils/presentData.js';
import { URL } from './utils/utils.js';

// AOS Animations init
AOS.init();

// Init Function
const init = async () => {
  try {
    const data = await fetchData(URL);
    const folderTree = displayData(data);
    presentData(folderTree);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('load', init);
