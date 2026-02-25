import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, History, MapPin, ArrowRight, X, ExternalLink } from 'lucide-react';

const languageFeatures = [
  {
    icon: Languages,
    title: 'Hint-Avrupa Ailesi',
    description: 'Zazaca, Hint-Avrupa dil ailesinin İranî diller grubunda yer alan bağımsız bir dildir.',
  },
  {
    icon: History,
    title: 'Köklü Tarih',
    description: 'Zazaca, yaklaşık 2000 yıllık bir geçmişe sahip olup Avestça ve Partça ile bağlantılıdır.',
  },
  {
    icon: MapPin,
    title: 'Coğrafi Yayılım',
    description: 'Türkiye\'nin doğu ve güneydoğu bölgelerinde yoğun olarak konuşulmaktadır.',
  },
];

const alphabet = [
  { letter: 'A', name: 'a', sound: 'a' },
  { letter: 'B', name: 'be', sound: 'b' },
  { letter: 'C', name: 'ce', sound: 'c' },
  { letter: 'Ç', name: 'çe', sound: 'ç' },
  { letter: 'D', name: 'de', sound: 'd' },
  { letter: 'E', name: 'e', sound: 'e' },
  { letter: 'Ê', name: 'ê', sound: 'ê' },
  { letter: 'F', name: 'fe', sound: 'f' },
  { letter: 'G', name: 'ge', sound: 'g' },
  { letter: 'H', name: 'he', sound: 'h' },
  { letter: 'I', name: 'ı', sound: 'ı' },
  { letter: 'İ', name: 'i', sound: 'i' },
];

const sampleWords = [
  { zaza: 'Merhaba', turkish: 'Merhaba', meaning: 'Selam' },
  { zaza: 'Ti çira yî?', turkish: 'Nasılsın?', meaning: 'İyi misin?' },
  { zaza: 'Ez rind im', turkish: 'İyiyim', meaning: 'Rahatım' },
  { zaza: 'Spas', turkish: 'Teşekkürler', meaning: 'Sağ ol' },
  { zaza: 'Ma', turkish: 'Anne', meaning: 'Ana' },
  { zaza: 'Pi', turkish: 'Baba', meaning: 'Baba' },
];

