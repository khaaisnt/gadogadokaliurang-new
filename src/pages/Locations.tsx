import { motion } from 'motion/react';

export default function Lokasi() {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[20%] brightness-75 scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD10s_aaRK4yzOdmGmT7uIj0jKiF8JD4txNmBv_7f2vhBRF9_wcLwlG7PMGLJUGwLZW05RPWvN7UMAn70bDU_-ERThSBC_b7lBSKjW8RVsetlpFDpJjWmPaMyLUG3qwEPd4iMyborJbbcwU2B3T3ba68Sz9YyBlO-rBI1WqV-je7VitvT1QX0sUNv2HIRYQRp1j1Bc-T4svjhJHKKT_n7PA4-9PLPSO_gflf0120CTUF9iFM-K6VDJ4YuJvHccGFg3VfklrrJ5rwOU" 
            alt="Venue"
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <span className="material-symbols-outlined text-white text-5xl mb-4">park</span>
            <h1 className="font-display text-5xl md:text-6xl text-white drop-shadow-2xl italic">Kunjungi Kami</h1>
            <div className="h-1.5 w-24 bg-secondary-container mt-6 rounded-full"></div>
          </motion.div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Address Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white border border-stone-200 p-12 rounded-3xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="font-bold text-xs tracking-widest text-primary mb-6 block uppercase">LOKASI KAMI</span>
              <h2 className="text-3xl font-bold text-on-surface mb-6">Jl. Melati No.44, Lowokwaru</h2>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Kec. Lowokwaru, Kota Malang, Jawa Timur 65141.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-secondary-container/20 uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">navigation</span>
                PETUNJUK ARAH
              </button>
              <span className="text-on-surface-variant text-sm font-bold italic opacity-60">5 menit dari Universitas Brawijaya</span>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-primary-container text-white p-12 rounded-3xl flex flex-col relative overflow-hidden shadow-sm"
          >
            <div className="absolute -right-8 -top-8 opacity-10">
              <span className="material-symbols-outlined text-[200px]">schedule</span>
            </div>
            <div className="relative z-10">
              <span className="font-bold text-xs tracking-widest text-primary-fixed mb-8 block uppercase">JAM OPERASIONAL</span>
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/20 pb-6">
                  <span className="text-xl font-bold">Selasa - Minggu</span>
                  <span className="text-lg">08:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold opacity-60">Senin</span>
                  <span className="bg-red-500/30 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">LIBUR</span>
                </div>
              </div>
            </div>
            <div className="mt-12 relative z-10 pt-10 border-t border-white/10">
              <p className="text-sm opacity-80 leading-relaxed italic">
                "Kami menyarankan datang lebih awal untuk memastikan Anda mendapatkan porsi Gado-Gado segar kami sebelum habis terjual."
              </p>
            </div>
          </motion.div>

          {/* Map Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 h-[500px] rounded-3xl overflow-hidden border border-stone-200 relative shadow-inner"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4978.494935873602!2d112.62751036970892!3d-7.954096056718681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6290034107357%3A0x811a2c47d9ef9e7!2sGado-gado%20Kaliurang!5e0!3m2!1sid!2sid!4v1777686435245!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Gado-Gado Kaliurang"
              className="grayscale-[20%] contrast-[1.1]"
            ></iframe>
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-sm border border-stone-100 hidden md:block">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary fill-1">location_on</span>
                <span className="text-xl font-bold">Gado-Gado Kaliurang</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Pusat kuliner sehat dan legendaris di jantung Kota Malang.</p>
              <button className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-xs tracking-widest hover:bg-stone-800 transition-colors uppercase">LIHAT PETA BESAR</button>
            </div>
          </motion.div>

          {/* Extra Facilities */}
          <div className="md:col-span-12 py-20 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
            <blockquote className="font-display italic text-2xl md:text-3xl text-on-surface-variant max-w-3xl leading-relaxed mb-12">
              "Menjaga cita rasa warisan sejak 1990, di tempat yang tenang untuk menikmati kesegaran alam dalam setiap suapan."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-10">
              <Facility icon="wifi" label="FREE WIFI" />
              <Facility icon="local_parking" label="PARKIR LUAS" />
              <Facility icon="mosque" label="MUSHOLA" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Facility({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
      <span className="font-bold text-[10px] tracking-widest text-on-surface-variant uppercase">{label}</span>
    </div>
  );
}
