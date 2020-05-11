const frozenDimsum = {
  frozenDimsumList: [
    {
      name: "Frozen Siew Mai (10 pcs)",
      category: "frozendimsum",
      image: "siew_mai.jpeg",
      price: 62.5
    },
    {
      name: "Siew Mai (10 pcs)",
      category: "frozendimsum",
      image: "siew_mai.jpeg",
      price: 62.5
    }
  ]
};










































































/**
DO NOT TOUCH ANYTHING BELOW THIS LINE
===============================================================================================
DO NOT TOUCH ANYTHING BELOW THIS LINE
**/

const templateElement = document.getElementById('frozendimsum-template-handlebars');

let templateSource = templateElement.innerHTML;

let template = Handlebars.compile(templateSource);

let compiledHtml = template(frozenDimsum);

document.getElementById('frozen_dimsum_images').innerHTML = compiledHtml;
