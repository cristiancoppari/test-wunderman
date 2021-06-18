const displayData = (obj) => {
  let htmlFileTree = `<ul class='folder-container'>`;
  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      htmlFileTree += `${displayData(obj[key])}</ul></li>`;
    } else if (obj[key] == "dir") {
      htmlFileTree += `<li class='folder-item'><i class="fas fa-folder"></i>${obj["name"]}</li><li class='folder-wrapper'>`;
    } else if (key === "name" && obj["type"] != "dir") {
      htmlFileTree += `<li class='file-item'><i class="fas fa-file-code"></i>${obj["name"]}</li>`;
    }
  }
  return htmlFileTree;
};

export { displayData };
