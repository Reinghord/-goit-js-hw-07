import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Refs
const { gallery } = {
  gallery: document.body.querySelector(".gallery"),
};

//Creating Markup
galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  );
});

//Adding Events
gallery.addEventListener("click", () => {
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();

  if (basicLightbox.visible()) {
    document.addEventListener("keydown", () => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});
