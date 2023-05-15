import { galleryItems } from "./gallery-items.js";
import { addImagesOnGallery, preventDefaultImageLinks } from "./common.js";
// Change code below this line
// Functions definition

const onClickEsc = () => {
  refs.intance.close();
  window.removeEventListener("keydown", handleKeyboardClickInModal);
};

const handleKeyboardClickInModal = (e) => {
  if (e.code !== "Escape") {
    return;
  }
  onClickEsc();
};

const handleImageClick = (e) => {
  const target = e.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  const intance = basicLightbox.create(`
        <img src="${target.src}">
    `);
  refs.intance = intance;
  intance.show();
  window.addEventListener("keydown", handleKeyboardClickInModal);
};
// !=========================================================
// Function definition end here

const refs = {
  gallery: document.querySelector(".gallery"),
};

addImagesOnGallery(refs.gallery, galleryItems);
// Після створення розмітки картинок, треба додати
// всі посилання на них у refs і прибрати їх дію за замовченням
preventDefaultImageLinks(refs);

refs.gallery.addEventListener("click", handleImageClick);
