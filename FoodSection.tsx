import { motion } from 'framer-motion';
import { Utensils, ChefHat, Flame, Leaf, Wheat } from 'lucide-react';

const foods = [
  {
    name: 'Babıko',
    description: 'Geleneksel Zaza ekmeği, özel bir mayalama tekniğiyle hazırlanır.',
    category: 'Ekmek',
    icon: Wheat,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    name: 'Bıcık',
    description: 'Yoğurtlu ve sarımsaklı geleneksel çorba.',
    category: 'Çorba',
    icon: ChefHat,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Zervet',
    description: 'Bulgur ve etle hazırlanan geleneksel yemek.',
    category: 'Ana Yemek',
    icon: Flame,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Keşka',
    description: 'Buğday ve etle yapılan geleneksel yemek, özellikle bayramlarda pişirilir.',
    category: 'Ana Yemek',
    icon: Flame,
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Helisa',
    description: 'Kavrulmuş buğday ve etle yapılan besleyici yemek.',
    category: 'Ana Yemek',
    icon: Flame,
    color: 'from-yellow-600 to-amber-600',
  },
  {
    name: 'Malez',
    description: 'Mısır unuyla hazırlanan geleneksel yemek.',
    category: 'Ana Yemek',
    icon: Wheat,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Patila',
    description: 'Hamur işi, çeşitli iç malzemelerle hazırlanır.',
    category: 'Hamur İşi',
    icon: Wheat,
    color: 'from-amber-600 to-yellow-600',
  },
  {
    name: 'Pêsare',
    description: 'Geleneksel makarna çeşidi, ev yapımı.',
    category: 'Hamur İşi',
    icon: Wheat,
    color: 'from-orange-400 to-amber-400',
  },
  {
    name: 'Şir',
    description: 'Tatlı çeşidi, özellikle bayramlarda yapılır.',
    category: 'Tatlı',
    icon: Leaf,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Bıcıka Qatqatın',
    description: 'Katmerli hamur işi, tereyağlı ve lezzetli.',
    category: 'Hamur İşi',
    icon: Wheat,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Çhebelek',
    description: 'Sebzeli geleneksel yemek.',
    category: 'Sebze Yemeği',
    icon: Leaf,
    color: 'from-green-500 to-lime-500',
  },
  {
    name: 'Dogma',
    description: 'Geleneksel içecek, fermente edilmiş.',
    category: 'İçecek',
    icon: Leaf,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'Serun',
    description: 'Süt ürünü, yoğurt benzeri.',
    category: 'Süt Ürünü',
    icon: Leaf,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Totur Aw',
    description: 'Geleneksel çorba, özellikle kış aylarında tüketilir.',
    category: 'Çorba',
    icon: ChefHat,
    color: 'from-emerald-500 to-green-500',
  },
  {
    name: 'Mawsta',
    description: 'Süt ürünü, peynir benzeri.',
    category: 'Süt Ürünü',
    icon: Leaf,
    color: 'from-yellow-400 to-amber-400',
  },
  {
    name: 'Çırvila',
    description: 'Hamur işi, özel şekil verilerek hazırlanır.',
    category: 'Hamur İşi',
    icon: Wheat,
    color: 'from-orange-500 to-red-500',
  },
];

export default function FoodSection() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full modern-badge mb-6">
            <Utensils className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Mutfak</span>
          </div>
          <h2 className="section-title mb-4">Zaza Mutfağı</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Geleneksel Zaza yemekleri, lezzetli tarifler ve özgün mutfak kültürü.
          </p>
        </motion.div>

        {/* Featured Food */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm mb-4">
                <ChefHat className="w-4 h-4" />
                <span>Öne Çıkan</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Keşka</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zaza mutfağının en önemli yemeklerinden biri olan Keşka, buğday ve etin 
                bir araya getirilmesiyle hazırlanan besleyici ve lezzetli bir yemektir. 
                Özellikle bayramlarda ve özel günlerde yapılır, büyük bir özenle pişirilir.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">Buğday</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">Et</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">Tereyağı</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">Baharat</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20">
                <Wheat className="w-16 h-16 text-amber-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/20">
                <Flame className="w-16 h-16 text-orange-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Food Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Tüm Yemekler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foods.map((food, index) => {
              const Icon = food.icon;
              return (
                <motion.div
                  key={food.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="ios-card p-5 group hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${food.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      {food.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{food.name}</h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {food.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cooking Traditions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 ios-card p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Mutfak Gelenekleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Tahıl Ağırlıklı</h4>
              <p className="text-sm text-gray-400">
                Buğday, mısır ve arpa Zaza mutfağının temelini oluşturur.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Doğal Malzemeler</h4>
              <p className="text-sm text-gray-400">
                Organik ve ev yapımı ürünler ön plandadır.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Odun Ateşi</h4>
              <p className="text-sm text-gray-400">
                Geleneksel odun ateşinde pişirme teknikleri yaygındır.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
