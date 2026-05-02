import { motion } from 'motion/react';

const feedImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCYgEu0h--G3mxFXL313mWA0if-iU9NgFzL-DXidEF0BmYi7IU06hsN7LjGKEfYiXrqE5P4H5527uRrrO4IGkste0JvST6QY-SuwZrPCvE3uOnNNhIEJhS54RRrkejm3w2qfTnNxeedJ4EiGYtMMYl6kvclV1P-_gys3qvhZaGtVcxjorRs0QKJaKlWiYnsVq78S2LuA7qvrjTFs9RA3bjjbCheb6dZvn2umEdXX6sDebcl4GZjEYyQQLGf7QWbA-UBIsJB76meqZY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDSSzXTE28IsnLZVDAscWtyg1AdQhYBnqB7TygQrZ3CZ8_6P0-UoOyv3_xWaleK27RFEknFFt66ES3skmMxukqpphbIkhUbewGCi2OwiiTnUx0TqjhbKfHbRX5a9Cb24Fe4Fo6M6whqnofkDxflCwF2K_UNHUf0QF6Lp1WN20BDcaEFnmivUkt9bxu4jiD-Ist30erJlUt8Vsx-MvqKQZZkvO-XEYg4fSYRYomepHxKrAx4ktKwqHgfSkvBNle0-DQX7tll2xBRI78',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD39KU2tQXu6EZG0_5PBk3Yn3lbByWFOwMJVA5LGNFPZcYGwNmFB1pZmI8uiqpN3rGLpSNYx9VzKb1h0IYW1zENPwUHJj5ztFzABOKqSQrlTpb7TCJW1ASSR6WAZ4Cz66No9I2ejbFvqBCReJvkjmSX70_8wCNzoFfEukYXE_-q32Vdu5D_WP_F97WvQNg87NQNa83PqHqMu17DafBsMyu2a9pGQZlxwJ0vVzlRe2_r6WTqt8cSpoXePp1YM0eoKf70GlosWEWccrM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-wmPzYbySH6v-Cdmhd5eD4RQic2stZdlufMzuKJqzLg-YfitU2RLzrDu-bv4d2K0TjI6Qxl0b1zmE0RdVuUJS4i4A9TsN1dWW8ul6WxfwDglcNgP9aD0n5B8T43RHkeVL-TK8tE7f_HcE2UXbWxrElDT9OJPlnTNplm_KW8G1Go5s3eUGDNWe14zSuns9Dct3id-9Ta1jtYu-QXkPMua5LKFewMtYbfVXB3gBQZvS9Ijxf7CNTMqtM2fPxAPfNDgw_U7m4oMVgg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCvFFosf4nzpBZuYwdU2Qa23CYDwtkcMAUSQNxlumTa9gXukAx9KkOhnNp-u1vyzHsVMiLVxgvOEAB9szRd5PjN7u_bbHcakObh4vh0LcZNEPKRs48nWh6UgWJLDeYDCqHtb7K-jBBBt6jLlPas_3JwXv9QBLvORzjii29HhJPy5YybIfW7Fsh9AOrN2YdxgsQrvZvW9VoupfoHsoA0kh0EJOqaUCvxJVeB9UOeUB3tc5o3R_seEKMPF3WRHh_q4Ynw-ROTV1WM1NQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5pCaGGaGGGZl3g4JUL2JiU_YoSTeOy6_jnMvFtWCPZ6oXkZHmpPuAG5j7ncbGfY7Us7YxAJWB764f_z6PiBZZFP6Amx5-1FvVCTo66_Gu_sCKKq0oS-As1-_Qk5mcBrzP0TnsjwPworsfvL83Z9zJQ6yKp7K6-CrNndB8X0ePDfqOBfaRuC3VwDaHRamQUmuf7mL3U1mihi-mbz2PbTOXUsgn0zopAjuYYFlBolySxUKweNwTMdW8JTYYhnSCzZq6YZ8Gat-SEjE'
];

export default function Kontak() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 md:py-24">
      <header className="text-center mb-24">
        <div className="flex justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-4xl">energy_savings_leaf</span>
        </div>
        <h1 className="font-display italic text-5xl text-primary mb-6">Hubungi Kami</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Melayani dengan cita rasa autentik sejak 1990. Kami senang mendengar masukan dan pertanyaan Anda.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-white p-12 rounded-3xl border border-stone-100 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-10">Informasi Kontak</h2>
            <div className="space-y-6 mb-12">
              <ContactLink 
                icon={<span className="material-symbols-outlined text-2xl">chat</span>} 
                label="WhatsApp" 
                val="082337572700" 
                href="https://wa.me/6282337572700"
                bg="bg-primary/10"
              />
              <ContactLink 
                icon={<span className="material-symbols-outlined text-2xl">photo_camera</span>} 
                label="Instagram" 
                val="@gadogadokaliurang" 
                href="#"
                bg="bg-stone-100"
              />
              <ContactLink 
                icon={<span className="material-symbols-outlined text-2xl">videocam</span>} 
                label="TikTok" 
                val="@gadogadokaliurang" 
                href="#"
                bg="bg-stone-100"
              />
            </div>
            <button className="w-full bg-secondary-container text-white text-center py-5 rounded-full font-bold text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-secondary-container/20">
              Tanya via WhatsApp
            </button>
          </section>

          {/* Location Short Info */}
          <section className="bg-primary-container text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Mampir Ke Kedai</h2>
              <p className="opacity-90 mb-8 leading-relaxed">Nikmati Gado-Gado legendaris langsung dari dapurnya di Jl. Kaliurang No. 123, Malang.</p>
              <div className="flex gap-4">
                <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">08.00 - 20.00</span>
                <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Setiap Hari</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">restaurant</span>
            </div>
          </section>
        </div>

        {/* Social Feed */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-8 px-2">
              <div>
                <h3 className="text-2xl font-bold text-primary">Keseruan Kami</h3>
                <p className="font-bold text-[10px] tracking-widest text-on-surface-variant uppercase">Update Terbaru dari Instagram</p>
              </div>
              <span className="material-symbols-outlined text-primary opacity-50 text-4xl">image</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {feedImages.map((src, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-stone-200 overflow-hidden rounded-xl relative group cursor-pointer"
                >
                  <img className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-500" src={src} alt="IG Feed" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white fill-1 text-3xl">favorite</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="font-bold text-[10px] tracking-widest text-primary border-2 border-primary px-10 py-4 rounded-full hover:bg-primary-container hover:text-white transition-all uppercase">
                Ikuti Kami Di Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactLink({ icon, label, val, href, bg }: any) {
  return (
    <a href={href} className="flex items-center gap-5 p-5 rounded-2xl hover:bg-surface-container transition-all group">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${bg} text-primary`}>
        {icon}
      </div>
      <div>
        <p className="font-bold text-[10px] tracking-widest text-on-surface-variant uppercase">{label}</p>
        <p className="text-lg font-bold">{val}</p>
      </div>
    </a>
  );
}
