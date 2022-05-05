import "./footer.css";

export const Footer = () => {
  return (
    <footer class="footer-section">
      <h1 class="heading3 font-bold">
        Experience Urban-Clothing app on mobile
      </h1>
      <div class="download-app-links">
        <img
          src="http://127.0.0.1:5500/assets/google-play-badge.png"
          alt="Playstore app link"
          class="playstore-link"
        />
        <img
          src="http://127.0.0.1:5500/assets/app-store-badge.png"
          alt="Appstore app link"
          class="appstore-link"
        />
      </div>
      <h4 class="origin">INDIA</h4>
    </footer>
  );
};
