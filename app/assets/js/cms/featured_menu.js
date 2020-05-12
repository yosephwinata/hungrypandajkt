const featuredMenu = {
  featuredMenuList: [
    {
      name: "Ayam Goreng Terasi",
      image: "ayam_goreng_terasi.jpeg",
      price: 49
    },
    {
      name: "Buncis Sapi Sichuan",
      image: "buncis_sapi_sichuan.jpeg",
      price: 49
    },
    {
      name: "Kangkung Hungry Panda",
      image: "kangkung_special_hp.JPG",
      price: 39
    },
    {
      name: "Nasi Gorng Yang Chow",
      image: "nasi_goreng_yangchow.JPG",
      price: 39
    },
    {
      name: "Sapi Lada Hitam",
      image: "sapi_lada_hitam.jpeg",
      price: 59
    },
    {
      name: "Polo Pao Panggang",
      image: "polopao_panggang.jpeg",
      price: 19
    },
    {
      name: "Onde Wijen Hitam",
      image: "onde_wijen_hitam.JPG",
      price: 19
    },
    {
      name: "Hakau",
      image: "hakau.jpeg",
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
