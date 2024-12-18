const radioColorButtons = document.querySelectorAll(
  'input[name="brand_color"]'
);
const radioSizeButtons = document.querySelectorAll('input[name="size"]');
const productImage = document.querySelector('img[id="product_image"]'); // Select the image
let selectedSize = "";
const cart = [];
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const quantityInput = document.getElementById("quantityInput");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartCountElement = document.getElementById("cartCount"); // Select the cart count element
const cartModal = document.getElementById("cartModal");
function initializePage() {
  console.log("Page loaded");
}
document.addEventListener("DOMContentLoaded", initializePage);
//check the radio button input
function checkColorInput() {
  radioColorButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      const selectedColor = event.target.value;
      // Update the image source based on the selected color
      productImage.src = `/assets/${selectedColor}.png`; // Assuming the image filenames match the values
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
// Counter Functions
decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10) || 0; // Ensure it's a number
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10) || 0; // Ensure it's a number
  quantityInput.value = currentValue + 1;
});

// add to CART
const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedColor = Array.from(radioColorButtons).find(
    (radio) => radio.checked
  )?.value; // Get selected color
  const quantity = parseInt(quantityInput.value, 10) || 0; // Get quantity

  if (selectedColor && quantity > 0) {
    // Check if color is selected and quantity is greater than 0
    const cartItem = { color: selectedColor, quantity: quantity }; // Create cart item object
    cart.push(cartItem); // Add item to cart
    // Update the cart count display
    cartCountElement.textContent = cart.length;
    if (cart.length > 0) {
      checkoutBtn.classList.remove("hidden"); // Show the button
    }
    // Reset quantity input and color selection
    quantityInput.value = 0; // Reset quantity
    radioColorButtons.forEach((radio) => (radio.checked = false)); // Reset color selection
  } else {
    alert("Please select a color and quantity greater than 0."); // Error message
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

//make an array with all the products
