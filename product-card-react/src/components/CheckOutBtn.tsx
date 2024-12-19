import { CartItem } from "../App";

const CheckOutBtn = ({
  cart,
  setIsCartModalOpen,
}: {
  cart: CartItem[];
  setIsCartModalOpen: (value: boolean) => void;
}) => {
  return (
    <div className="mt-4">
      <button
        onClick={() => setIsCartModalOpen(true)}
        className="bg-orange-300 text-black font-bold px-4 py-2 rounded-full flex items-center"
      >
        checkout{" "}
        <span className="bg-white px-2 mx-2 rounded-sm">{cart.length}</span>
      </button>
    </div>
  );
};

export default CheckOutBtn;
