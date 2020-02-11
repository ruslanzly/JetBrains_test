import 'reset-css';
import './exterrnal-libs/layout/index.pcss'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.pcss";

document.addEventListener('DOMContentLoaded', () => {
  let productsLists = Array.from(document.querySelectorAll(".products-wrapper"));

  if (productsLists.length) {
    productsLists.forEach((productsList) => {
      const classOpacity = "products-images__list_opacity";
      const classNontransparent = "products-images__item_nontransparent";
      let productsImages = productsList.querySelector(".products-images__list");
      let productsLinks = Array.from(productsList.querySelectorAll(".product__link"));

      if (productsImages === null || !productsLinks.length) {
        return false;
      }

      productsList.addEventListener("mouseover", handler);

      function handler(e) {
        let target = e.target;

        if (target.classList.contains("product__link")) {
          let productImageClassList = productsImages.querySelector("[data-id=" + target.id + "]").classList;
          let productImagesClassList = productsImages.classList;

          productImagesClassList.add(classOpacity);

          if (!productImageClassList.contains(classNontransparent)) {
            productImageClassList.add(classNontransparent);
          }

          target.addEventListener("mouseout", removeClasses);

          function removeClasses(e) {
            productImageClassList.remove(classNontransparent);
            productImagesClassList.remove(classOpacity);
          }

          e.stopPropagation();
        }
      }

      productsLinks.forEach((item)=>{
        item.parentElement.insertBefore(productsImages.querySelector("[data-id=" + item.id + "]").cloneNode(true), item);
      });
    });
  }

});
