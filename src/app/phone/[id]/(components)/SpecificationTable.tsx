import { PhoneDetail } from '@/types/phone';

interface SpecificationTableProps {
  phone: PhoneDetail;
}

interface SpecRowProps {
  label: string;
  value: string;
}

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/4">
        {label}
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">
        {value}
      </td>
    </tr>
  );
}

export default function SpecificationTable({ phone }: SpecificationTableProps) {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">
        Specifications
      </h2>
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody className="divide-y divide-gray-200">
            <SpecRow label="BRAND" value={phone.brand} />
            <SpecRow label="MODEL" value={phone.name} />
            <SpecRow 
              label="DESCRIPTION" 
              value={`${phone.name} - Premium smartphone with advanced features`} 
            />
            <SpecRow label="SCREEN" value={phone.specs.screen} />
            <SpecRow label="RESOLUTION" value={phone.specs.resolution} />
            <SpecRow label="PROCESSOR" value={phone.specs.processor} />
            <SpecRow label="MAIN CAMERA" value={phone.specs.mainCamera} />
            <SpecRow label="SELFIE CAMERA" value={phone.specs.selfieCamera} />
            <SpecRow label="BATTERY" value={phone.specs.battery} />
            <SpecRow label="OS" value={phone.specs.os} />
            <SpecRow label="SCREEN REFRESH RATE" value={phone.specs.screenRefreshRate} />
          </tbody>
        </table>
      </div>
    </div>
  );
} 