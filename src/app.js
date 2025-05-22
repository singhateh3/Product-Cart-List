const desserts = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
// Global Variables
const containerEl = document.querySelector(".container");
// Render desserts function
function renderdesserts() {
  let foodUi = "";
  desserts
    .map((dessert) => {
      foodUi += `
      <div class="card sm:w-1/3 flex flex-col justify-center items-center sm:mx-4 md:mx-0">
      <picture
              class="image-container hover:border-amber-900 hover:border-4 rounded-2xl"
            >
            <source media="(min-width: 768px) and (max-width: 1023px)" srcset="${
              dessert.image.tablet
            }" />
            <source media="(min-width:1024px)" srcset="${
              dessert.image.desktop
            }" />
              <img
                src="${dessert.image.mobile}"
                alt="${dessert.category}"
                class="sm:w-72 rounded-2xl w-full"
              />
            </picture>
            <div class="-mt-5">
              <button
                class="addButton flex justify-between border-2 rounded-full py-2 px-4 gap-2 bg-white hover:bg-amber-900 hover:text-white hover:border-none"
              >
                <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                Add to cart
              </button>

            </div>
            <div class="details my-5 flex flex-col text-start items-start  sm:block sm:w-72 w-full">
              <div class="font-bold text-gray-400">${dessert.category}</div>
              <div class="font-bold name">${dessert.name}</div>
              <div class="text-orange-700 font-bold ">$<span class="price">${dessert.price.toFixed(
                2
              )}</span>
                </div>
            </div>
            </div> `;
    })
    .join("");
  containerEl.innerHTML = foodUi;
}

renderdesserts();

const addButtonEl = document.querySelectorAll(".addButton");
// added itmes in the cart
const cart = [];
const additionalInfo = document.querySelector(".additional-info");
addButtonEl.forEach((button) => {
  let quantity = 0;
  const itemsContainer = document.querySelector(".items-container");
  const card = button.closest(".card");
  const name = card.querySelector(".name").textContent;
  let priceStr = card.querySelector(".price").textContent;
  let price = Number(priceStr);
  // console.log(`Add ${name} to cart`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(additionalInfo);
    additionalInfo.classList.remove("hidden");
    if (name) {
      quantity = 1;

      renderQuantityControls();
    }
  });

  function renderQuantityControls() {
    // when hover show quantity control else show default
    button.innerHTML = `
    <div class="relative group">
    <!-- default -->
    <div class="normal-view group-hover:hidden flex items-center justify-center gap-2">
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
      <span>Add to cart</span>
    </div>

    <!-- Controls -->
    <div class="controls-view hidden group-hover:flex items-center gap-6 ">
      <img src="./assets/images/icon-decrement-quantity.svg" alt="decrement" class="cursor-pointer decrement p-2 border rounded-full w-6 h-6 hover:bg-amber-50 hover:fill-amber-900" />
      <span class="quantity text-white font-bold">${quantity}</span>
      <img src="./assets/images/icon-increment-quantity.svg" alt="increment" class="cursor-pointer increment p-2 border rounded-full w-6 h-6 hover:text-white" />
    </div>
  </div>
      `;

    const incrementBtn = button.querySelector(".increment");
    const decrementBtn = button.querySelector(".decrement");
    const quantityBtn = button.querySelector(".quantity");

    const existingItems = cart.find((item) => item.name === name);
    // const result = quantity * price;
    if (!existingItems) {
      const dessertItem = desserts.find((dessert) => dessert.name === name);
      if (dessertItem) {
        cart.push({
          name,
          quantity,
          price,
          image: dessertItem.image.thumbnail,
        });
      }
    }
    updateItemsContainer();
    incrementBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      quantity++;
      console.log(quantity);
      quantityBtn.innerHTML = `${quantity}`;

      const item = cart.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
      updateItemsContainer();
    });

    decrementBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Prevent parent click or from being reset immediately

      const item = cart.find((item) => item.name === name);

      if (quantity > 1) {
        quantity--;
        console.log(quantity);
        quantityBtn.textContent = quantity;
        // check if item is in the cart and update the quantity
        if (item) {
          item.quantity = quantity;
        }
        updateItemsContainer();
      } else {
        quantity = 0;
        if (item) {
          item.quantity = quantity;
        }
        button.innerHTML = `<img src="./assets/images/icon-add-to-cart.svg" alt="" />
                Add to cart`;
      }
      updateItemsContainer();
    });
    // update the items container to show the items or desserts added to cart
    function updateItemsContainer() {
      let total = 0;
      itemsContainer.innerHTML = "";
      // items count
      const countItems = document.querySelector(".item-count");
      // accumulator
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      countItems.textContent = totalItems;
      // render cart items
      cart.forEach((item) => {
        const allTotal = item.quantity * item.price;
        total += allTotal;
        const div = document.createElement("div");
        div.className = "border-t-2 border-gray-300 my-2 py-2";

        // Add the name, quantity, price and calculated price to the ui
        div.innerHTML = `
        
        <div class="font-bold">${item.name}</div>
        <div class="flex justify-between">
        <div class="text-gray-400"><span class="font-bold text-amber-700">${
          item.quantity
        }x  &nbsp &nbsp</span><span class="text-sm text-gray-400">@</span> $${item.price.toFixed(
          2
        )} &nbsp $${allTotal.toFixed(2)} </div>
        <div class="remove-icon cursor-pointer"><img src="./assets/images/icon-remove-item.svg" alt="remove icon" class="border w-6 rounded-full p-1 "/></div>
        </div>
        `;

        itemsContainer.appendChild(div);
      });

      // delete from cart using x icon
      const removeIcon = document.querySelectorAll(".remove-icon");
      // console.log("remove Icon", removeIcon);
      removeIcon.forEach((icon) => {
        icon.addEventListener("click", function (index) {
          // console.log("Its clicking");
          cart.splice(index, 1);
          updateItemsContainer();
          button.innerHTML = `<img src="./assets/images/icon-add-to-cart.svg" alt="" />
                Add to cart`;
        });
      });

      // Calculate all total
      const allTotalDiv = document.createElement("div");
      allTotalDiv.className =
        "mt-4 pt-2 border-t-2 border-gray-300 text-right font-bold text-lg text-black flex justify-between";
      allTotalDiv.innerHTML = `<span  class="text-black text-md font-normal">Order Total</span> <span>$${total.toFixed(
        2
      )}</span>`;
      itemsContainer.appendChild(allTotalDiv);

      // start new order
      const startNewOrderBtn = document.querySelector(".start-new-order");
      // console.log(startNewOrderBtn);
      startNewOrderBtn.addEventListener("click", function (e) {
        e.preventDefault();
        cart.length = 0;
        itemsContainer.innerHTML = `<img src="./assets/images/illustration-empty-cart.svg" alt="empty-cart" class="w-36">
          <p>Your added items will appear here</p>`;
        confirmOrder.classList.add("hidden");
        stagnant.classList.add("hidden");
        // reset count items

        additionalInfo.classList.add("hidden");
        // reset quantity in add button

        button.innerHTML = `
        <div class="relative group">
        <!-- default View -->
        <div class="normal-view  flex items-center justify-center gap-2">
          <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
          <span>Add to cart</span>
        </div>
      `;
      });
    }
  }
});

