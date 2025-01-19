class FooterBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="detailFooter">
            <div class="detailInstansi">
              <div class="logo">
                <img src="./img/wolf.png" alt="logo">
                <p>LoneWolf</p>
              </div>
              <p>Jalan Duri No. 90, Duri Kepa, Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 20123</p>
              <div class="sosmed">
                <a href="https://www.instagram.com/dicoding/"><img src="./img/instagram.png" width="200" height="50" alt="instagram"></a>
                <a href="https://www.youtube.com/@DicodingIndonesia"><img src="./img/youtube.png" width="100" height="50" alt="youtube"></a>
                <a href="https://x.com/dicoding"><img src="./img/twitter.png" width="100" height="50" alt="twitter"></a>
              </div>
            </div>
            <div class="service" id="service">
              <ul>
                <li><h1>Hebatnya Ilmu untuk Dunia</h1></li>
                <li class="itemMenu">
                  <a href="#" onclick="alert('Halaman Tentang Kami belum tersedia.'); return false;">Tentang Kami</a>
                </li>
                <li class="itemMenu">
                  <a href="#" onclick="alert('Halaman Kebijakan Privasi belum tersedia.'); return false;">Kebijakan Privasi</a>
                </li>
                <li class="itemMenu">
                  <a href="#" onclick="alert('Halaman Bantuan belum tersedia.'); return false;">Bantuan</a>
                </li>
              </ul>
            </div>
            <div class="contactPerson">
              <ul>
                <li><h2>Hubungi Kami</h2></li>
                <li class="itemMenu"><a href="mailto:lonewolf.academy@gmail.com">lonewolf.academy@gmail.com</a></li>
                <li class="itemMenu"><a href="tel:+62111122223333">+62 1111 2222 3333</a></li>
                <li class="itemMenu"><a href="tel:+62121223233434">+62 1212 2323 3434</a></li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; 2024 | LoneWolf Academy</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  