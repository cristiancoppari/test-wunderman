const root = document.querySelector('.root-directory-tree');

const presentData = (htmlElements) => {
  root.innerHTML = htmlElements;
};

export { presentData };
