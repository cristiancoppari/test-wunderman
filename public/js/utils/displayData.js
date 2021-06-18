// Functions
const createFolder = (item, rootFolder) => {
  let folder = document.createElement("li");
  let tag = document.createElement("span");
  tag.innerHTML = item.name;
  folder.appendChild(tag);
  rootFolder.appendChild(folder);
};

/* THIS IS WORKING */
/* function displayData(data) {
  let htmlRetStr = "<ul class='folder-container'>";
  for (let key in data) {
    if (typeof data[key] == "object" && data[key] != null) {
      htmlRetStr += `${displayData(data[key])}</ul></li>`;
    } else if (data[key] == "dir") {
      htmlRetStr += `<li class='folder-item'>${data["name"]}</li><li class='folder-wrapper'>`;
    } else if (key == "name" && data["type"] != "dir") {
      htmlRetStr += `<li class='file-item'>${data["name"]}</li>`;
    }
  }
  return htmlRetStr;
} */

/* With JSON as Object */
const displayData = (obj) => {
  let htmlRetStr = `<ul class='folder-container'>`;
  let folder;
  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      /* Template strings */
      htmlRetStr += `${displayData(obj[key])}</ul></li>`;
      // htmlRetStr += displayData( obj[key] );
      // htmlRetStr += '</ul></li>';
    } else if (obj[key] == "dir") {
      /* Template strings */
      htmlRetStr += `<li class='folder-item'><i class="fas fa-folder"></i>${obj["name"]}</li><li class='folder-wrapper'>`;
      // htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li><li class='folder-wrapper'>";
      // console.log(`carpeta: ${obj["name"]} dentro de ${folder}`);
    } else if (key === "name" && obj["type"] != "dir") {
      /* Template strings */
      htmlRetStr += `<li class='file-item'><i class="fas fa-file-code"></i>${obj["name"]}</li>`;
      // console.log(`archivo: ${obj["name"]} dentro de ${folder}`);
    }
  }
  return htmlRetStr;
};

export { displayData };
