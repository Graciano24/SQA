class LogoPartner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="logoPartner">
                <ul>
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" width="600" height="100" alt="logoPartner"></li>  
                </ul>
            </div>
        `
    }
}

customElements.define('logo-partner', LogoPartner)