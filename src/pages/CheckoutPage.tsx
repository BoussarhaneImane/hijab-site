import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Phone, User, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card',
    deliveryMethod: 'standard'
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'الاسم الأول مطلوب';
    if (!formData.lastName.trim()) newErrors.lastName = 'اسم العائلة مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';
    if (!formData.city.trim()) newErrors.city = 'المدينة مطلوبة';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'الرمز البريدي مطلوب';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate order processing
      setTimeout(() => {
        clearCart();
        alert('تم تأكيد طلبك بنجاح! سيتم التواصل معك قريباً');
        navigate('/');
      }, 1000);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">لا توجد منتجات في السلة</h2>
        <p className="text-gray-600">يرجى إضافة منتجات قبل المتابعة للدفع</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">إتمام الطلب</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Form Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-pink-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">المعلومات الشخصية</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                  placeholder="أدخل الاسم الأول"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                  placeholder="أدخل اسم العائلة"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                  placeholder="05xxxxxxxx"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-pink-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">عنوان التوصيل</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">العنوان التفصيلي *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                  placeholder="الحي، الشارع، رقم المبنى"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">المدينة *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                    placeholder="الرياض"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرمز البريدي *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.postalCode ? 'border-red-300' : 'border-gray-300'} focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                    placeholder="12345"
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="text-pink-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">طريقة التوصيل</h3>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="standard"
                  checked={formData.deliveryMethod === 'standard'}
                  onChange={handleInputChange}
                  className="ml-3 text-pink-600"
                />
                <div className="flex-1">
                  <div className="font-medium">التوصيل العادي (مجاني)</div>
                  <div className="text-sm text-gray-600">3-5 أيام عمل</div>
                </div>
              </label>
              
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="express"
                  checked={formData.deliveryMethod === 'express'}
                  onChange={handleInputChange}
                  className="ml-3 text-pink-600"
                />
                <div className="flex-1">
                  <div className="font-medium">التوصيل السريع (35 DH)</div>
                  <div className="text-sm text-gray-600">1-2 أيام عمل</div>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-pink-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">طريقة الدفع</h3>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                  className="ml-3 text-pink-600"
                />
                <div className="font-medium">بطاقة ائتمانية</div>
              </label>
              
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="ml-3 text-pink-600"
                />
                <div className="font-medium">الدفع عند الاستلام</div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">ملخص الطلب</h3>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-600">اللون: {item.selectedColor}</p>
                    <p className="text-sm font-semibold">الكمية: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-semibold text-pink-600">
                    {item.price * item.quantity} DH
                  </div>
                </div>
              ))}
            </div>
            
            <hr className="border-gray-200 mb-4" />
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span>{getTotalPrice()} DH</span>
              </div>
              <div className="flex justify-between">
                <span>الشحن:</span>
                <span>{formData.deliveryMethod === 'express' ? '35' : '0'} DH</span>
              </div>
              <div className="flex justify-between">
                <span>الضريبة (15%):</span>
                <span>{Math.round(getTotalPrice() * 0.15)} DH</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg font-bold">
                <span>المجموع الكلي:</span>
                <span className="text-pink-600">
                  {Math.round(getTotalPrice() * 1.15) + (formData.deliveryMethod === 'express' ? 35 : 0)} DH
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
            >
              تأكيد الطلب
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;