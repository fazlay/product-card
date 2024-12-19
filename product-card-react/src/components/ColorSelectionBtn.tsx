const ColorSelectionBtn = ({
  colors,
  selectedColor,
  handleColorChange,
}: {
  colors: { value: string; className: string }[];
  selectedColor: string;
  handleColorChange: (color: string) => void;
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold text-slate-700 mb-2">Band Color</h3>
      <div className="flex space-x-4">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-6 h-6 rounded-full ${color.className} 
          ${
            selectedColor === color.value
              ? "ring-2 ring-offset-2 ring-indigo-500"
              : ""
          }`}
            onClick={() => handleColorChange(color.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelectionBtn;
