import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">سلة التسوق فارغة</h2>
        <p className="text-gray-600 mb-8">لم تقومي بإضافة أي منتجات بعد</p>
        <Link
          to="/products"
          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
        >
          تسوقي الآن
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">سلة التسوق</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedColor}`} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">اللون: {item.selectedColor}</p>
                    <p className="text-lg font-bold text-pink-600 mb-4">{item.price} DH</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-semibold text-gray-800 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">ملخص الطلب</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">المجموع الفرعي:</span>
                <span className="font-semibold">{getTotalPrice()} DH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الشحن:</span>
                <span className="font-semibold text-green-600">مجاني</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الضريبة (15%):</span>
                <span className="font-semibold">{Math.round(getTotalPrice() * 0.15)} DH</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg">
                <span className="font-bold text-gray-800">المجموع الكلي:</span>
                <span className="font-bold text-pink-600">
                  {Math.round(getTotalPrice() * 1.15)} DH
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-center block"
            >
              متابعة للدفع
            </Link>

            <Link
              to="/products"
              className="w-full border-2 border-pink-300 text-pink-600 py-3 px-4 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 text-center block mt-3"
            >
              متابعة التسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;