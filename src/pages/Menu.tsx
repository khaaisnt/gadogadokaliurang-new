import { motion } from 'motion/react';

const makanan = [
  {
    name: 'Rujak Cingur',
    price: '30K',
    desc: 'Irisan cingur sapi empuk dengan campuran sayur segar dan bumbu petis khas Jawa Timur.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdPJu7puVj3JgAN4nWkex3pTLgUUTMlRf1smU54gY60AGPHh6cHIv4ZrLmQcM8OWyy61fUf9j4ZsHQxgG-p-QgZ1tAa0NpXkoZqg6l1em2037hiJ0S2cvFZMNJixmzTxV4kXM8QHbYHK2zab_aFSz0SZNgQ1XqS7ZIF7ePoZgJ-MAt9MznEndxZePC7bd-5LtFgrB_uQrtuSu2lx9KofP5LgISjFp49dTZ6mHzJCJPhDRF7Tie_T9cVPuTiRCOxpbsKWw1CKiLYg8',
    badge: 'FAVORIT'
  },
  {
    name: 'Gado-Gado',
    price: '25K',
    desc: 'Sayuran segar kukus dengan saus kacang kental rahasia kami, disajikan dengan kerupuk udang.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2__ntedIRFa30AgAJm03bUjRQjQQZ7Pjc4WHoMeMfnqdhhNz5XeAUiP1sUOAgUPmviCTudUywi3_Hd6j3U09FsK6BD4eaYCcXRDVrwmzKwVwLpmkgJQ82cnX1ExRMLfTh959rIXCS48OqNF6jURCWF0kOjsQu1axi8Ek_pwgS2zr5ny0G4eNAA2VKxmUE5T_LNHhs0QEQj4oKQ4_hi8-4itgRyMKFLkUa74H70FxRcWlzcFz1mIjjBFCwlQrRlDj1vXmzQyj-DM',
    badge: 'HEALTHY'
  },
  {
    name: 'Rujak Manis',
    price: '20K',
    desc: 'Buah-buahan segar musim ini dengan cocolan gula merah pedas manis yang legit.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUH77Nx3S4xG-8fuEYRzzbGJz1QPyf9lu98IghmRd8yJlIxH2E5FjzoreX8aSXMCWlexWyZImPzjEKonYVC_5IhEZp_YzJOO2pJRqmuis61HmgQQqgu2rPXPhT1HhVMprDDa_zq4_ZqBq1KHLYl8D64hpbyTi_PgsHBXiKvIZNRLAE4WHQYRu_18LncV1Dv1IJrKwyMKcBiJdtN-8Az_SLoTzYvKqMaza42CgO5VGwjgNW-STMAcQyXxJkTnr3giSAfN7KSNrHyAQ'
  },
  {
    name: 'Rujak Bangkok',
    price: '20K',
    desc: 'Variasi rujak buah dengan bumbu bubuk khas yang pedas, asin, dan segar di lidah.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlAuWEJVivKFwGkcShv42R3AXYWT7cbN5yoGxUONBaJXlnto9zFV0KgDyP7MyT7Px-NbVFI_WFgc0-bX07DR7KKV3smVzagfFx_MC8PNtLQVRUa-2NhaqaPN2U_7FRPCVFlSomz0Oq5ukJ8-WTbT9TpIe6tvELHUeI2NPIw6bWAHH2bLcaS_cRevpgL4tMxG-Q3OMKbS61FvcHIx7WhhrH9aaOVHA1f5iPBc5VvLUGCExMCfe4MdDG7PExaysRnywh2bj99VH47yY'
  },
  {
    name: 'Nasi Ayam Bacem',
    price: '20K',
    desc: 'Ayam ungkep manis gurih disajikan dengan nasi putih hangat dan sambal goreng terasi.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMuVDPRkukkbii5J_br6mpnJWVM3JXcc6cVNwa_BJ2K3jmEohG1tl6STZiQ014d2s81rw9s5aLcQ2l_JKD9x1uw_0zXV6t8H3_IQAloVt6sS3XS2zPjMrlSRs9cCs6cFjUS7wBJZccSm_FF-XSre5e4RltB5gzXALvuCEE-7f8R7fXLtJM_4GLZMK3ePWIwuUfr3Q_LRncGpTTkZaX3s_viA4vBZxrsUt2U7ukEJ5AFn_P3qhiJnkBrdI_Gx4xtCiQUqhx5SN5HAo'
  }
];

