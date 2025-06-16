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
    <div>
      <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
        Storage: How much space do you need?
      </h3>
      <div className="flex gap-3">
        {storageOptions.map((storage) => (
          <button
            key={storage.capacity}
            onClick={() => onStorageChange(storage)}
            className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${
              selectedStorage?.capacity === storage.capacity
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {storage.capacity}
          </button>
        ))}
      </div>
    </div>
  );
} 