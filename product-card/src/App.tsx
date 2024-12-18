import { Star } from "lucide-react";
import React, { useState, useCallback } from "react";

import AddToCartBtn from "./components/AddtoCartBtn";
import CartModal from "./components/CartModal";
import CheckOutBtn from "./components/CheckOutBtn";
import ColorSelectionBtn from "./components/ColorSelectionBtn";
import SizeRadioBtn from "./components/SizeRadioBtn";
import { colors, sizes } from "./constants/constants";

export interface CartItem {
  color: string;
  quantity: number;
  size?: string;
  price: number;
}

const SmartWatchProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    if (selectedColor && quantity > 0) {
      const selectedSizeObj =
        sizes.find((s) => s.value === selectedSize) || sizes[3];
      const newCartItem: CartItem = {
        color: selectedColor,
        quantity,
        size: selectedSize,
        price: selectedSizeObj.price,
      };
      setCart((prevCart) => [...prevCart, newCartItem]);

      setSelectedColor("");
      setSelectedSize("");
      setQuantity(0);
    } else {
      alert("Please select a color and quantity greater than 0.");
    }
  };

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handleCheckout = () => {
    setIsCartModalOpen(false);
  };

  const closeModals = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 relative">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg shadow-lg p-8 max-w-6xl">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-orange-400 rounded">
          <img
            src={`/assets/${selectedColor || "violate"}.png`}
            alt="Smart Watch"
            className="w-full aspect-[0.87] object-contain"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-slate-700 mb-4">
            Classy Modern Smart watch
          </h1>

          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-500 w-5 h-5 fill-current"
                />
              ))}
            </div>
            <span className="text-slate-400">(2 Reviews)</span>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xl text-slate-400 line-through">$99.00</span>
            <span className="text-2xl font-bold text-indigo-500">$79.00</span>
          </div>

          <p className="text-lg text-slate-400 mb-4">
            I must explain to you how all this mistaken idea of denouncing ple
            praising pain was born and I will give you a complete account of the
            system.
          </p>

          <div className="flex space-x-8 mb-4">
            <div>
              <div className="text-sm text-slate-400">Type</div>
              <div className="font-bold text-slate-700">Watch</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Model Number</div>
              <div className="font-bold text-slate-700">Forerunner 290XT</div>
            </div>
          </div>

          <ColorSelectionBtn
            colors={colors}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />

          <SizeRadioBtn
            sizes={sizes}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
          />

          <AddToCartBtn
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            addToCart={addToCart}
          />

          {cart.length > 0 && (
            <CheckOutBtn cart={cart} setIsCartModalOpen={setIsCartModalOpen} />
          )}
        </div>
      </div>

      {isCartModalOpen && (
        <CartModal
          cart={cart}
          closeModals={closeModals}
          calculateTotal={calculateTotal}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default SmartWatchProductPage;
