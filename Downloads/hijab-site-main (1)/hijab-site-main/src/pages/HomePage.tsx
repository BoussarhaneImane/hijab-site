import { Link } from 'react-router-dom';
import { Star, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import '../styles/animations.css';

// Import des images locales
import abaya1 from '../assests/abaya1.jpg';
import abaya2 from '../assests/abaya2.jpg';
import abaya4 from '../assests/abaya4.jpg';
import abaya5 from '../assests/abaya5.jpg';
import abaya6 from '../assests/abaya6.jpg';
import abaya7 from '../assests/abaya7.jpg';
import abaya8 from '../assests/abaya8.jpg';

const HomePage = () => {
  // Suppression des variables non utilisées pour le nouveau design

  const collections = [
    {
      id: 1,
      name: 'عبايات كلاسيكية',
      description: 'تصاميم أنيقة للمناسبات الرسمية',
      image: abaya4,
      itemCount: 24
    },
    {
      id: 2,
      name: 'حجاب عصري',
      description: 'ألوان زاهية وأقمشة ناعمة',
      image: abaya5,
      itemCount: 18
    },
    {
      id: 3,
      name: 'مجموعة الصيف',
      description: 'خامات خفيفة ومريحة',
      image: abaya6,
      itemCount: 15
    }
  ];

  // Abayas hero display
  const heroAbayas = [
    { id: 1, image: abaya7, name: 'عباية فاخرة', price: '599 DH' },
    { id: 2, image: abaya8, name: 'عباية أنيقة', price: '450 DH' },
    { id: 3, image: abaya1, name: 'عباية كلاسيكية', price: '399 DH' },
    { id: 4, image: abaya2, name: 'عباية عصرية', price: '520 DH' }
  ];
  {/* translate-y-full = le bouton est déplacé vers le bas (invisible)
opacity-0 = le bouton est transparent
Au hover sur l'élément parent .group :

group-hover:translate-y-0 = le bouton remonte à sa position normale
group-hover:opacity-100 = le bouton devient visible
transition-all duration-500 delay-300 = animation fluide de 500ms avec un délai de 300ms */}
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute transform rotate-45 -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full"></div>
          <div className="absolute transform rotate-45 translate-x-1/2 translate-y-1/2 bottom-1/4 right-1/4 w-80 h-80 bg-purple-300 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-right space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                <Sparkles size={16} className="animate-spin" />
                عرض خاص - خصم حتى 50%
                <Sparkles size={16} className="animate-spin" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                عالم الأناقة
                <br />
                <span className="text-pink-500">الإسلامية</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                اكتشفي مجموعتنا الرائعة من العبايات والحجاب العصري
                <br />
                <span className="text-pink-500 font-semibold">جودة عالية • أسعار مناسبة • تصاميم فريدة</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl btn-glow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingBag size={20} className="group-hover:animate-bounce" />
                    تسوقي الآن
                  </span>
                </Link>
                
                <button className="group border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg btn-glow">
                  <span className="flex items-center gap-2">
                    <Heart size={20} className="group-hover:animate-pulse" />
                    المفضلة
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Abayas Display */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                {heroAbayas.map((abaya, index) => (
                  <div
                    key={abaya.id}
                    className={`group cursor-pointer relative overflow-visible transform transition-all duration-700 ease-out hover:scale-105 ${
                      index % 2 === 0 ? 'delay-100 rotate-3 hover:-rotate-1' : 'delay-200 -rotate-2 hover:rotate-1'
                    } ${index === 0 ? 'mt-8' : ''} ${index === 1 ? 'mb-8' : ''} ${index === 2 ? 'mb-8' : ''} ${index === 3 ? 'mt-8' : ''}`}
                  >
                    <div className="relative">
                      {/* Elegant Shadow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-3xl blur-xl transform translate-y-4 translate-x-2 group-hover:translate-y-6 group-hover:translate-x-3 transition-transform duration-500"></div>
                      
                      {/* Main Card */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="absolute inset-2 overflow-hidden rounded-2xl">
                          <img
                            src={abaya.image}
                            alt={abaya.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Floating Elements */}
                          <div className="absolute top-4 right-4 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <div className="bg-white/95 backdrop-blur-sm text-pink-600 font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                              {abaya.price}
                            </div>
                          </div>
                          
                          {/* Heart Icon */}
                          <div className="absolute top-4 left-4 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                              <Heart size={18} className="text-white fill-pink-400 animate-pulse" />
                            </div>
                          </div>
                          
                          {/* Product Info */}
                          <div className="absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                            <div className="text-white space-y-3">
                              <h3 className="font-bold text-base text-center">{abaya.name}</h3>
                              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                أضف للسلة
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-300/30 to-transparent rounded-br-full transform translate-x-2 -translate-y-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></div>
                      </div>
                      
                      {/* Floating Sparkles */}
                      <div className={`absolute -top-2 -left-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        index % 2 === 0 ? 'animate-pulse' : 'animate-bounce'
                      }`} style={{animationDelay: `${index * 200}ms`}}>
                        <Sparkles size={20} />
                      </div>
                      
                      <div className={`absolute -bottom-2 -right-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'
                      }`} style={{animationDelay: `${(index + 1) * 200}ms`}}>
                        <Star size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-16 -right-12 w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60 animate-pulse transform rotate-45"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60 animate-pulse transform -rotate-12" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-60 animate-pulse transform rotate-12" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 -left-6 w-12 h-12 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full opacity-60 animate-pulse transform -rotate-45" style={{animationDelay: '2.5s'}}></div>
              
              {/* Floating Lines */}
              <div className="absolute top-1/4 left-1/2 w-1 h-20 bg-gradient-to-b from-pink-200 to-transparent opacity-30 transform rotate-12 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/3 w-1 h-16 bg-gradient-to-b from-purple-200 to-transparent opacity-30 transform -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">مجموعاتنا المميزة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشفي أحدث التصاميم والألوان في عالم الأزياء الإسلامية العصرية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{collection.description}</p>
                  <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-xs">
                    {collection.itemCount} قطعة
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">جودة عالية</h3>
              <p className="text-gray-600">أفضل الخامات والأقمشة المختارة بعناية</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">شحن سريع</h3>
              <p className="text-gray-600">توصيل مجاني للطلبات أكثر من 200 ريال</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">خدمة عملاء</h3>
              <p className="text-gray-600">دعم فني على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;