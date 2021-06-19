const toggleBtn = document.querySelector('.btn-toggle');
const linksContainer = document.querySelector('.nav-container');
// const navList = document.querySelector(".nav-list");
const navBar = document.querySelector('.nav');
const navItem = document.querySelector('.nav-item');
const navItems = document.querySelectorAll('.nav .nav-item');
const scrollLinks = document.querySelectorAll('.scroll-link');

const showLinksHandler = () => {
  // Dynamic Approach
  const navListHeight = linksContainer.getBoundingClientRect().height;
  const elementStyle = window.getComputedStyle(navItem);
  // Calculate the height of the links dynamic
  const elementHeight = elementStyle.getPropertyValue('height').slice(0, 2);
  const navItemsHeight = elementHeight * navItems.length;

  if (navListHeight === 0) {
    console.log(elementHeight);
    linksContainer.style.height = `${navItemsHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
};

const hideMenuHandler = () => {
  if (window.innerWidth > 768) {
    linksContainer.style.height = 'auto';
  } else {
    linksContainer.style.height = 0;
  }
};

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();

    // navigate to a specific spot
    // with the slice i remove the # and i get the id clean
    const id = e.currentTarget.getAttribute('href').slice(1);
    console.log(e.currentTarget);
    const element = document.getElementById(id);

    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;

    const containerHeight = linksContainer.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    /* if (!fixedNavbar) {
      position = position - navHeight;
    } */

    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // where to scroll to
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

toggleBtn.addEventListener('click', showLinksHandler);
window.addEventListener('resize', hideMenuHandler);
