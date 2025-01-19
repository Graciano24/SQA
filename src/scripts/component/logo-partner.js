class LogoPartner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="logoPartner">
                <ul>
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                    <li><img
                          src="./img/wolf.png"
                          srcset="./img/wolf-200w.png 200w, ./img/wolf-400w.png 400w, ./img/wolf-600w.png 600w"
                          sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 600px"
                          width="600"
                          height="100"
                          alt="logoPartner"
                          loading="lazy"
                        ></li>  
                </ul>
            </div>
        `
    }
}

customElements.define('logo-partner', LogoPartner)