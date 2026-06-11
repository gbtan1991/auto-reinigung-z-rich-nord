import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import CookieBanner from "./CookieBanner";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-[4.5rem]"><Outlet /></main>
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </div>
  );
}