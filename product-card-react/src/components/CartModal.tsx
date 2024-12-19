const CartModal = ({
  cart,
  closeModals,
  calculateTotal,
  handleCheckout,
}: any) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={closeModals}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left">Item</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: any, index: number) => (
              <tr key={index} className="border-b">
                <td className="flex items-center space-x-4">
                  <img
                    src={`/assets/${item.color}.png`}
                    alt="Smart Watch"
                    className="w-12 h-12 object-contain"
                  />
                  <span>Classy Modern Smart Watch</span>
                </td>
                <td className="text-center">{item.color}</td>
                <td className="text-center">
                  {item.size?.toUpperCase() || "XL"}
                </td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-right">${item.price * item.quantity}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
          <div className="space-x-4">
            <button
              onClick={closeModals}
              className="border border-slate-300 px-4 py-2 rounded"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleCheckout}
              className="bg-indigo-500 text-white px-4 py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// #endregion

export default CartModal;
