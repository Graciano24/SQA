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
                            <h1>Muhammad Khanafi</h1>
                            <p>Juara 1 Matematika Internasional</p>
                        </div>
                    </div>
                    <img src="./img/profil.jpg" width="300" height="400" alt="orang" loading="lazy">
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('pengalaman-pengguna', PengalamanPengguna);
