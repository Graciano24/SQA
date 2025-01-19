class FooterBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="detailFooter">
            <div class="detailInstansi">
              <div class="logo">
                <img
                  src="./img/wolf.png"
                  srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                  sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                  width="600"
                  height="100"
                  alt="logo"
                  loading="lazy"
                >
                <p>LoneWolf</p>
              </div>
              <p>Jalan Duri No. 90, Duri Kepa, Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 20123</p>
              <div class="sosmed">
                <a href="https://www.instagram.com/dicoding/"><img
                  src="./img/instagram.png"
                  srcset="./img/instagram-50w.png 50w, ./img/instagram-100w.png 100w, ./img/instagram-250w.png 250w"
                  sizes="(max-width: 600px) 50px, (max-width: 1200px) 100px, 250px"
                  width="250"
                  height="50"
                  alt="instagram"
                  loading="lazy"
                ></a>
                <a href="https://www.youtube.com/@DicodingIndonesia"><img
                  src="./img/youtube.png"
                  srcset="./img/youtube-50w.png 50w, ./img/youtube-100w.png 100w, ./img/youtube-150w.png 150w"
                  sizes="(max-width: 600px) 50px, (max-width: 1200px) 100px, 150px"
                  width="150"
                  height="50"
                  alt="youtube"
                  loading="lazy"
                ></a>
                <a href="https://x.com/dicoding"><img
                  src="./img/twitter.png"
                  srcset="./img/twitter-50w.png 50w, ./img/twitter-100w.png 100w, ./img/twitter-150w.png 150w"
                  sizes="(max-width: 600px) 50px, (max-width: 1200px) 100px, 150px"
                  width="150"
                  height="50"
                  alt="twitter"
                  loading="lazy"
                ></a>
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
