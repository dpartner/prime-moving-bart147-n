export default function handleGallery(
  ev,
  { expGalleryList, expGalleryItem },
  galleryItemCount
) {
  const rightArrow = 'gallery-right-arrow';
  const leftArrow = 'gallery-left-arrow';
  const galleryItemWidth = expGalleryItem.offsetWidth;
  const galleryItemLenght = expGalleryList.children.length;
  let padding;
  console.log(galleryItemCount);

  if (ev.target.classList.contains(rightArrow)) {
    if (galleryItemCount === galleryItemLenght - 1) {
      return galleryItemCount;
    }
    if (galleryItemCount > 2 || galleryItemCount === 2) {
      padding = 30 * galleryItemCount;
      console.log(padding);
    } else {
      padding = 15;
    }
    console.log(padding);
    expGalleryList.style.transform = `translateX(-${
      galleryItemWidth * galleryItemCount + padding
    }px)`;
    galleryItemCount += 1;
    return galleryItemCount;
  }
  if (ev.target.classList.contains(leftArrow)) {
    console.log(galleryItemCount);
    if (galleryItemCount === 0) {
      return (galleryItemCount = 0);
    }
    padding = 30;
    galleryItemCount -= 1;
    expGalleryList.style.transform = `translateX(-${
      galleryItemWidth * galleryItemCount + padding
    }px)`;
    return galleryItemCount;
  }
}
