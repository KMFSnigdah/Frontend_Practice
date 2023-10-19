import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-w-[350px] bg-slate-200">
      <Header />
      <div className="min-h-[360px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
