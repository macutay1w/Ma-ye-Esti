import { motion } from 'framer-motion';
import { Star, Quote, Film, Music, BookOpen, Trophy, Mic2 } from 'lucide-react';

const celebrities = {
  poets: [
    {
      name: 'Cemal Süreya',
      role: 'Şair & Yazar',
      description: 'Türk şiirinin önemli isimlerinden, Tunceli doğumlu. Modern Türk şiirine önemli katkılar yapmıştır.',
      born: '1931',
      died: '1990',
      famous: 'Üvercinka',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'Yusuf Hayaloğlu',
      role: 'Şair',
      description: 'Türk edebiyatının sevilen şairlerinden, duygusal şiirleriyle tanınır.',
      born: '1951',
      died: '2000',
      famous: 'Yalnızlık Paylaşılmaz',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Sej Qaji',
      role: 'Aşık & Şair',
      description: 'Dersimli ünlü aşık ve şair, Zaza ağıtlarının önemli temsilcisi.',
      born: '1871',
      died: '1936',
      famous: 'Dersim Ağıtları',
      icon: Mic2,
      color: 'from-red-500 to-rose-500',
    },
  ],
  actors: [
    {
      name: 'Yılmaz Güney',
      role: 'Oyuncu & Yönetmen',
      description: 'Türk sinemasının efsanevi ismi, Siverekli. Cannes Film Festivali Altın Palmiye ödüllü.',
      born: '1937',
      died: '1984',
      famous: 'Yol, Sürü',
      icon: Film,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Mahsun Kırmızıgül',
      role: 'Oyuncu & Yönetmen',
      description: 'Bingöllü ünlü sanatçı, müzik ve sinema alanında başarılı çalışmalara imza atmıştır.',
      born: '1969',
      died: '-',
      famous: 'Beyaz Melek, Güneşi Gördüm',
      icon: Film,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Necati Şaşmaz',
      role: 'Oyuncu',
      description: 'Elazığlı oyuncu, Kurtlar Vadisi dizisiyle tanınmıştır.',
      born: '1971',
      died: '-',
      famous: 'Kurtlar Vadisi',
      icon: Film,
      color: 'from-emerald-500 to-green-500',
    },
    {
      name: 'Erkan Petekkaya',
      role: 'Oyuncu',
      description: 'Elazığ doğumlu başarılı oyuncu, birçok dizi ve filmde rol almıştır.',
      born: '1970',
      died: '-',
      famous: 'Öyle Bir Geçer Zaman Ki',
      icon: Film,
      color: 'from-violet-500 to-purple-500',
    },
    {
      name: 'Ali Sürmeli',
      role: 'Oyuncu',
      description: 'Zaza kökenli ünlü tiyatrocu ve sinema oyuncusu.',
      born: '1954',
      died: '-',
      famous: 'Tiyatro Oyunları',
      icon: Film,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      name: 'Songül Öden',
      role: 'Oyuncu',
      description: 'Diyarbakır doğumlu başarılı oyuncu.',
      born: '1979',
      died: '-',
      famous: 'Gümüş, Kurtlar Vadisi',
      icon: Film,
      color: 'from-pink-500 to-rose-500',
    },
  ],
  musicians: [
    {
      name: 'Yıldız Tilbe',
      role: 'Şarkıcı',
      description: 'Türk pop müziğinin sevilen isimlerinden, Zaza kökenli.',
      born: '1966',
      died: '-',
      famous: 'Sevdanın Tadı',
      icon: Music,
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      name: 'Hakkı Bulut',
      role: 'Şarkıcı',
      description: 'Arabesk müziğin ünlü isimlerinden.',
      born: '1945',
      died: '-',
      famous: 'İntizar',
      icon: Music,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Servet Kocakaya',
      role: 'Şarkıcı',
      description: 'Bingöllü halk müziği sanatçısı.',
      born: '1973',
      died: '-',
      famous: 'Zaza Türküleri',
      icon: Music,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'İzzet Yıldızhan',
      role: 'Şarkıcı',
      description: 'Diyarbakırlı ünlü sanatçı.',
      born: '1969',
      died: '-',
      famous: 'Halk Müziği',
      icon: Music,
      color: 'from-lime-500 to-green-500',
    },
    {
      name: 'Mustafa Keser',
      role: 'Sanatçı',
      description: 'Elazığlı ünlü müzisyen ve sunucu.',
      born: '1945',
      died: '-',
      famous: 'Türk Sanat Müziği',
      icon: Music,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Ceylan',
      role: 'Şarkıcı',
      description: 'Zaza kökenli ünlü şarkıcı.',
      born: '1973',
      died: '-',
      famous: 'Arabesk Müzik',
      icon: Music,
      color: 'from-rose-500 to-pink-500',
    },
  ],
  sports: [
    {
      name: 'Selçuk Şahin',
      role: 'Futbolcu',
      description: 'Tuncelili eski futbolcu, Fenerbahçe forması giymiştir.',
      born: '1981',
      died: '-',
      famous: 'Fenerbahçe',
      icon: Trophy,
      color: 'from-yellow-500 to-blue-500',
    },
    {
      name: 'Mahmut Tekdemir',
      role: 'Futbolcu',
      description: 'Başarılı futbolcu, İstanbul Başakşehir forması giymektedir.',
      born: '1988',
      died: '-',
      famous: 'İstanbul Başakşehir',
      icon: Trophy,
      color: 'from-orange-500 to-red-500',
    },
  ],
  politics: [
    {
      name: 'Kemal Kılıçdaroğlu',
      role: 'Siyasetçi',
      description: 'Tuncelili siyasetçi, eski CHP Genel Başkanı.',
      born: '1948',
      died: '-',
      famous: 'CHP Liderliği',
      icon: Star,
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Selahattin Demirtaş',
      role: 'Siyasetçi',
      description: 'Zaza kökenli siyasetçi ve yazar.',
      born: '1973',
      died: '-',
      famous: 'Siyasi Liderlik',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
    },
  ],
};

