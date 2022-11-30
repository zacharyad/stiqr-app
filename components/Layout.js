import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-tl from-slate-50 to-blue-400">
      <Navbar className="h-1/6" />
      <main className="h-4/6 ">{children}</main>
      <Footer className="h-1/6" />
    </div>
  );
}
