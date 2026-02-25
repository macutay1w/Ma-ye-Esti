import { motion } from 'framer-motion';
import { Music, Disc, Mic2, Guitar, Drum, AudioLines } from 'lucide-react';

const instruments = [
  {
    name: 'Tembur',
    description: 'Zaza müziğinin en önemli telli çalgısı, uzun saplı ve yuvarlak gövdelidir.',
    icon: Guitar,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Keman',
    description: 'Avrupa kemanı, Zaza müziğinde yaygın olarak kullanılır.',
    icon: AudioLines,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Davul',
    description: 'Geleneksel davul, düğün ve festivallerde vazgeçilmezdir.',
    icon: Drum,
    color: 'from-red-500 to-rose-500',
  },
  {
    name: 'Zurna',
    description: 'Üflemeli çalgı, coşkulu müziklerde kullanılır.',
    icon: Mic2,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Def',
    description: 'Çerçeveli vurmalı çalgı, özellikle dini törenlerde kullanılır.',
    icon: Disc,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Kaval',
    description: 'Odun kamışından yapılan üflemeli çalgı.',
    icon: AudioLines,
    color: 'from-teal-500 to-green-500',
  },
];

const danceTypes = [
  {
    name: 'Qeraçor',
    description: 'En popüler Zaza halk oyunlarından biri, grup halinde oynanır.',
    region: 'Genel',
  },
  {
    name: 'Devzer',
    description: 'Coşkulu bir düğün oyunu, hızlı tempoludur.',
    region: 'Dersim',
  },
  {
    name: 'Çepki',
    description: 'Geleneksel erkek oyunu, güç ve cesareti simgeler.',
    region: 'Genel',
  },
  {
    name: 'Fadiki',
    description: 'Düğünlerde oynanan eğlenceli bir oyun.',
    region: 'Siverek',
  },
  {
    name: 'Wışke',
    description: 'El ele tutuşularak oynanan grup oyunu.',
    region: 'Dersim',
  },
  {
    name: 'Kılaçep',
    description: 'Hızlı adımlarla oynanan dinamik bir oyun.',
    region: 'Genel',
  },
  {
    name: 'Kartal Oyunu',
    description: 'Bingöl yöresine özgü, kartal hareketlerini taklit eden oyun.',
    region: 'Bingöl',
  },
];

const famousSingers = [
  {
    name: 'Weliyê Wuşenê Yimami',
    period: '1889-1958',
    description: 'Dersimli ünlü aşık ve ozan, Zaza ağıtlarının önemli temsilcisi.',
  },
  {
    name: 'Alaverdi',
    period: '1921-1983',
    description: 'Dersimli halk şairi ve ozan.',
  },
  {
    name: 'Hüseyin Doğanay',
    period: '1940-2005',
    description: 'Zaza müziğinin sevilen isimlerinden.',
  },
  {
    name: 'Sait Baksi',
    period: '1943-',
    description: 'Çağdaş Zaza müziğinin önemli temsilcisi.',
  },
  {
    name: 'Sej Qaji',
    period: '1871-1936',
    description: 'Efsanevi Dersim aşığı, 1937-38 olaylarını anlatan ağıtlarıyla tanınır.',
  },
];

const musicGenres = [
  {
    name: 'Ağıtlar (Lamenter)',
    description: 'Acıklı olayları, ölümleri ve ayrılıkları anlatan duygusal şarkılar.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Deyişler',
    description: 'Alevi-Bektaşi geleneğinin önemli parçası, dini ve felsefi içerikli.',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: 'Türküler',
    description: 'Günlük yaşam, aşk ve doğayı konu alan halk şarkıları.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Kilamlar',
    description: 'Sözlü hikaye anlatımıyla birleşen müzik türü.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function MusicSection() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full" />
      
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
            <Music className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Müzik</span>
          </div>
          <h2 className="section-title mb-4">Zaza Müziği ve Halk Oyunları</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Zengin müzik geleneği, benzersiz enstrümanlar ve coşkulu halk oyunları.
          </p>
        </motion.div>

        {/* Music Genres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-6">Müzik Türleri</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {musicGenres.map((genre, index) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`ios-card p-6 bg-gradient-to-br ${genre.color}`}
              >
                <h4 className="font-bold text-lg text-white mb-2">{genre.name}</h4>
                <p className="text-sm text-white/80">{genre.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instruments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
              <Guitar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Müzik Aletleri</h3>
              <p className="text-gray-400">Geleneksel enstrümanlar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((instrument, index) => {
              const Icon = instrument.icon;
              return (
                <motion.div
                  key={instrument.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${instrument.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{instrument.name}</h4>
                  <p className="text-sm text-gray-400">{instrument.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Dance Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6">Halk Oyunları</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {danceTypes.map((dance, index) => (
              <motion.div
                key={dance.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="ios-card p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{dance.name}</h4>
                  <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                    {dance.region}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{dance.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Famous Singers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Mic2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Ünlü Ozanlar ve Şarkıcılar</h3>
              <p className="text-gray-400">Zaza müziğine önemli katkılar yapan isimler</p>
            </div>
          </div>

          <div className="space-y-4">
            {famousSingers.map((singer, index) => (
              <motion.div
                key={singer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-semibold text-white">{singer.name}</h4>
                    <span className="text-xs text-gray-500">({singer.period})</span>
                  </div>
                  <p className="text-sm text-gray-400">{singer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
