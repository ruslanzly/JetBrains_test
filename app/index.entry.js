import 'reset-css';
import './exterrnal-libs/layout/index.pcss'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.pcss";

document.addEventListener('DOMContentLoaded', () => {
  let productsLists = Array.from(document.querySelectorAll(".products-wrapper"));

  productsLists.forEach((productsList) => {
    let productsImages = productsList.querySelector(".products-images__list");
    let productsLinks = Array.from(productsList.querySelectorAll(".product__link"));

    productsList.addEventListener("mouseover", handler);

    function handler(e) {
      let target = e.target;

      if (target.classList.contains("product__link")) {
        let productImageClassList = productsImages.querySelector("[data-id=" + target.id + "]").classList;
        let productImagesClassList = productsImages.classList;

        productImagesClassList.add("products-images__list_opacity");

        if (!productImageClassList.contains("products-images__item_nontransparent")) {
          productImageClassList.add("products-images__item_nontransparent");
        }

        target.addEventListener("mouseout", removeClasses);

        function removeClasses(e) {
          productImageClassList.remove("products-images__item_nontransparent");
          productImagesClassList.remove("products-images__list_opacity");
        }

        e.stopPropagation();
      }
    }

    productsLinks.forEach((item)=>{
      item.parentElement.insertBefore(productsImages.querySelector("[data-id=" + item.id + "]").cloneNode(true), item);
    });
  });
});
