// app/page.tsx
import { Product } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRecycle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default async function Page({ searchParams }: { searchParams?: { slug: string } }) {
  const products: Product[] = [
    {
      id: '1',
      name: 'Organic Cotton T-Shirt',
      description:
        'Comfortable and eco-friendly clothing made from sustainable materials. Soft, breathable, and durable for everyday wear.',
      price: 29.99,
      imageUrl: '/organic-cotton-tshirt.jpg',
      features: [
        'Made with 100% organic cotton',
        'Produced in a fair-trade certified factory',
        'Biodegradable packaging',
      ],
    },
    {
      id: '2',
      name: 'Bamboo Toothbrush',
      description:
        'Biodegradable and renewable toothbrush that\'s better for the environment. Gentle on your teeth and gums.',
      price: 5.99,
      imageUrl: '/bamboo-toothbrush.jpg',
      features: [
        'Sustainably harvested bamboo handle',
        'BPA-free and recyclable nylon bristles',
        'Compostable packaging',
      ],
    },
    {
      id: '3',
      name: 'Reusable Water Bottle',
      description:
        'Durable and recyclable water bottle to reduce plastic waste. Keep your drinks cold or hot for hours.',
      price: 14.99,
      imageUrl: '/reusable-water-bottle.jpg',
      features: [
        'Made from high-quality stainless steel',
        'Double-wall insulation',
        'Leak-proof and BPA-free',
      ],
    },
    {
      id: '4',
      name: 'Organic Bamboo Socks',
      description:
        'Soft and breathable socks made from sustainable bamboo fiber. Comfortable for all-day wear.',
      price: 9.99,
      imageUrl: '/organic-bamboo-socks.jpg',
      features: [
        'Moisture-wicking and temperature-regulating',
        'Reinforced heel and toe for durability',
        'OEKO-TEX certified for safety',
      ],
    },
  ];

  const selectedProduct = searchParams?.slug
    ? products.find((product) => product.id === searchParams.slug)
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedProduct ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-4xl font-bold text-green-800 mb-4">{selectedProduct.name}</h1>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-green-700 mb-4">{selectedProduct.description}</p>
              <ul className="text-green-700 mb-6 list-disc pl-6">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-green-800 font-bold text-2xl">${selectedProduct.price}</span>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-green-800 mb-8">Welcome to ecoPrice</h1>
              <p className="text-lg text-green-700 mb-12">
                Discover the most eco-friendly and sustainable products for your everyday needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-green-800 mb-2">{product.name}</h2>
                      <p className="text-green-700 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-bold">${product.price}</span>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Why Choose ecoPrice?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLeaf} className="text-green-600 mr-4" size="2x" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Eco-Friendly</h3>
                  <p className="text-green-700">
                    Our products are made with sustainable and environmentally-friendly materials.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faRecycle} className="text-green-600 mr-4" size="2x" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Recyclable</h3>
                  <p className="text-green-700">
                    Many of our products are designed to be recycled or repurposed.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 mr-4" size="2x" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Ethical</h3>
                  <p className="text-green-700">
                    We source our products from ethical and fair-trade certified suppliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
