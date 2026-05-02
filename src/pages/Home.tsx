import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-10">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10 order-2 md:order-1"
          >
            <span className="font-bold text-primary tracking-[0.2em] mb-4 block text-xs uppercase">AUTHENTIC INDONESIAN CUISINE</span>
            <h1 className="font-display italic text-4xl md:text-6xl text-on-surface mb-6 leading-tight">
              Menjaga Resep Keluarga Sejak 1990
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Nikmati kelezatan legendaris Gado-Gado dengan bumbu kacang rahasia yang telah memanjakan lidah warga Malang selama lebih dari tiga dekade.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-container text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform uppercase">
                Pesan via GoFood
              </button>
              <button className="bg-primary text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform uppercase">
                Lihat Menu
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-primary-fixed rounded-full filter blur-3xl opacity-20 -z-10 scale-110"></div>
            <img 
              className="rounded-2xl object-cover w-full aspect-square shadow-2xl border border-stone-200" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN2DPcxA95X9lC-PJUf5j_dW190rWNR2YCF3pgXaFMWIPC8mdXP_HSUWdbR2LfcQ2ApXmPrLjwrIUa05uR9TR9wg_2ktqDiSuieEeszGLu2Pz0g4IzWtfQMVmMqxuk2Qg7TI2OqcJAOAufPXRq8gcVbJNAQih3GmWrjnjJIe4ppFGT0DSEJ2bPePgZR6ZxIzfhyVggVl18LdSuBgA1j7-_TsQS6YuHkVPJSiV4Gh9NSSoY0SEyD0A8PaZEAJRfhEyKh5z_wYuzrBg" 
              alt="Authentic Gado-Gado"
            />
          </motion.div>
        </div>
      </section>

      {/* Heritage Quote Block */}
      <section className="bg-surface-container py-20 mt-20">
        <div className="max-w-3xl mx-auto text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-primary fill-1 text-4xl">eco</span>
            </div>
            <blockquote className="font-display italic text-3xl md:text-4xl text-primary mb-6 leading-snug">
              "Warisan rasa yang lahir dari ketulusan dapur keluarga, diolah dengan bahan organik terbaik untuk kesehatan Anda."
            </blockquote>
            <p className="font-bold text-xs tracking-widest text-on-surface-variant uppercase">ESTABLISHED 1990 IN MALANG</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg aspect-[3/4] object-cover mt-12" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBcO7yC9qYtsSG74CQMcC9oRA2YIfnWcCJFOsLEbaAsJJ0CT1dHxxNB9lj4STmqyzipWFOX3MTCb6LxxFEjH41-81JVmgdPbjJ7ZjPO-PK5xsCAm9ZtxkP9XGy2VW4VkBJIOHy1DWFWt8xGv8YVOxS0_UwXQaztjlnIjF1blP4td82g4V5cAndgJrTVh-TlP_fW5HiIFcbyI1WKfcTlrhsmY3OIAU2DEltWVbkMbyB-GLqmHhzy93Cpddiql9Id4X3VxKMDFRXuSg" 
              alt="Heritage Story 1"
            />
            <motion.img 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg aspect-[3/4] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMI3kHS1owdIHLUXTFYZJdN0-wJYsGmXkzP2GQMla5nZWHDYggazMWsSvkpKEsczotfqn7mFG51KoJaiMOmvJGSFgTQTXUSrcGzgxWAx0AhlNke17cr2VkYZ2P2ma2yq45xevU4AdbjulRhXXb3BZlTmy74P2bBnxSn28uGn78tU-opdPee0sI98uZgqK5p53SdeSEW6T1BpOHZsnoaMwDR_Y5MeoeGps3eWzoCUQo2i-TAk5wHdUMe2Nby1nc1CA3uudfUgkVUM" 
              alt="Heritage Story 2"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Cerita Perjalanan Kami</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>Berawal dari sebuah kedai kecil di kawasan Kaliurang, Malang pada tahun 1990, kami memulai misi untuk menyajikan hidangan sehat yang tidak hanya mengenyangkan, tapi juga merawat tradisi.</p>
              <p>Selama lebih dari 30 tahun, kami tetap setia menggunakan bumbu kacang yang ditumbuk manual dan sayuran segar yang dipasok langsung dari petani lokal. Setiap piring Gado-Gado yang kami sajikan adalah penghormatan bagi resep turun-temurun keluarga kami.</p>
              <p>Hari ini, Gado-Gado Kaliurang menjadi saksi bisu pertumbuhan kota Malang, tetap menjadi pilihan utama bagi mereka yang mencari keaslian rasa di tengah perubahan zaman.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-bold text-secondary tracking-widest block mb-2 text-xs uppercase">MENU UNGGULAN</span>
              <h2 className="text-3xl font-bold text-on-surface">Pilihan Terfavorit</h2>
            </div>
            <a href="/menu" className="text-primary font-bold text-xs border-b border-primary pb-1 hover:opacity-70 transition-opacity uppercase">LIHAT SEMUA MENU</a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <MenuCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDjH0Os2KGZCo8LApizNbYDDGHJrBRQ0zTMxCdCoAH4MUrIQ6y5hKr8cfXg0Or5j9m-36cS6IAChWF5CrsgBOu4HAujv0XYdRvUNwlYJ3guKLHjeUPBg4kYGIPiN6Oxr_HNUiFWvio5i-R7gSf4sHMhSaTA4eja8cw_7yVQCGO5s8rcYnMDgxAYn-99sN_igi79fNuAHyEFGBGWJGdz2lkXttkhWIkzr63lSrDTZbc9lbEO6iBiWp0aBwussyBF3BiwcyTX20x8WdY"
              title="Gado-Gado Spesial"
              price="Rp 28.000"
              desc="Campuran sayuran organik, tahu tempe goreng, telur rebus, dan kerupuk udang dengan siraman bumbu kacang legendaris."
              badge="FAVORIT"
            />
            <MenuCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJYrQZGqqRRDC0BzQz_0KztOM8S8YAlaiJDydzNNM99pRQ6s5BLjLtr3p6NvIk_rMD3bMnRBvGWF48MsOS5uP4cPlmIQn-yqG0_HbBwoWnM6y4DYIycyByIRcLvU4L-DZe1fq6ASnl91XNZlOuY3eMNDWLctcL2_4aGAgqDhS9NDOn1-onXuuwa-wVgZfTkgbYQgJPLWBoF8Tb4nS0Pngq5qOq6drtSv0EpDH9tx9NRtenfitsmSERcNmOtKCdIsHN-UtsrH-5AH4"
              title="Rujak Cingur Malang"
              price="Rp 32.000"
              desc="Hidangan khas Jawa Timur dengan cingur sapi pilihan, buah-buahan segar, dan bumbu petis udang Grade A yang mantap."
              badge="PEDAS"
              badge2="AUTHENTIC"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
          <InfoCard 
            icon={<span className="material-symbols-outlined text-secondary text-4xl mb-4">schedule</span>}
            title="Jam Operasional"
            desc="Selasa - Minggu"
            val="08:00 - 15:00 WIB"
          />
          <div className="md:border-x border-stone-200">
            <InfoCard 
              icon={<span className="material-symbols-outlined text-secondary text-4xl mb-4">location_on</span>}
              title="Lokasi Kami"
              desc="Jl. Kaliurang No. 12"
              val="Lowokwaru, Kota Malang"
            />
          </div>
          <InfoCard 
            icon={<span className="material-symbols-outlined text-secondary text-4xl mb-4">phone</span>}
            title="Hubungi Kami"
            desc="WhatsApp & Reservasi"
            val="+62 812 3456 7890"
          />
        </div>
      </section>
    </div>
  );
}

function MenuCard({ image, title, price, desc, badge, badge2 }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 transition-all hover:border-primary/20"
    >
      <div className="relative h-80 overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} />
        <div className="absolute top-4 left-4 flex gap-2">
          {badge && <span className="bg-primary/10 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">{badge}</span>}
          {badge2 && <span className="bg-red-500/10 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">{badge2}</span>}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-on-surface">{title}</h3>
          <span className="font-bold text-primary">{price}</span>
        </div>
        <p className="text-on-surface-variant mb-6 leading-relaxed">{desc}</p>
        <button className="w-full py-4 bg-primary text-white font-bold text-xs tracking-widest rounded-xl hover:bg-primary-container transition-colors uppercase">LIHAT DETAIL</button>
      </div>
    </motion.div>
  );
}

function InfoCard({ icon, title, desc, val }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-10 bg-surface-container rounded-2xl"
    >
      {icon}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-on-surface-variant mb-1">{desc}</p>
      <p className="font-bold text-primary text-lg">{val}</p>
    </motion.div>
  );
}
