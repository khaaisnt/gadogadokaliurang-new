export default function Footer() {
  return (
    <footer className="bg-stone-100 py-12 border-t border-stone-200 mt-20 pb-32 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-primary-container">GADO-GADO KALIURANG</div>
          <p className="font-serif text-[10px] mt-2 text-stone-500 uppercase tracking-widest leading-loose">
            © 1990 Gado-Gado Kaliurang. Semua Hak Dilindungi.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-500">
          <a href="#" className="hover:text-secondary-container transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary-container transition-colors">TikTok</a>
          <a href="#" className="hover:text-secondary-container transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-secondary-container transition-colors font-bold text-primary-container">GoFood</a>
          <a href="#" className="hover:text-secondary-container transition-colors">Halal Indonesia</a>
        </div>
      </div>
    </footer>
  );
}
