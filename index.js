// --- Responsive - Navbar
// icon menu/close onclick
let iconMenu = document.querySelector("header .icon-menu");
let iconClose = document.querySelector("header .nav .icon-close");

let navMenu = document.querySelector(".logo-nav .nav");
let overlay = document.querySelector(".overlay");

iconMenu.onclick = function () {
  navMenu.classList.add("active");
  overlay.classList.add("active");
};

iconClose.onclick = function () {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
};

// Click outside menu to close it
document.body.addEventListener("click", function (e) {
  if (
    (!navMenu.contains(e.target) && !iconMenu.contains(e.target)) ||
    e.target.classList.contains("nav-item-href")
  ) {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// --- Gallery

// Mini Slider 1

let productList = document.querySelector(".product-list");

function removeSelectedClass(element) {
  for (let i = 0; i < element.children.length; i++) {
    element.children[i].classList.remove("selected");
  }
}

for (let i = 0; i < productList.children.length; i++) {
  productList.children[i].onclick = function () {
    removeSelectedClass(productList);
    this.classList.add("selected");
    document.querySelector(".product-view").firstElementChild.src =
      this.firstElementChild.src;
  };
}

// Gallery Carousel Lightbox
let productView = document.querySelector(".product-view");
let lightboxCloseIcon = document.querySelector(".lightbox .icon-close");

productView.addEventListener("click", clickOnProductView);

function clickOnProductView() {
  if (window.innerWidth > 500) {
    let lightbox = document.querySelector(".lightbox");
    if (lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    } else {
      lightbox.classList.add("active");
    }
  }
}

window.onresize = function (e) {
  if (this.innerWidth < 500) {
    let lightbox = document.querySelector(".lightbox");
    if (lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
    productView.removeEventListener("click", clickOnProductView);
    productView.style.cursor = "auto";
  } else {
    productView.addEventListener("click", clickOnProductView);
    productView.style.cursor = "pointer";
  }
};

lightboxCloseIcon.onclick = function () {
  let lightbox = document.querySelector(".lightbox");
  if (lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
  }
};

//Lightbox - NEXT - PREVIOUS buttons
let lightboxNextBtn = document.querySelector(".lightbox .icon-next");
let lightboxPrevBtn = document.querySelector(".lightbox .icon-previous");

lightboxNextBtn.onclick = function () {
  let myProductList = document.querySelector(
    ".lightbox .product-list"
  ).children;
  let selectedIndex = "";
  for (let i = 0; i < myProductList.length; i++) {
    if (myProductList[i].classList.contains("selected")) {
      selectedIndex = i;
    }
  }

  if (selectedIndex == myProductList.length - 1) {
    selectedIndex = -1;
  }
  removeSelectedClass(document.querySelector(".lightbox .product-list"));

  myProductList[selectedIndex + 1].classList.add("selected");

  document.querySelector(".lightbox .product-view").firstElementChild.src =
    myProductList[selectedIndex + 1].firstElementChild.src;
};

lightboxPrevBtn.onclick = function () {
  let myProductList = document.querySelector(
    ".lightbox .product-list"
  ).children;
  let selectedIndex = "";
  for (let i = 0; i < myProductList.length; i++) {
    if (myProductList[i].classList.contains("selected")) {
      selectedIndex = i;
    }
  }

  if (selectedIndex == 0) {
    selectedIndex = myProductList.length;
  }

  removeSelectedClass(document.querySelector(".lightbox .product-list"));

  myProductList[selectedIndex - 1].classList.add("selected");

  document.querySelector(".lightbox .product-view").firstElementChild.src =
    myProductList[selectedIndex - 1].firstElementChild.src;
};

// ------ Mobile - next / prev Gallery
// next btn
let mobileGalleryNextBtn = document.querySelector(
  ".product-view .icon-next.mobile"
);
mobileGalleryNextBtn.onclick = function () {
  let productViewImg = document.querySelector(".product-view img");

  let images = [
    "img/image-product-1.jpg",
    "img/image-product-2.jpg",
    "img/image-product-3.jpg",
    "img/image-product-4.jpg",
  ];

  let selectedIndex = "";

  for (let i = 0; i < images.length; i++) {
    if (productViewImg.src.endsWith(images[i])) {
      selectedIndex = i;
    }
  }

  removeSelectedClass(productList);
  if (selectedIndex !== 3) {
    productViewImg.src = images[selectedIndex + 1];
    productList.children[selectedIndex + 1].classList.add("selected");
  } else {
    productViewImg.src = images[0];
    productList.children[0].classList.add("selected");
  }
};

// prev btn
let mobileGalleryPrevBtn = document.querySelector(
  ".product-view .icon-previous.mobile"
);
mobileGalleryPrevBtn.onclick = function () {
  let productViewImg = document.querySelector(".product-view img");

  let images = [
    "img/image-product-1.jpg",
    "img/image-product-2.jpg",
    "img/image-product-3.jpg",
    "img/image-product-4.jpg",
  ];

  let selectedIndex = "";

  for (let i = 0; i < images.length; i++) {
    if (productViewImg.src.endsWith(images[i])) {
      selectedIndex = i;
    }
  }

  removeSelectedClass(productList);
  if (selectedIndex !== 0) {
    productViewImg.src = images[selectedIndex - 1];
    productList.children[selectedIndex - 1].classList.add("selected");
  } else {
    productViewImg.src = images[images.length - 1];
    productList.children[images.length - 1].classList.add("selected");
  }
};

// --- Counter of product quantity
let quantityBtnIncrement = document.querySelector(".quantity .increment");
let quantityBtnDecrement = document.querySelector(".quantity .decrement");

// decrement
quantityBtnDecrement.onclick = function () {
  let num = document.querySelector(".quantity .quantity-number");
  if (num.textContent > 0) {
    num.textContent--;
  }
};

// increment
quantityBtnIncrement.onclick = function () {
  let num = document.querySelector(".quantity .quantity-number");
  num.textContent++;
};

// ---header - cart
// popup :
let iconCart = document.querySelector(".cart-avatar .icon-cart");
let cartPopup = document.querySelector(".cart .cart-popup");
iconCart.onclick = function () {
  cartPopup.classList.toggle("active");
};
document.querySelector(".cart .icon-quantity-number").onclick = function () {
  cartPopup.classList.toggle("active");
};

// close the cart popup when i click outside the element
document.body.addEventListener("click", function (e) {
  if (
    !iconCart.contains(e.target) &&
    !cartPopup.contains(e.target) &&
    !document.querySelector(".cart .icon-quantity-number").contains(e.target)
  ) {
    cartPopup.classList.remove("active");
  }
});

// cart - products list
let btnCheckoutCart = document.querySelector(".btn-checkout");
let btnAddToCart = document.querySelector(".quantity-btn-cart .btn-cart");
let quantityToAdd = document.querySelector(
  ".quantity-btn-cart .quantity-number"
);
let cartContent = document.querySelector(".cart-popup .content");

function checkIfExists(productName) {
  let exists = false;
  for (let i = 0; i < cartContent.children.length; i++) {
    let elem = cartContent.children[i];
    if (elem.querySelector(".title-1").textContent == productName) {
      exists = true;
      break;
    }
  }
  return exists;
}

btnAddToCart.onclick = function () {
  if (quantityToAdd.textContent > 0) {
    let product_title =
      this.parentElement.parentElement.querySelector(
        ".product-title"
      ).textContent;
    if (checkIfExists(product_title)) {
      for (let i = 0; i < cartContent.children.length; i++) {
        let elem = cartContent.children[i];
        if (elem.querySelector(".title-1").textContent == product_title) {
          let price = elem.querySelector(".price-1").textContent;
          let pastTotalElem = elem.querySelector(".total-1");
          let pastQuantity = elem.querySelector(".quantity-1");
          let newQauntity =
            parseInt(pastQuantity.textContent) +
            parseInt(quantityToAdd.textContent);
          pastQuantity.textContent = newQauntity;
          pastTotalElem.textContent =
            "$" + parseFloat(price.replace("$", "")) * newQauntity;

          document
            .querySelector(".cart .icon-quantity-number")
            .classList.remove("empty");
          document.querySelector(".cart .icon-quantity-number").textContent =
            newQauntity;
        }
      }
    } else {
      let myPrice =
        this.parentElement.parentElement.querySelector(".price").textContent;
      let myQuantity = quantityToAdd.textContent;
      let myImgSrc =
        this.parentElement.parentElement.parentElement.querySelector(
          ".gallery .product-picture"
        ).src;

      let myTitleProduct =
        this.parentElement.parentElement.querySelector(
          ".product-title"
        ).textContent;

      let totalPrice =
        parseFloat(myPrice.replace("$", " ")) * parseInt(myQuantity);

      document.querySelector(".cart .icon-quantity-number").textContent =
        myQuantity;
      document
        .querySelector(".cart .icon-quantity-number")
        .classList.remove("empty");

      let item = `<li class="product-item">
                    <img
                      class="product-img"
                      src="${myImgSrc}"
                      alt="product"
                    />
                    <div class="product-details">
                      
                      <span class="title-1">${myTitleProduct}</span>
                      <div class="prices-1">
                        <span class="price-1">${myPrice}</span>
                        <span> x </span>
                        <span class="quantity-1">${myQuantity}</span>
                        <span class="total-1">$${totalPrice}</span>
                      </div>
                    
                    </div>
                    
                    <img
                      class="icon-delete"
                      src="./img/icon-delete.svg"
                      onclick = "this.parentElement.remove(); document.querySelector('.icon-quantity-number').classList.add('empty');"
                      alt="delete-icon"
                    />
                  </li>`;

      cartContent.innerHTML += item;
    }

    quantityToAdd.textContent = 0;
  }
};


