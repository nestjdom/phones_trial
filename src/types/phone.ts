export interface PhoneBase {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
}

export interface Phone extends PhoneBase {
  imageUrl: string;
}

export interface PhoneDetail extends PhoneBase {
  specs: PhoneSpecs;
  colorOptions: PhoneColor[];
  storageOptions: StorageOption[];
  similarProducts: Phone[];
}

export interface PhoneSpecs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface PhoneImages {
  default: string;
  [colorName: string]: string;
}

export interface PhoneColor {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface StorageOption {
  capacity: string;
  price: number;
}

export interface CartItem {
  phone: PhoneDetail;
  selectedColor: PhoneColor;
  selectedStorage: StorageOption;
  quantity: number;
}

export interface SearchResponse {
  phones: PhoneDetail[];
  total: number;
} 