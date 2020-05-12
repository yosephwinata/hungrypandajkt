const contact = {
    whatsapp: "0816 485 7070",
    instagram: "hungrypanda.gading",
    email: "marketing.hungrypanda@gmail.com",
    address: "Jl. Boulevard Raya PA19/9, Kelapa Gading, Jakarta Utara",
    addressGoogleMapsSearchTerm: "Hungry Panda Kelapa Gading"
};



























































/**
DO NOT TOUCH ANYTHING BELOW THIS LINE
===============================================================================================
DO NOT TOUCH ANYTHING BELOW THIS LINE
**/

//If index.html then execute welcome-section
const path = window.location.pathname;
const page = path.split("/").pop(); 
if (page === 'index.html' || page === '') {
  document.getElementById("welcome-section-whatsapp").innerHTML = `
    <a href="tel:${contact.whatsapp}">
      <i class="fab fa-whatsapp"> ${contact.whatsapp}</i>
    </a>
  `;

  document.getElementById("welcome-section-instagram").innerHTML = `
    <a href="https://www.instagram.com/${contact.instagram}">
      <i class="fab fa-instagram"> ${contact.instagram}</i>
    </a>
  `;

  document.getElementById("welcome-section-address").innerHTML = `
    <i class="fas fa-map-marker-alt"></i><a href="http://maps.google.com/?q=${contact.addressGoogleMapsSearchTerm}" style=""> ${contact.address}</a>
    <br>
    Free delivery within Kelapa Gading area
  `;
}

//whatsapp
document.getElementById("footer-whatsapp").innerHTML = `
  <i class="fab fa-whatsapp"></i><a href="tel:${contact.whatsapp}"> ${contact.whatsapp}</a>
`;

//instagram
document.getElementById("footer-instagram").innerHTML = `
  <i class="fab fa-instagram"></i><a href="https://www.instagram.com/${contact.instagram}"> ${contact.instagram}</a>
`;

//email
document.getElementById("footer-email").innerHTML = `
  <i class="far fa-envelope"></i><a href="mailto:${contact.email}"> ${contact.email}</a>  
`;

//address
document.getElementById("footer-address").innerHTML = `
  <i class="fas fa-map-marker-alt"></i><a href="http://maps.google.com/?q=${contact.addressGoogleMapsSearchTerm}"> ${contact.address}</a>
`;
