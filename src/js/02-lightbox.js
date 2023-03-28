import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const MyGallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const imageItem = document.createElement("li");
  MyGallery.append(imageItem);

  imageItem.insertAdjacentHTML(
    "afterend",
    `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`
  );
});
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});
