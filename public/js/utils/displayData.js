// Functions
const createFolder = (item, rootFolder) => {
  let folder = document.createElement("li");
  let tag = document.createElement("span");
  tag.innerHTML = item.name;
  folder.appendChild(tag);
  rootFolder.appendChild(folder);
};

/* THIS IS WORKING */
// function displayData(data) {
//   // console.log(data);
//   let htmlRetStr = "<ul class='folder-container'>";
//   for (let key in data) {
//     console.log(data[key]);
//     if (typeof data[key] == "object" && data[key] != null) {
//       // console.log(data[key]);
//       // console.log(htmlRetStr);
//       htmlRetStr += `${displayData(data[key])}</ul></li>`;
//     } else if (data[key] == "dir") {
//       htmlRetStr += `<li class='folder-item'>${data["name"]}</li><li class='folder-wrapper'>`;
//     } else if (key == "name" && data["type"] != "dir") {
//       htmlRetStr += `<li class='file-item'>${data["name"]}</li>`;
//     }
//   }
//   return htmlRetStr;
// }

/* WORKING ON THIS */
const displayData = (array) => {
  // Iterate over the array of objects (directories)
  for (let obj of array) {
    // Iterate over the properties in the objects
    for (let prop in obj) {
      //Check if the value of a property is an object
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        const folderContainer = document.createElement("ul");
        console.log(displayData(obj[prop]));
        displayData(obj[prop]);
      } else if (obj[prop] === "dir") {
        console.log(obj["name"]);
      } else if (obj[prop] === "file") {
        console.log(obj["name"]);
      }
    }
  }
};

export { displayData };
