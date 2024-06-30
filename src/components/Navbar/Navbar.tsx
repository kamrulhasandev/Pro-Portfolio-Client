const Navbar = () => {
  return (
    <div className="bg-[#121121]  backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md text-white">
      <div className="max-w-screen-xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <a href="/" className="text-slate-300 font-bold">
            KamrulH.
          </a>
          <ul className="flex gap-4 text-slate-300">
            <li>
              <a href="/" className="text-slate-300">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="text-slate-300">
                Blogs
              </a>
            </li>
            <li>
              <a href="/projects" className="text-slate-300">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
