import { PhoneColor } from '@/types/phone';

interface ColorSelectorProps {
  colorOptions: PhoneColor[];
  selectedColor: PhoneColor | null;
  onColorChange: (color: PhoneColor) => void;
}

export default function ColorSelector({ 
  colorOptions, 
  selectedColor, 
  onColorChange 
}: ColorSelectorProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
        Colour: Pick your favourite
      </h3>
      <div className="flex gap-3">
        {colorOptions.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color)}
            className={`w-8 h-8 rounded-full border-2 transition-transform ${
              selectedColor?.name === color.name
                ? 'border-blue-500 scale-110'
                : 'border-gray-300 hover:scale-105'
            }`}
            style={{ backgroundColor: color.hexCode }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
} 