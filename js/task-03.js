const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Create images list
const galleryEl = document.querySelector('.gallery')

// Create a list of image properties
for (const img of images) {
  const imageEl = document.createElement('img');
  imageEl.src = img.url;
  imageEl.alt = img.alt;
  imageEl.width = '240'
  imageEl.height = '160'
  galleryEl.append(imageEl);
}

// Output to the console our images list
console.log(galleryEl)