// confirm order
const confirmOrder = document.querySelector(".finish-order");
const stagnant = document.querySelector(".stagnant-bg");
const confirmOrderBtn = document.querySelector(".confirm-order");
const orderedItems = document.querySelector(".ordered-items");
const bodyEl = document.querySelector("body");

confirmOrderBtn.addEventListener("click", function (e) {
  e.preventDefault();

  confirmOrder.classList.remove("hidden");
  stagnant.classList.remove("hidden");
  bodyEl.classList.add("overflow-hidden");
  orderedItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    if (item.quantity === 0) {
      alert("Quantity is Empty");
      confirmOrder.classList.add("hidden");
      stagnant.classList.add("hidden");
      return;
    } else {
      const allTotal = item.quantity * item.price;
      total += allTotal;
      const div = document.createElement("div");
      div.className =
        "border-t-2 border-gray-300 my-2 py-2 flex justify-between gap-2";

      // Add the name, quantity, image thumbnail price and calculated price to the ui
      div.innerHTML = `
    <div class="flex gap-2">
    <img
      src="${item.image}"
      alt="${item.category}"
      class="w-16"
    />
    <div class="">
    <div class="font-bold">${item.name}</div>
     <div class="text-amber-900 font-bold">
    ${
      item.quantity
    }x <span class="text-sm text-gray-400">@</span><span class="text-gray-400 font-normal"> $${item.price.toFixed(
        2
      )} </span>
    </div>
    </div>
    </div>
    <div class="text-gray-400">$${allTotal.toFixed(2)}</div>
    `;
      orderedItems.appendChild(div);
    }
  });

  // Show all total
  const confirmedTotal = document.createElement("div");
  confirmedTotal.className =
    "mt-4 pt-2 border-t-2 border-gray-300 text-right font-bold text-lg text-black flex justify-between";
  confirmedTotal.innerHTML = `<span  class="text-black text-md font-normal">Order Total</span> <span>$${total.toFixed(
    2
  )}</span>`;
  orderedItems.appendChild(confirmedTotal);
});
