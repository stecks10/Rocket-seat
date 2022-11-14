import { useRouter } from 'next/router';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,80</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          commodi, sint explicabo ducimus magnam dolore, odit ipsa quam et autem
          eum sunt saepe expedita sapiente molestiae similique, nostrum hic
          quos!
        </p>
        <button>Comprar Agora </button>
      </ProductDetails>
    </ProductContainer>
  );
}
