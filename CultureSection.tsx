import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Palette, 
  Shirt, 
  Handshake,
  Home,
  TreePine
} from 'lucide-react';

const cultureAspects = [
  {
    icon: Users,
    title: 'Toplumsal Yapı',
    description: 'Zazalar, aşiretler, aileler ve köyler gibi toplumsal birimlerden oluşur. Aşiretler arasında dayanışma ve yardımlaşma önemli bir yer tutar.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'El Sanatları',
    description: 'Dokumacılık, halıcılık, kilimcilik, demircilik, bakırcılık ve çömlekçilik Zaza kültürünün önemli parçalarıdır.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shirt,
    title: 'Geleneksel Kıyafetler',
    description: 'Kadınlar şalvar, leçeg/puşi ve kuşak giyer. Erkekler takım şalvar, köşeli şapka ve desmal kullanır.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Handshake,
    title: 'Misafirperverlik',
    description: 'Zazalar misafirperverlikleriyle tanınır. Misafirlere büyük saygı ve ilgi gösterilir, sofralar zenginleştirilir.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Home,
    title: 'Geleneksel Yaşam',
    description: 'Tarihsel olarak tarım ve hayvancılıkla uğraşılmış, kırsal ve feodal bir hayat sürmüşlerdir.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: TreePine,
    title: 'Doğa İlişkisi',
    description: 'Doğayla iç içe bir yaşam tarzı, dağlar ve ormanlar Zaza kültüründe özel bir yer tutar.',
    color: 'from-teal-500 to-green-500',
  },
];

const folkStories = [
  {
    title: 'Dersim Ağıtları',
    description: '1937-38 katliamlarından etkilenen trajik olayları anlatan derin duygulu şarkılar.',
  },
  {
    title: 'Aşk Hikayeleri',
    description: 'Zaza edebiyatının önemli bir parçası olan romantik ve lirik hikayeler.',
  },
  {
    title: 'Destanlar',
    description: 'Köklü geçmişten gelen, nesilden nesile aktarılan epik anlatılar.',
  },
  {
    title: 'Atasözleri',
    description: 'Yaşam tecrübesini ve bilgeliği yansıtan kısa ve öz sözler.',
  },
];

export default function CultureSection() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full" />
      
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
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Kültür</span>
          </div>
          <h2 className="section-title mb-4">Zaza Kültürü</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Zengin bir folklor birikimi, geleneksel yaşam tarzı ve benzersiz 
            kültürel değerler.
          </p>
        </motion.div>

        {/* Culture Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cultureAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ios-card p-8 group overflow-hidden relative"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${aspect.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${aspect.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{aspect.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Folklore Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Folklor ve Edebiyat</h3>
              <p className="text-gray-400">Zengin sözlü gelenek</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {folkStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200"
              >
                <h4 className="font-semibold text-white text-lg mb-2">{story.title}</h4>
                <p className="text-sm text-gray-400">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Religious Diversity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="ios-card p-8">
            <h3 className="text-xl font-bold text-white mb-4">Dini Yapı</h3>
            <p className="text-gray-400 mb-6">
              Zazaların yaklaşık yarısı Alevi, yarısı Sünni Müslüman'dır. 
              Sünni kesimde Şafii ve Hanefi mezhepleri bulunur.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                <span className="text-sm text-gray-300">Alevi Zazalar (Tunceli, Dersim, Koçgiri)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                <span className="text-sm text-gray-300">Sünni Zazalar (Elazığ, Bingöl, Diyarbakır)</span>
              </div>
            </div>
          </div>

          <div className="ios-card p-8">
            <h3 className="text-xl font-bold text-white mb-4">Coğrafi Dağılım</h3>
            <p className="text-gray-400 mb-6">
              Zazaca, geniş bir coğrafyada farklı lehçelerle konuşulmaktadır.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Tunceli', 'Elazığ', 'Bingöl', 'Diyarbakır', 'Erzincan', 'Erzurum', 'Muş', 'Adıyaman'].map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