const timelineData = [
  {
    year: 'MÖ 1500-1000',
    title: 'Avestça Dönemi',
    shortDesc: 'Eski İrani dönem, Avestça etkisi',
    fullDesc: 'Zazaca\'nın kökleri, MÖ 1500-1000 yılları arasında konuşulan Avestça\'ya dayanır. Avestça, Zerdüşt dininin kutsal dili olup, Zazaca üzerinde önemli bir etki bırakmıştır. Bu dönemde İranî dillerin Anadolu\'ya yayılması başlamıştır.',
    sources: [
      { name: 'Wikipedia - Avestça', url: 'https://tr.wikipedia.org/wiki/Avest%C3%A7a' },
      { name: 'Encyclopaedia Iranica', url: 'https://www.iranicaonline.org/articles/avestan-language' },
    ],
  },
  {
    year: 'MÖ 247 - MS 224',
    title: 'Partça Dönemi',
    shortDesc: 'Partça dönemi, Zazaca şekillenmeye başlar',
    fullDesc: 'Part İmparatorluğu döneminde (MÖ 247 - MS 224) Partça dili yaygın olarak kullanılmıştır. Zazaca, bu dönemde şekillenmeye başlamış ve Partça\'dan birçok kelime ve dilbilgisi özelliği almıştır. Partça, Zazaca\'nın en yakın akrabası olan Pehlevi diliyle yakından ilişkilidir.',
    sources: [
      { name: 'Wikipedia - Partça', url: 'https://tr.wikipedia.org/wiki/Part%C3%A7a' },
      { name: 'Encyclopaedia Iranica - Parthian Language', url: 'https://www.iranicaonline.org/articles/parthian-language' },
    ],
  },
  {
    year: 'MS 500-1000',
    title: 'Erken Ortaçağ Dönemi',
    shortDesc: 'Zazaca\'nın Anadolu\'da yayılması',
    fullDesc: 'MS 500-1000 yılları arasında Zazaca konuşan topluluklar Anadolu\'ya göç etmeye başlamıştır. Bu dönemde Zazaca, yerel dillerle etkileşime girerek kendi özgün yapısını geliştirmiştir. Sasani döneminin sona ermesiyle birlikte İranî dillerin Anadolu\'da yayılması hızlanmıştır.',
    sources: [
      { name: 'Kıran, Z. (2013). Zazaca Dilinin Tarihsel Gelişimi', url: '#' },
    ],
  },
  {
    year: '1858',
    title: 'İlk Bilimsel Kayıtlar',
    shortDesc: 'İlk bilimsel kayıtlar (Lerch)',
    fullDesc: '1858 yılında Rus araştırmacı Heinrich Julius von Lerch, Zazaca üzerine ilk bilimsel çalışmayı yayınlamıştır. Lerch\'in çalışması, Zazaca\'nın Hint-Avrupa dil ailesine ait olduğunu ve bağımsız bir dil olduğunu kanıtlayan önemli bir kaynaktır. Bu çalışma, Zazaca\'nın akademik olarak tanınmasında dönüm noktası olmuştur.',
    sources: [
      { name: 'Lerch, H. J. von (1858). Forschungen über die Kurden und die iranischen Nordchaldäer', url: '#' },
      { name: 'Kıran, Z. (2013). Zazaca Dilinin Tarihsel Gelişimi', url: '#' },
    ],
  },
  {
    year: '1890-1900',
    title: 'Alman Asuriler Çalışması',
    shortDesc: 'Alman Asuriler\'in Zazaca araştırmaları',
    fullDesc: '1890-1900 yılları arasında Alman Asuriler (German Assyrians), Zazaca üzerine kapsamlı araştırmalar yapmıştır. Bu dönemde Zazaca\'nın gramer yapısı, kelime hazinesi ve lehçeleri incelenmiştir. Bu çalışmalar, Zazaca\'nın bilimsel olarak daha iyi anlaşılmasını sağlamıştır.',
    sources: [
      { name: 'Kıran, Z. (2013). Zazaca Dilinin Tarihsel Gelişimi', url: '#' },
    ],
  },
  {
    year: '1899',
    title: 'İlk Basılı Eser',
    shortDesc: 'İlk basılı eser (Ehmedi Xasi)',
    fullDesc: '1899 yılında Ehmedi Xasi\'nin "Mewlûd" adlı eseri yayınlanmıştır. Bu eser, Zazaca\'da basılmış ilk kitap olma özelliğini taşır. Ehmedi Xasi, Zaza edebiyatının önemli isimlerinden biri olup, eserleri günümüze kadar ulaşmıştır.',
    sources: [
      { name: 'Xasi, E. (1899). Mewlûd', url: '#' },
      { name: 'Kıran, Z. (2013). Zazaca Dilinin Tarihsel Gelişimi', url: '#' },
    ],
  },
  {
    year: '1937-1938',
    title: 'Dersim Olayları',
    shortDesc: 'Dersim Katliamı ve Zaza kültürüne etkisi',
    fullDesc: '1937-1938 yılları arasında yaşanan Dersim Olayları (Dersim Katliamı), Zaza kültürü ve dili üzerinde derin etkiler bırakmıştır. Bu dönemde birçok Zaza aydın ve sanatçı hayatını kaybetmiş, Zaza dili ve kültürü büyük bir darbe almıştır. Bu olaylar, Zaza edebiyatında derin izler bırakmış ve birçok ağıtın yazılmasına neden olmuştur.',
    sources: [
      { name: 'Wikipedia - Dersim Olayları', url: 'https://tr.wikipedia.org/wiki/Dersim_olaylar%C4%B1' },
      { name: 'Dersim Ağıtları', url: '#' },
    ],
  },
  {
    year: '1980-1990',
    title: 'Modern Zazaca Hareketi',
    shortDesc: 'Zazaca bilinçlenme hareketi',
    fullDesc: '1980-1990 yılları arasında Zazaca bilinçlenme hareketi hız kazanmıştır. Bu dönemde Zaza dili ve kültürü üzerine akademik çalışmalar artmış, Zazaca eğitim materyalleri hazırlanmaya başlanmıştır. Zaza dernekleri kurulmuş ve dilin korunması için çalışmalar yapılmıştır.',
    sources: [
      { name: 'Kıran, Z. (2013). Zazaca Dilinin Tarihsel Gelişimi', url: '#' },
    ],
  },
  {
    year: '2000-günümüz',
    title: 'Modern Zazaca Edebiyatı',
    shortDesc: 'Modern Zazaca edebiyatının gelişimi',
    fullDesc: '2000\'li yıllardan günümüze kadar Zazaca edebiyatı önemli bir gelişim göstermiştir. İnternet ve dijital medyanın yaygınlaşmasıyla birlikte Zazaca içerikler daha geniş kitlelere ulaşmaya başlamıştır. Zazaca dergiler, kitaplar ve online platformlar yaygınlaşmıştır. Ayrıca, Zazaca\'nın eğitim dili olarak kullanılması için çalışmalar devam etmektedir.',
    sources: [
      { name: 'Vate Dergisi', url: 'https://www.vate.org' },
      { name: 'ZazaenInstitut', url: 'https://zazaki.de' },
    ],
  },
];

