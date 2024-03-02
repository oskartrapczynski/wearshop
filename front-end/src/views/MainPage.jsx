import { Layout, Hero, Products } from '@components';
import { COVER_PHOTO } from '@assets';

const MainPage = () => {
  const products = [
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 2,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 3,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt 2',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];
  return (
    <Layout>
      <Hero heroImage={COVER_PHOTO} />
      <Products products={products} headerText="Sprawdź nasze bestsellery!" />
    </Layout>
  );
};

export default MainPage;
