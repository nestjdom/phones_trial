import { Phone } from "@/types/phone";
import PhoneCard from "../../(components)/PhoneCard";

interface SimilarItemsProps {
  similarProducts: Phone[];
}

export default function SimilarItems({ similarProducts }: SimilarItemsProps) {
  return (
    <section className='similar-items'>
      <h2 className='similar-items__title'>Similar Items</h2>
      <ul className='similar-items__list'>
        {similarProducts.map(product => (
          <li key={product.id} className='similar-items__item'>
            <PhoneCard phone={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}