interface TimelineModalProps {
  item: typeof timelineData[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function TimelineModal({ item, isOpen, onClose }: TimelineModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[80vh] overflow-auto z-50"
          >
            <div className="ios-card p-6 md:p-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Year Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-6">
                <History className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">{item.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {item.fullDesc}
              </p>

              {/* Sources */}
              <div className="border-t border-purple-500/20 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Kaynaklar
                </h4>
                <ul className="space-y-2">
                  {item.sources.map((source, index) => (
                    <li key={index}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {source.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function LanguageSection() {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<typeof timelineData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTimelineClick = (item: typeof timelineData[0]) => {
    setSelectedTimelineItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTimelineItem(null), 300);
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Modal */}
      <TimelineModal
        item={selectedTimelineItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
      
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
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Dil Bilgisi</span>
          </div>
          <h2 className="section-title mb-4">Zazaca Dilinin Özellikleri</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Zazaca, zengin bir tarihe ve benzersiz dilbilgisel özelliklere sahip,
            Anadolu'nun kadim dillerinden biridir.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {languageFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ios-card p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Alphabet Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Zazaca Alfabe</h3>
              <p className="text-gray-400">
                Zazaca Latin alfabesi kullanır ve bazı özel karakterler içerir.
              </p>
            </div>
            <button className="mt-4 md:mt-0 ios-button-secondary inline-flex items-center gap-2">
              Tam Alfabe <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
            {alphabet.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/20 flex flex-col items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:text-white transition-all duration-300 group"
              >
                <span className="text-2xl font-bold text-white group-hover:text-white">{item.letter}</span>
                <span className="text-xs text-gray-500 group-hover:text-white/70">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Words */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Temel Kelimeler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleWords.map((word, index) => (
              <motion.div
                key={word.zaza}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="ios-card p-6 group hover:border-purple-500/40 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-white mb-1">{word.zaza}</p>
                <p className="text-sm text-purple-400 mb-2">{word.turkish}</p>
                <p className="text-sm text-gray-500">
                  {word.meaning}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Historical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Dil Tarihi</h3>
          <p className="text-center text-gray-400 mb-8 text-sm">Detaylı bilgi için zaman çizgisindeki öğelere tıklayın</p>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 rounded-full" />
            
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-6 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-0 text-right' : 'pl-0 text-left'}`}>
                  <button
                    onClick={() => handleTimelineClick(item)}
                    className="ios-card p-4 w-full text-left hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                  >
                    <p className="text-sm font-bold text-purple-400 mb-1 group-hover:text-purple-300">{item.year}</p>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.shortDesc}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Detaylar için tıklayın</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => handleTimelineClick(item)}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 border-4 border-[#0a0a0f] shadow-lg shadow-purple-500/50 hover:scale-125 transition-transform cursor-pointer"
                  />
                </div>

                {/* Empty Space */}
                <div className="w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
