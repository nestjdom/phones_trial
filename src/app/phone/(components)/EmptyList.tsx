export const texts = {
  noResults: "No se encontraron teléfonos que coincidan con tu búsqueda",
  noPhones: "No hay teléfonos disponibles"
};

interface Props {
  hasSearched: boolean;
}
export default function EmptyList({ hasSearched }: Props) {
  return (
    <div className='empty-state'>
      <div className='empty-state__description'>{hasSearched ? texts.noResults : texts.noPhones}</div>
    </div>
  );
}
