const images = [
  'images/banner1.jpg',
  'images/banner2.jpg',
  'images/banner3.jpg',
  'images/banner4.jpg'
];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById('sliderImage').src = images[index];
}, 3000);