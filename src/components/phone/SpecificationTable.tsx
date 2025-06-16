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
      <td className="table__cell table__cell--label">
        {label}
      </td>
      <td className="table__cell table__cell--value">
        {value}
      </td>
    </tr>
  );
}

export default function SpecificationTable({ phone }: SpecificationTableProps) {
  return (
    <div className="specification-table">
      <h2 className="table-container__title">
        Specifications
      </h2>
      <div className="table-container__wrapper">
        <table className="table">
          <tbody className="table__body">
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