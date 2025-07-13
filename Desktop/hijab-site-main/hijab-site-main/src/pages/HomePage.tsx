import { Link } from 'react-router-dom';
import { Star, Heart, Sparkles } from 'lucide-react';

// Import images
import abaya1 from '../assets/abaya1.jpg';
import abaya2 from '../assets/abaya2.jpg';
import abaya3 from '../assets/abaya3.jpg';
import abaya4 from '../assets/abaya4.jpg';
import abaya5 from '../assets/abaya5.jpg';
import abaya6 from '../assets/abaya6.jpg';

const HomePage = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Design */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-rose-300 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 py-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="text-pink-500" size={20} />
              <span className="text-pink-600 font-medium">مجموعة جديدة 2025</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                أناقة
              </span>
              <br />
              <span className="text-gray-700">وجمال</span>
              <br />
              <span className="text-pink-500">بلا حدود</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              اكتشفي عالم الأزياء الإسلامية العصرية مع تشكيلة رائعة من الحجاب والعبايات الأنيقة
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>تسوقي الآن</span>
                <Heart className="group-hover:scale-110 transition-transform duration-300" size={20} />
              </Link>
              <button className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl">
                <span>شاهدي المجموعة</span>
                <Sparkles size={20} />
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600 text-sm">تصميم رائع</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-gray-600 text-sm">عميلة سعيدة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">99%</div>
                <div className="text-gray-600 text-sm">رضا العملاء</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-20 transform lg:translate-x-12">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={abaya1}
                    alt="Elegant Hijab Style"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Heart className="text-pink-500" size={24} />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                    <div className="text-pink-600 font-bold text-lg">خصم 40%</div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Images */}
              <div className="absolute top-12 -left-8 z-10 w-32 h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <img src={abaya2} alt="Style 2" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-20 -right-6 z-10 w-28 h-36 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <img src={abaya3} alt="Style 3" className="w-full h-full object-cover" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 left-1/4 w-8 h-8 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-1/3 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 right-4 w-4 h-4 bg-rose-400 rounded-full opacity-70 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
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