interface CelebrityCardProps {
  person: typeof celebrities.poets[0];
  index: number;
}

function CelebrityCard({ person, index }: CelebrityCardProps) {
  const Icon = person.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="ios-card overflow-hidden group"
    >
      <div className={`h-1.5 bg-gradient-to-r ${person.color}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${person.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{person.born} - {person.died}</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
        <p className={`text-sm font-medium bg-gradient-to-r ${person.color} bg-clip-text text-transparent mb-3`}>
          {person.role}
        </p>
        
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {person.description}
        </p>
        
        <div className="pt-4 border-t border-purple-500/10">
          <p className="text-xs text-gray-500">Öne Çıkan</p>
          <p className="text-sm font-medium text-white">{person.famous}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface CategorySectionProps {
  title: string;
  items: typeof celebrities.poets;
}

function CategorySection({ title, items }: CategorySectionProps) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-violet-600" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((person, index) => (
          <CelebrityCard key={person.name} person={person} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function CelebritiesSection() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -translate-y-1/2" />
      
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
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Ünlüler</span>
          </div>
          <h2 className="section-title mb-4">Zaza Kökenli Ünlüler</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Sanat, edebiyat, sinema, müzik ve spor alanlarında başarılı 
            Zaza kökenli isimler.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ios-card p-8 md:p-12 mb-16 text-center relative overflow-hidden"
        >
          <Quote className="absolute top-4 left-4 w-16 h-16 text-purple-500/10" />
          <Quote className="absolute bottom-4 right-4 w-16 h-16 text-purple-500/10 rotate-180" />
          
          <p className="text-xl md:text-2xl font-medium italic text-white mb-6 relative z-10">
            "Bir dil, bir insan. İki dil, iki insan."
          </p>
          <p className="text-purple-400 relative z-10">
            — Zaza Atasözü
          </p>
        </motion.div>

        {/* Categories */}
        <CategorySection title="Şairler & Yazarlar" items={celebrities.poets} />
        <CategorySection title="Oyuncular & Yönetmenler" items={celebrities.actors} />
        <CategorySection title="Müzisyenler & Sanatçılar" items={celebrities.musicians} />
        <CategorySection title="Sporcular" items={celebrities.sports} />
        <CategorySection title="Siyasetçiler" items={celebrities.politics} />
      </div>
    </div>
  );
}
