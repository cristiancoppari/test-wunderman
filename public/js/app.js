// Global Imports
import './utils/navbar.js';

// Name Imports
import { fetchData } from './utils/fetchData.js';
import { displayData } from './utils/displayData.js';
import { presentData } from './utils/presentData.js';
import { URL } from './utils/utils.js';

$(document).ready(() => {
  // AOS Animations init
  AOS.init();

  // Slick Carousel
  $('.slick-carousel-cards').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    initialSlide: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  });

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
});
