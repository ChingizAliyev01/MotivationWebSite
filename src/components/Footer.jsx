import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About the site </h3>
            <p>Bu site, jsx ve css ile footer kodlama örneği göstermek için oluşturulmuştur.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Adres: Baku, Azerbaijan</p>
            <p>Telefon: +994 77 XXX XX XX</p>
            <p>E-mail: info@site.com</p>
          </div>
          <div className="col-md-4">
            <h3>Social Media</h3>
            <ul className="social-icons">
              <li><a  href="https://www.instagram.com/mmotivasiya/" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://t.me/mmotivasiya" target="_blank"><i className="fab fa-telegram"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook-f" target="_blank"></i></a></li>
              <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copy">Copyright 2024 - Mmotivasiya - Motivasiya Məktəbi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
