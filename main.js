var gallery = document.querySelector('main');
var imageUrls = [
  'https://memegenerator.net/img/instances/57278746/surprise-mothafucka.jpg',
  'https://i.kym-cdn.com/entries/icons/mobile/000/006/026/NOTSUREIF.jpg',
  'https://i.redd.it/eo8qyzz3r7b71.jpg',
  'https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1',
  'https://dailystatuss.com/wp-content/uploads/2021/12/258849201_1236634806812086_4098625503924410121_n-1.jpg',
  'https://i.kym-cdn.com/entries/icons/mobile/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg'
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
