class PilihanPembelajaran extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="pilihanPembelajaran" id="pilihanPembelajaran">
                <div class="judulMenu">
                    <div class="aksesorisMenu"></div>
                    <h2>Pilihan Pembelajaran</h2>
                </div>
                <div class="listPembelajaran">
                    <a href="./bukuMatematika.html">
                        <div class="pembelajaran">
                            <img src="./img/keys.avif" width="600" height="400" alt="ikon pembelajaran" loading="lazy">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Matematika</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="./bukuSejarah.html">
                        <div class="pembelajaran">
                            <img src="./img/history.avif" width="400" height="200" alt="ikon pembelajaran" loading="lazy">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Sejarah</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="./bukuSains.html">
                        <div class="pembelajaran">
                            <img src="./img/science.avif" width="400" height="200" alt="ikon pembelajaran" loading="lazy">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Sains</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="./bukuUmum.html">
                        <div class="pembelajaran">
                            <img src="./img/alphabet.avif" width="600" height="400" alt="ikon pembelajaran">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Umum</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `
    }
}
customElements.define('pilihan-pembelajaran',PilihanPembelajaran)