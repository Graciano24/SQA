class LogoPartner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="logoPartner">
                <ul>
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="400" height="100" alt="logoPartner" loading="lazy"></li>  
                </ul>
            </div>
        `
    }
}

customElements.define('logo-partner', LogoPartner)