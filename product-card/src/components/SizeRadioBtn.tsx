import { SizeType } from "../types/common.types";

const SizeRadioBtn = ({
  sizes,
  selectedSize,
  handleSizeChange,
}: {
  sizes: SizeType[];
  selectedSize: string;
  handleSizeChange: (size: string) => void;
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold text-slate-700 mb-2">Wrist Size</h3>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <label
            key={size.value}
            className="inline-flex items-center cursor-pointer"
          >
            <input
              type="radio"
              name="size"
              value={size.value}
              checked={selectedSize === size.value}
              onChange={() => handleSizeChange(size.value)}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded border 
            ${
              selectedSize === size.value
                ? "border-indigo-500 text-indigo-500"
                : "border-slate-300 text-slate-400"
            }`}
            >
              {size.label} - ${size.price}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeRadioBtn;
