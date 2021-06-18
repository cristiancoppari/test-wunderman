const toggleBtn = document.querySelector(".btn-toggle");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelector(".nav-item");
const navItems = [...document.querySelectorAll(".nav .nav-item")];

const showLinksHandler = () => {
  // Dynamic Approach
  const navListHeight = navList.getBoundingClientRect().height;
  const elementStyle = window.getComputedStyle(navItem);
  const elementHeight = elementStyle.getPropertyValue("height").slice(0, 2);
  const navItemsHeight = elementHeight * navItems.length;

  if (navListHeight === 0) {
    console.log(elementHeight);
    navList.style.height = `${navItemsHeight}px`;
  } else {
    navList.style.height = 0;
  }
};

const hideMenuHandler = () => {
  if (window.innerWidth > 768) {
    navList.style.height = "auto";
  } else {
    navList.style.height = 0;
  }
};

navItems.map((item) => {
  // Closing the links when clicking in a nav item
  // item.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   navList.style.height = 0;
  // });
});

toggleBtn.addEventListener("click", showLinksHandler);
window.addEventListener("resize", hideMenuHandler);
