import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

const AddToCartBtn = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
}: {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  addToCart: () => void;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border rounded">
        <button onClick={decreaseQuantity} className="px-3 py-2">
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-16 text-center"
        />
        <button onClick={increaseQuantity} className="px-3 py-2">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button
        onClick={addToCart}
        className="bg-indigo-500 text-white px-6 py-2 rounded flex items-center"
      >
        <ShoppingCart className="mr-2 w-5 h-5" />
        Add to Cart
      </button>
      <button className="text-indigo-500">
        <Heart className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AddToCartBtn;
