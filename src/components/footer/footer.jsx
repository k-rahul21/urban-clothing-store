import "./footer.css";
import { iosBadge, androidBadge } from "../../assets";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <h1 class="heading3 font-bold">
        Experience Urban-Clothing app on mobile
      </h1>
      <div className="download-app-links">
        <img
          src={androidBadge}
          alt="Playstore app link"
          className="playstore-link"
        />
        <img src={iosBadge} alt="Appstore app link" class="appstore-link" />
      </div>
      <h4 className="origin">INDIA</h4>
    </footer>
  );
};
