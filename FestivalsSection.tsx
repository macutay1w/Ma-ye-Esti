import { motion } from 'framer-motion';
import { Calendar, Sun, Moon, Star, TreePine, Sparkles } from 'lucide-react';

const festivals = [
  {
    name: 'Roşanê Remezani',
    turkish: 'Ramazan Bayramı',
    description: 'Ramazan ayının sonunda kutlanan önemli bayram. Hem Alevi hem Sünni Zazalar tarafından kutlanır.',
    icon: Moon,
    color: 'from-indigo-500 to-purple-500',
    season: 'Ramazan Sonu',
  },
  {
    name: 'Roşanê Qurbani',
    turkish: 'Kurban Bayramı',
    description: 'Kurban bayramı, Zazalar arasında büyük önem taşır. Aile birliktelikleri ve yardımlaşma ön plandadır.',
    icon: Star,
    color: 'from-green-500 to-emerald-500',
    season: 'Zilhicce',
  },
  {
    name: 'Kormışkan',
    turkish: 'Nevruz / Bahar Bayramı',
    description: 'Siverek yöresinde Mart ayında kutlanan bahar bayramı. Son zamanlarda tüm Zazalar tarafından kutlanmaktadır.',
    icon: TreePine,
    color: 'from-green-500 to-lime-500',
    season: 'Mart',
  },
  {
    name: 'Hawtemal',
    turkish: 'Haftamal / Bahar Bayramı',
    description: 'Dersim yöresinde Mart ayında kutlanan bahar bayramı. Alevi Zazalar tarafından kutlanır.',
    icon: Sun,
    color: 'from-yellow-500 to-orange-500',
    season: 'Mart',
  },
  {
    name: 'Hawtemalo Pil',
    turkish: 'Büyük Hawtemal',
    description: 'Dersim yöresinin en önemli bayramlarından biri.',
    icon: Sun,
    color: 'from-orange-500 to-red-500',
    season: 'Mart',
  },
  {
    name: 'Hawtemalo Qıc',
    turkish: 'Küçük Hawtemal',
    description: 'Büyük Hawtemal\'den bir hafta sonra kutlanan bayram.',
    icon: Sun,
    color: 'from-amber-500 to-yellow-500',
    season: 'Mart',
  },
  {
    name: 'Qereçarseme',
    turkish: 'Kara Çarşamba',
    description: 'Mart ayında kutlanan bahar bayramı, Alevi Zazalar tarafından kutlanır.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    season: 'Mart',
  },
  {
    name: 'Newê Marti',
    turkish: '9 Mart',
    description: 'Özel bir gün olarak kutlanır.',
    icon: Calendar,
    color: 'from-blue-500 to-cyan-500',
    season: '9 Mart',
  },
  {
    name: 'Gağand',
    turkish: 'Yılbaşı',
    description: '13 Ocak\'ta kutlanan yılbaşı benzeri özel gün, özellikle Dersim-Koçgiri-Varto dolaylarında.',
    icon: Sparkles,
    color: 'from-cyan-500 to-blue-500',
    season: '13 Ocak',
  },
  {
    name: 'Rocê Xızıri',
    turkish: 'Hızır Orucu',
    description: 'Alevi Zazalar tarafından Şubat ayının ikinci haftasında 3 gün tutulan oruç.',
    icon: Moon,
    color: 'from-teal-500 to-green-500',
    season: 'Şubat',
  },
  {
    name: 'Rocê İmamu',
    turkish: 'Muharrem Orucu',
    description: 'Alevi Zazalar tarafından Muharrem ayında tutulan oruç.',
    icon: Moon,
    color: 'from-red-600 to-red-700',
    season: 'Muharrem',
  },
];

const traditions = [
  {
    title: 'Cem Törenleri',
    description: 'Alevi Zazaların önemli dini törenleri, Zazaca deyişler ve semahlar eşliğinde yapılır.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Düğün Gelenekleri',
    description: 'Zaza düğünleri günlerce süren coşkulu etkinliklerdir. Halaylar, müzik ve eğlence vazgeçilmezdir.',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Ziyaret Yerleri',
    description: 'Kutsal kabul edilen ziyaret yerleri, manevi öneme sahiptir.',
    icon: TreePine,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Sözlü Gelenek',
    description: 'Destanlar, menkıbeler ve atasözleri nesilden nesile aktarılır.',
    icon: Sun,
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function FestivalsSection() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -translate-y-1/2" />
      
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
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Bayramlar</span>
          </div>
          <h2 className="section-title mb-4">Bayramlar ve Özel Günler</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Zaza kültüründe kutlanan bayramlar, dini törenler ve geleneksel özel günler.
          </p>
        </motion.div>

        {/* Featured Festival */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-lime-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-4">
                <TreePine className="w-4 h-4" />
                <span>Bahar Bayramı</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Kormışkan</h3>
              <p className="text-lg text-green-400 mb-4">Nevruz / Newroz</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zazaların en önemli bayramlarından biri olan Kormışkan, baharın gelişini 
                ve doğanın uyanışını kutlar. Siverek yöresinde başlayan bu gelenek, 
                zamanla tüm Zaza toplulukları tarafından benimsenmiştir. Mart ayında 
                kutlanan bu bayramda özel yemekler yapılır, halk oyunları oynanır 
                ve birliktelikler pekiştirilir.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">Mart</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">Bahar</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">Doğa</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20">
                <TreePine className="w-20 h-20 text-green-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-lime-500/20 to-yellow-500/20 flex items-center justify-center border border-lime-500/20">
                <Sun className="w-20 h-20 text-lime-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Festivals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-6">Tüm Bayramlar ve Özel Günler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {festivals.map((festival, index) => {
              const Icon = festival.icon;
              return (
                <motion.div
                  key={festival.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="ios-card p-6 group hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${festival.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      {festival.season}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-lg mb-1">{festival.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{festival.turkish}</p>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {festival.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Traditions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Kültürel Gelenekler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditions.map((tradition, index) => {
              const Icon = tradition.icon;
              return (
                <motion.div
                  key={tradition.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tradition.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{tradition.title}</h4>
                  <p className="text-sm text-gray-400">{tradition.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Calendar Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-300">
              Zaza takvimi, güneş ve ay döngülerine göre şekillenmiştir
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
