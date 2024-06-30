"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MdSpaceDashboard,
  MdWork,
  MdFolder,
  MdBuild,
  MdArticle,
  MdOutlineLogout,
  MdHome,
  MdMenu,
  MdClose,
} from "react-icons/md";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Header */}
      <div className="bg-[#F9FAFB] p-4 flex justify-between items-center lg:hidden fixed w-full top-0 z-20 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <h1 className="text-xl font-semibold">Control Panel</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:fixed h-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] z-10 bg-[#F9FAFB] text-black p-4 flex flex-col justify-between w-64 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div>
          <h5 className="text-3xl font-bold text-center">KamrulH.</h5>
          <nav className="w-full flex flex-col gap-3 mt-10">
            <ul className="flex flex-col gap-3 mx-3">
              <Link href="/dashboard">
                <li
                  className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                    path === "/dashboard" ? "bg-white border-slate-200" : ""
                  }`}
                >
                  <MdSpaceDashboard />
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/experience">
                <li
                  className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                    path === "/dashboard/experience"
                      ? "bg-white border-slate-200"
                      : ""
                  }`}
                >
                  <MdWork />
                  Experience
                </li>
              </Link>

              <Link href="/dashboard/project">
                <li
                  className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                    path === "/dashboard/project"
                      ? "bg-white border-slate-200"
                      : ""
                  }`}
                >
                  <MdFolder />
                  Projects
                </li>
              </Link>

              <Link href="/dashboard/skill">
                <li
                  className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                    path === "/dashboard/skill"
                      ? "bg-white border-slate-200"
                      : ""
                  }`}
                >
                  <MdBuild />
                  Skills
                </li>
              </Link>
              <Link href="/dashboard/blog">
                <li
                  className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                    path === "/dashboard/blog"
                      ? "bg-white border-slate-200"
                      : ""
                  }`}
                >
                  <MdArticle />
                  Blogs
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="mx-3 flex flex-col gap-3">
          <Link href="/">
            <li
              className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200 ${
                path === "/" ? "bg-white border-slate-200" : ""
              }`}
            >
              <MdHome />
              Home
            </li>
          </Link>
          <button onClick={handleLogout}>
            <li
              className={`flex items-center gap-2 border border-transparent px-3 py-1 rounded-md hover:bg-white hover:border-slate-200`}
            >
              <MdOutlineLogout />
              Logout
            </li>
          </button>
        </div>
      </aside>

      <main className="flex-1 bg-white pt-16 lg:pt-0  lg:pl-64">
        <header className="hidden lg:flex bg-[#F9FAFB] p-4 justify-center items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <h1 className="text-xl font-semibold text-center">Control Panel</h1>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
