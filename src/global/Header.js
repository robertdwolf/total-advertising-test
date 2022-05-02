import { html, render } from 'lit-html'

const Header = () => {
    const header = html`
        <header>
            <div class="bar container">
                <div class="left">
                    <a href="/" class="logo">
                    America's<br/>Best<br/>
                    <span>Communication Expert</span>
                    </a>
                </div>
                <div class="right contact">
                    <div>Schedule Your <br/>Free Consultation</div>
                    <div class="phone"><a href="tel:555-555-5555">(555) 555-5555</a></div>
                    <div class="email"><a href="mailto:info@communication.com">info@communication.com</a></div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">My Method</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `

    render(header, document.body)
}

export default Header