import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-[#121120] bg-opacity-5 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
