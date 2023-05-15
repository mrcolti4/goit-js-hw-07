import { galleryItems } from "./gallery-items.js";
import { addImagesOnGallery, preventDefaultImageLinks } from "./common.js";

// Change code below this line
// Functions definition
const refs = {
  gallery: document.querySelector(".gallery"),
};
addImagesOnGallery(refs.gallery, galleryItems);
preventDefaultImageLinks(refs);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
