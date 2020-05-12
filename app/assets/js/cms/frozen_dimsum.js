const frozenDimsum = {
  frozenDimsumList: [
    {
      name: "Frozen Siew Mai (10 pcs)",
      category: "frozendimsum",
      image: "siew_mai.jpeg",
      price: 62.5
    },
    {
      name: "Frozen Hakau (10 pcs)",
      category: "frozendimsum",
      image: "hakau.jpeg",
      price: 62.5
    },
    {
      name: "Frozen Pakcoy Dumpling (10 pcs)",
      category: "frozendimsum",
      image: "kaki_ayam.jpeg",
      price: 62.5
    },
    {
      name: "Frozen Kuo Tie (10 pcs)",
      category: "frozendimsum",
      image: "shanghai_kuotie.jpeg",
      price: 62.5
    },
    {
      name: "Frozen Onde Wijen Hitam (10 pcs)",
      category: "frozendimsum",
      image: "onde_wijen_hitam.JPG",
      price: 62.5
    },
    {
      name: "Frozen Pangsit Udang Mayonnaise (10 pcs)",
      category: "frozendimsum",
      image: "pangsit_udang_mayonnaise.jpeg",
      price: 62.5
    },
    {
      name: "Frozen Mantou (10 pcs)",
      category: "frozendimsum",
      image: "mantou_goreng.jpeg",
      price: 43
    },
    {
      name: "Frozen Lumpia Sayuran (12 pcs)",
      category: "frozendimsum",
      image: "lumpia_sayuran.jpeg",
      price: 75
    },
    {
      name: "Frozen Bakpao Telor Asin (8 pcs)",
      category: "frozendimsum",
      image: "bakpao_telor_asin.jpeg",
      price: 58
    },
    {
      name: "Frozen Bola Ubi Ungu (8 pcs)",
      category: "frozendimsum",
      image: "bola_ubi_ungu.jpg",
      price: 49
    },
    {
      name: "Frozen Char Siew Pao (7 pcs)",
      category: "frozendimsum",
      image: "charsiewpao.jpeg",
      price: 44
    },
    {
      name: "Frozen Lo Mai Kai (6 pcs)",
      category: "frozendimsum",
      image: "lomaikai.jpeg",
      price: 65
    },
    {
      name: "Frozen Kaki Ayam (5 porsi)",
      category: "frozendimsum",
      image: "kaki_ayam.jpeg",
      price: 95
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
