class PengalamanPengguna extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="pengalamanPengguna">
                <div class="judulMenu">
                    <div class="aksesorisMenu"></div>
                    <h2>Pengalaman Pengguna</h2>
                </div>
                <div class="quote">
                    <div class="detailQuote">
                        <span class="material-symbols-outlined">format_quote</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at tempore sequi cupiditate architecto ea cum dignissimos accusantium aspernatur?</p>
                        <div class="namaAuthor">
                            <h4>Muhammad Khanafi</h4>
                            <p>Juara 1 Matematika Internasional</p>
                        </div>
                    </div>
                    <picture>
                        <source srcset="./img/profil-480w.avif 480w, ./img/profil-600w.avif 600w" type="image/avif">
                        <source srcset="./img/profil-480w.webp 480w, ./img/profil-600w.webp 600w" type="image/webp">
                        <img src="./img/profil.jpg" 
                             srcset="./img/profil-480w.jpg 480w, ./img/profil-600w.jpg 600w"
                             sizes="(max-width: 600px) 480px, 600px"
                             width="600" height="450"
                             alt="foto orangnya" loading="lazy">
                    </picture>
                </div>
            </div>
        `;
    }
}
customElements.define('pengalaman-pengguna', PengalamanPengguna);
