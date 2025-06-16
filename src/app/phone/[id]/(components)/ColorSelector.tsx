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
    <div className="selector">
      <h3 className="selector__label">
        Colour: Pick your favourite
      </h3>
      <div className="selector__options">
        {colorOptions.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color)}
            className={`color-option ${
              selectedColor?.name === color.name
                ? 'color-option--selected'
                : ''
            }`}
            style={{ backgroundColor: color.hexCode }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
} 