import { VFC } from 'react';

interface ProductProps {
  product: any;
}

const Product: VFC<ProductProps> = ({ product }) => {
  return (
    <>
      <div>{product.name} {product.price}</div>
      <div>{product.description}</div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.HOST}/product/${id}`)
  const data = await res.json()

  return { props: { product: data } }
}

export default Product;

