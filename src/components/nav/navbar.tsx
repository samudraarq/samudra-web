import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div className="custom-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold">
            Samudra Faris
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/projects">Projects</Link>
            <Link href="/showcases">Showcases</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
