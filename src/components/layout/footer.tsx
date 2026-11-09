const Footer = () => {
  return (
    <footer className="custom-container">
      <div className="flex items-center justify-between border-t border-slate-200 py-6 text-[13px] font-medium text-slate-500 md:py-8">
        <span>© {new Date().getFullYear()} Samudra Faris Arqam</span>
        <span>samudrafaris.com</span>
      </div>
    </footer>
  );
};

export default Footer;
