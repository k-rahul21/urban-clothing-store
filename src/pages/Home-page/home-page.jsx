import "./home-page.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../../components/hero/Hero";
import { Categories } from "../../components/categories/Categories";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
};
