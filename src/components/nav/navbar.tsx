import Link from "next/link";

const Navbar = () => {
  return (
    <header className="custom-container">
      <nav className="flex items-center justify-between py-5 md:py-12">
        <Link
          href="/"
          className="text-base font-semibold tracking-[-0.01em] text-slate-900"
        >
          Samudra Faris
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium text-slate-500 md:gap-6">
          <Link
            href="/#about"
            className="transition-colors hover:text-slate-900"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-slate-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
