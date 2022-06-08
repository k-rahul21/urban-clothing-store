import "./home-page.css";
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/Hero";
import { Categories } from "../../components/categories/Categories";
import { Footer } from "../../components/footer/footer";

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
