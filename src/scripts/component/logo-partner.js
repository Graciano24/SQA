class LogoPartner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="logoPartner">
                <ul>
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                    <li><img src="./img/wolf.png" width="144" height="144" alt="logoPartner" loading="lazy"></li>  
                </ul>
            </div>
        `
    }
}

customElements.define('logo-partner', LogoPartner)