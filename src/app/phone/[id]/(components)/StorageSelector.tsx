import { StorageOption } from "@/types/phone";

interface StorageSelectorProps {
  storageOptions: StorageOption[];
  selectedStorage: StorageOption | undefined;
  onStorageChange: (storage: StorageOption) => void;
}

export default function StorageSelector({ storageOptions, selectedStorage, onStorageChange }: StorageSelectorProps) {
  const handleRadioChange = (storage: StorageOption) => {
    onStorageChange(storage);
  };

  return (
    <fieldset role="radiogroup" className='selector'>
      <legend className='selector__label'>Storage: How much space do you need?</legend>
      <div className='selector__options'>
        {storageOptions.map((storage, index) => (
          <label
            key={storage.capacity + index}
            className={`storage-option ${
              selectedStorage?.capacity === storage.capacity ? "storage-option--selected" : ""
            }`}
          >
            <input
              type='radio'
              name='storage'
              value={storage.capacity}
              checked={selectedStorage?.capacity === storage.capacity}
              onChange={() => handleRadioChange(storage)}
            />
            {storage.capacity}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
