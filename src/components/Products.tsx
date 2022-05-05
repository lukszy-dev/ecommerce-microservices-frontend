import { VFC } from 'react';
import Thumbnail from './Thumbnail';

interface ProductsProps {
  data: any;
}

const Products: VFC<ProductsProps> = ({ data }) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
      {data.map((product) => (
        <Thumbnail product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
