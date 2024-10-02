// src/pages/shop/index.tsx
import { GetStaticProps } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ShopProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-8">Shop Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-lg font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
