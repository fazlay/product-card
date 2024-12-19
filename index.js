const radioColorButtons = document.querySelectorAll(
  'input[name="brand_color"]'
);
const radioSizeButtons = document.querySelectorAll('input[name="size"]');
const productImage = document.querySelector('img[id="product_image"]');
let selectedSize = "";
const cart = [];
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const quantityInput = document.getElementById("quantityInput");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartCountElement = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
function initializePage() {
  console.log("Page loaded");
}
document.addEventListener("DOMContentLoaded", initializePage);

function checkColorInput() {
  radioColorButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      const selectedColor = event.target.value;

      productImage.src = `/assets/${selectedColor}.png`;
      console.log(selectedColor);
    });
  });
}
checkColorInput();
function checkSizeInput() {
  radioSizeButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      selectedSize = event.target.value;
      console.log(selectedSize);
    });
  });
}
checkSizeInput();

decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10) || 0;
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10) || 0;
  quantityInput.value = currentValue + 1;
});

const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedColor = Array.from(radioColorButtons).find(
    (radio) => radio.checked
  )?.value;
  const quantity = parseInt(quantityInput.value, 10) || 0;

  if (selectedColor && quantity > 0) {
    const cartItem = { color: selectedColor, quantity: quantity };
    cart.push(cartItem);

    cartCountElement.textContent = cart.length;
    if (cart.length > 0) {
      checkoutBtn.classList.remove("hidden");
    }

    quantityInput.value = 0;
    radioColorButtons.forEach((radio) => (radio.checked = false));
  } else {
    alert("Please select a color and quantity greater than 0.");
  }
});

function checkoutModal() {
  checkoutBtn.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
    addCartElements(cart);
  });
}

checkoutModal();

function addCartElements(cart) {
  const cartList = document.getElementById("cartItem");
  // cartList.innerHTML = ""; // Clear the cart list
  cart.forEach((item, index) => {
    const listItem = `  <li class="flex flex-wrap items-center w-full max-md:max-w-full">
              <div
                class="flex grow gap-2 justify-center items-center self-stretch my-auto min-w-[240px] w-[266px]"
              >
                <img
                  loading="lazy"
                  src="/assets/${item.color}.png"
                  alt="Black Smart Watch"
                  class="object-contain shrink-0 self-stretch my-auto w-9 rounded aspect-square"
                />
                <div class="flex-1 shrink self-stretch my-auto basis-0">
                  Classy Modern Smart watch
                </div>
              </div>
              <div class="grow my-auto text-center w-[50px]">${
                item.color || "black"
              }</div>
              <div class="grow my-auto text-center w-[57px]">${
                item.size || "XL"
              }</div>
              <div class="grow my-auto text-center w-[47px]">${
                item.quantity
              }</div>
              <div class="grow my-auto text-right w-[79px]">$99.00</div>
            </li>`;
    cartList.innerHTML += listItem;
  });
}
