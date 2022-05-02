import { html } from 'lit-html'

const Footer = () => {
    const footer = html`
        <footer>
            <div class="container">
                <div class="top">
                    <a href="/" class="logo">
                    America's<br/>Best<br/>
                    <span>Communication Expert</span>
                    </a>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">My Method</a></li>
                            <li><a href="#">Experience</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="bottom">
                    <div class="contact">
                        <div>Schedule Your <br/>Free Consultation</div>
                        <div class="phone"><a href="tel:555-555-5555">(555) 555-5555</a></div>
                        <div class="email"><a href="mailto:info@communication.com">info@communication.com</a></div>
                    </div>
                    <div class="social">
                        <a href="#" aria-label="Facebook"></a>
                        <a href="#" aria-label="Instagram"></a>
                        <a href="#" aria-label="Twitter"></a>
                        <a href="#" aria-label="Linkedin"></a>
                        <a href="#" aria-label="IMDB"></a>
                        <a href="#" aria-label="Vimeo"></a>
                    </div>
                </div>
            </div>
        </footer>
    `

    document.body.insertAdjacentHTML('beforeend', footer.strings[0])
}

export default Footer