const minuman = [
  { name: 'Es Campur', price: '15K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw8VZX7nyayNzTRXrW_fDqGiiYCAdKcaBtLu-zvCUjpi27DiqEDFEgPdEHPeA_b5vGoCgzzwSnfBVeY72KH515buBYWwLnIJR-rmtmX9GKYTO1z1k1l9a0g2lVHa2jvgxdlk3pCYJSCDGW7Vyz-Aww3VBNAJZTpuPly5K1kbKG8Bhdg0RwlnxOvDUiUPILj9fn-A3T-lqSFQ8IEbmeSxha7ZRAG8iBsaJMuaaV4UlqfEstbhwqMx4TxxOlsXUsvmmG5M9OmporCG0' },
  { name: 'Es Teler', price: '15K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi_v5aOOoHjV14reBbAL6rD9ZYVkORQx9P1gMjfBGJtPNfOdesPOI5Wj9kVpS8d-B6qu4ZZnohe4EpF7pEqd_HpjUoIwLJ0p0h0VTsjpy-aY2FSRp8EhzQkz3UYV9TE8bestyTju3UBN7Kt-W5mV9dDDa-16TKsQm1TztUpp9pAUcuUgOc6piW29Cu2ImAn_xtx2472sMe-LXrkIPyYqjZGPsPwkiteiyG83w1I5nueshhst-qkdPKYr4AOg2nfyHGuF8JIuSZp7U' },
  { name: 'Es Dawet', price: '10K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAnflZn1IKhQvHSQxxaiH8y4KAnIY0XQ6MDIsk2-s_9dcCT_z2mlUTjHiNcFs_ftUzE9Z-CzWQ5qjjJRKSZm15KKw8WBQtNPsR706i2tbQNMRMqKZi_YHhKSBYWgbeaOHqoKnWKHFTC8uwQAjzt83Jok9ZOBDBUpsXdkYarJXql2pJ1SVIFeVLR7fGJkyNs6WQTk0bNulZNv6_fQc3nZgK3XDYO1ZZcBA6EaTLsM-kqwlbCykcfAe7HKYTgnWu5MLbCPO9VtM1QKw' },
  { name: 'Es Cao', price: '10K', icon: 'glass_cup' },
  { name: 'Es/Panas Jeruk', price: '10K', icon: 'local_bar' },
  { name: 'Es/Panas Teh', price: '8K', icon: 'emoji_food_beverage' },
  { name: 'Kopi Tubruk', price: '10K', icon: 'coffee' }
];

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <header className="text-center mb-20">
        <div className="flex justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-4xl">eco</span>
        </div>
        <h1 className="font-display italic text-5xl text-on-background mb-4">Menu Kami</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Cita rasa warisan sejak 1990, disajikan segar setiap hari dengan bahan pilihan terbaik dari pasar lokal.
        </p>
      </header>

      <section className="mb-24">
        <div className="flex items-baseline gap-4 mb-8 border-b border-stone-200 pb-4">
          <h2 className="text-3xl font-bold text-primary">Makanan</h2>
          <span className="font-bold text-xs tracking-widest text-on-surface-variant opacity-60 uppercase">Traditional Delights</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {makanan.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} alt={item.name} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {item.badge && <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-[10px]">{item.badge}</span>}
                </div>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed italic">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <button className="bg-secondary-container text-white px-8 py-3 rounded-xl font-bold text-xs tracking-widest hover:bg-secondary transition-colors">PESAN</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline gap-4 mb-8 border-b border-stone-200 pb-4">
          <h2 className="text-3xl font-bold text-primary">Minuman</h2>
          <span className="font-bold text-xs tracking-widest text-on-surface-variant opacity-60 uppercase">Chilled Refreshments</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {minuman.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-surface-container/50 rounded-2xl p-6 border border-stone-100 hover:border-primary/20 transition-all text-center"
            >
              {item.img ? (
                <img className="w-full h-40 object-cover rounded-xl mb-4" src={item.img} alt={item.name} />
              ) : (
                <div className="w-full h-40 bg-stone-200 rounded-xl mb-4 flex items-center justify-center text-stone-400">
                  <span className="material-symbols-outlined text-5xl">{item.icon}</span>
                </div>
              )}
              <h4 className="text-lg font-bold mb-1">{item.name}</h4>
              <span className="text-primary font-bold block mb-6">{item.price}</span>
              <button className="w-full py-3 bg-secondary-container text-white rounded-xl font-bold text-[10px] tracking-widest">ORDER</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
