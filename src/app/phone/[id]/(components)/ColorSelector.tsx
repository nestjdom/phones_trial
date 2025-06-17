import { PhoneColor } from "@/types/phone";

interface ColorSelectorProps {
  colorOptions: PhoneColor[];
  selectedColor: PhoneColor | null;
  onColorChange: (color: PhoneColor) => void;
}

export default function ColorSelector({ colorOptions, selectedColor, onColorChange }: ColorSelectorProps) {
  return (
    <fieldset role='radiogroup' className='selector'>
      <legend className='selector__label'>Color: Pick your favourite</legend>
      <div className='selector__options'>
        {colorOptions.map(color => (
          <label
            key={color.name}
            className={`color-option ${selectedColor?.name === color.name ? "color-option--selected" : ""}`}
            style={{ backgroundColor: color.hexCode }}
            title={color.name}
          >
            <input
              type='radio'
              name='phone-color'
              value={color.name}
              checked={selectedColor?.name === color.name}
              onChange={() => onColorChange(color)}
              className='color-option__input'
            />
            <span className='sr-only'>{color.name}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
