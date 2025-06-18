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
        {label.toUpperCase()}
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
            <SpecRow label="Brand" value={phone.brand} />
            <SpecRow label="Name" value={phone.name} />
            <SpecRow 
              label="Description" 
              value={`${phone.name} - Premium smartphone with advanced features`} 
            />
            <SpecRow label="Screen" value={phone.specs.screen} />
            <SpecRow label="Resolution" value={phone.specs.resolution} />
            <SpecRow label="Processor" value={phone.specs.processor} />
            <SpecRow label="Main Camera" value={phone.specs.mainCamera} />
            <SpecRow label="Selfie Camera" value={phone.specs.selfieCamera} />
            <SpecRow label="Battery" value={phone.specs.battery} />
            <SpecRow label="OS" value={phone.specs.os} />
            <SpecRow label="Screen Refresh Rate" value={phone.specs.screenRefreshRate} />
          </tbody>
        </table>
      </div>
    </div>
  );
} 