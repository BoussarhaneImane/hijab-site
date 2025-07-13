import  { useState } from 'react';
import { ShoppingCart, Heart, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Import images
import abaya2 from '../assets/abaya2.jpg';
import abaya4 from '../assets/abaya4.jpg';
import abaya5 from '../assets/abaya5.jpg';
import abaya6 from '../assets/abaya6.jpg';
import abaya7 from '../assets/abaya7.jpg';
import abaya8 from '../assets/abaya8.jpg';

const ProductsPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: 'عباية كلاسيكية سوداء',
      price: 450,
      originalPrice: 599,
      image: abaya4,
      colors: ['أسود', 'كحلي', 'بني'],
      category: 'عبايات',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'حجاب حريري ناعم',
      price: 120,
      originalPrice: 180,
      image: abaya5,
      colors: ['وردي', 'أزرق', 'أخضر', 'بيج'],
      category: 'حجاب',
      rating: 4.9,
      isNew: false
    },
    {
      id: 3,
      name: 'عباية مطرزة فاخرة',
      price: 680,
      originalPrice: 850,
      image: abaya6,
      colors: ['أسود', 'كحلي'],
      category: 'عبايات',
      rating: 4.7,
      isNew: true
    },
    {
      id: 4,
      name: 'حجاب قطني مريح',
      price: 95,
      originalPrice: 140,
      image: abaya7,
      colors: ['أبيض', 'بيج', 'رمادي'],
      category: 'حجاب',
      rating: 4.6,
      isNew: false
    },
    {
      id: 5,
      name: 'عباية يومية عملية',
      price: 320,
      originalPrice: 420,
      image: abaya8,
      colors: ['أسود', 'بني', 'رمادي'],
      category: 'عبايات',
      rating: 4.5,
      isNew: false
    },
    {
      id: 6,
      name: 'حجاب شيفون أنيق',
      price: 160,
      originalPrice: 220,
      image: abaya2,
      colors: ['وردي', 'أرجواني', 'ذهبي'],
      category: 'حجاب',
      rating: 4.8,
      isNew: true
    }
  ];

  const categories = ['الكل', 'عبايات', 'حجاب'];
  
  const allColors = [...new Set(products.flatMap(product => product.colors))];

  const [selectedProductColors, setSelectedProductColors] = useState<{[key: number]: string}>({});

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'الكل' || product.category === selectedCategory;
    const colorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
    return categoryMatch && colorMatch;
  });

  const handleAddToCart = (product: any) => {
    const color = selectedProductColors[product.id] || product.colors[0];
    addToCart(product, color);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">متجر المنتجات</h1>
        <p className="text-lg text-gray-600">اكتشفي مجموعتنا الكاملة من العبايات والحجاب</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className="text-pink-600" />
              <h3 className="text-lg font-semibold text-gray-800">تصفية المنتجات</h3>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">الفئات</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-pink-100 text-pink-700 border border-pink-300'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">الألوان</h4>
              <div className="space-y-2">
                {allColors.map(color => (
                  <label key={color} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedColors([...selectedColors, color]);
                        } else {
                          setSelectedColors(selectedColors.filter(c => c !== color));
                        }
                      }}
                      className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                    />
                    <span className="text-gray-600">{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-600">
              عرض {filteredProducts.length} من {products.length} منتج
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 right-3 bg-pink-600 text-white px-2 py-1 rounded-full text-xs">
                      جديد
                    </span>
                  )}
                  <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
                    <Heart size={16} className="text-gray-600 hover:text-pink-600" />
                  </button>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-pink-600">{product.price} DH</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice} DH</span>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">اللون:</p>
                    <div className="flex gap-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedProductColors({
                            ...selectedProductColors,
                            [product.id]: color
                          })}
                          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                            (selectedProductColors[product.id] || product.colors[0]) === color
                              ? 'bg-pink-100 border-pink-300 text-pink-700'
                              : 'border-gray-300 text-gray-600 hover:border-pink-300'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    أضف للسلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;