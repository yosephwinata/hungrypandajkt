const featuredMenu = {
  featuredMenuList: [
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Siew Mai",
      image: "siew_mai.jpeg",
      price: 19
    }
  ]
};











































































/**
DO NOT TOUCH ANYTHING BELOW THIS LINE
===============================================================================================
DO NOT TOUCH ANYTHING BELOW THIS LINE
**/


const templateElement2 = document.getElementById('featured-menu-template-handlebars');

let templateSource2 = templateElement2.innerHTML;

let template2 = Handlebars.compile(templateSource2);

let compiledHtml2 = template2(featuredMenu);

document.getElementById('featured_menu_carousel').innerHTML = compiledHtml2;
