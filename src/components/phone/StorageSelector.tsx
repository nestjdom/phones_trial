import { StorageOption } from '@/types/phone';

interface StorageSelectorProps {
  storageOptions: StorageOption[];
  selectedStorage: StorageOption | null;
  onStorageChange: (storage: StorageOption) => void;
}

export default function StorageSelector({ 
  storageOptions, 
  selectedStorage, 
  onStorageChange 
}: StorageSelectorProps) {
  return (
    <div className="selector">
      <h3 className="selector__label">
        Storage: How much space do you need?
      </h3>
      <div className="selector__options">
        {storageOptions.map((storage, index) => (
          <button
            key={storage.capacity + index}
            onClick={() => onStorageChange(storage)}
            className={`storage-option ${
              selectedStorage?.capacity === storage.capacity
                ? 'storage-option--selected'
                : ''
            }`}
          >
            {storage.capacity}
          </button>
        ))}
      </div>
    </div>
  );
} 