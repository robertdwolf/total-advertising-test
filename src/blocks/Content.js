import '/node_modules/tiny-slider/dist/tiny-slider.css'
import { html } from 'lit-html'
import { tns } from '/node_modules/tiny-slider/src/tiny-slider'

const HeadlineLinks = () => {
    const block = html`
        <section class="hero">
            <div class="container">
                <h1>Always Be The Most Captivating Person In The Room.</h1>
                <div class="text">
                    <p>Picture yourself speaking to an audience, no matter the size, and realizing you feel prepared, conﬁdent, and excited to share your message</p>
                </div>    
            </div>
        </section>

        <section class="intro">
            <div class="container">
                <p>To be a powerful communicator requires mastering the technique, inner confidence, and the ability to share your vision with clarity and passion. This is the framework ofa great communicator. Some people are born with the gift of a strong presence and great communication. But anyone can develop it through high-level training and a little bit of dedication.</p>
                <p>Working with an expert public speaking coach is a life-changing experience that will help you turn that ambition into reality. Even if you’re communicating to an audience of only one, the skills you learn from an expert communication coach prepare you to connect in a way that will keep your audience consistently interested and engaged. Because when you connect with them, you motivate them to trust in the insight you’re offering them.</p>
                <p>If you’re ready to take your communication skills to the next level, schedule your free consultation today! Whether it's for a corporate event or a podcast, I will createa personalized plan for you and/or your group to effectively communicate with your audience.</p>
                <p>All of my coaching sessions are tailored for online learning. In-person sessions are available for people in Southern California.</p>
                <a href="#" class="btn">Schedule A Free Consultation</a>
            </div>
        </section>

        <section class="testimonials">
            <div class="top">
                <div class="container">
                    <div class="testimonial-title">Testimonials</div>
                    <div class="slider-wrap">
                        <div class="slider">
                            <div class="item">
                                <div class="quote">As an executive at a large firm, I have to be on my game when speaking to my employees. These classes have been keeping me sharp for years. I wouldn't think of working with anyone else.</div>
                                <div class="cite">-John Doe, title</div>
                            </div>
                            <div class="item">
                                <div class="quote">As an executive at a large firm, I have to be on my game when speaking to my employees. These classes have been keeping me sharp for years. I wouldn't think of working with anyone else.</div>
                                <div class="cite">-John Doe, title</div>
                            </div>
                            <div class="item">
                                <div class="quote">As an executive at a large firm, I have to be on my game when speaking to my employees. These classes have been keeping me sharp for years. I wouldn't think of working with anyone else.</div>
                                <div class="cite">-John Doe, title</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-images">
                        <div class="column">
                            <div class="img"></div>
                        </div>
                        <div class="column">
                            <div class="img"></div>
                        </div>
                        <div class="column">
                            <div class="img"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="container">
                    <div class="grid-info">
                        <div class="column">
                            <div class="title">Public Speaking</div>
                            <div class="text">
                                <ul>
                                    <li>Personal Development</li>
                                    <li>Sales & Motivation</li>
                                    <li>Speeches & Presentations</li>
                                </ul>
                            </div>
                            <a href="#">Learn More ></a>
                        </div>
                        <div class="column">
                            <div class="title">Corporate Coaching</div>
                            <div class="text">
                                <ul>
                                    <li>Executive Coach</li>
                                    <li>Team Training</li>
                                    <li>Keynote Address</li>
                                </ul>
                            </div>
                            <a href="#">Learn More ></a>
                        </div>
                        <div class="column">
                            <div class="title">Online Presentations</div>
                            <div class="text">
                                <ul>
                                    <li>Podcast Oration</li>
                                    <li>Webinars</li>
                                    <li>Virtual Meetings</li>
                                </ul>
                            </div>
                            <a href="#">Learn More ></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-1">
                        <form>
                            <div class="form-title">Let's Chat</div>
                            <div class="input-row">
                                <label><span>First Name</span>
                                    <input type="text" required/>
                                </label>
                                <label><span>Last Name</span>
                                    <input type="text" required/>
                                </label>
                            </div>
                            <label><span>Email</span>
                                <input type="email" required/>
                            </label>
                            <label><span>Message</span>
                                <textarea required></textarea>
                            </label>
                            <label class="checkbox">
                                <input type="checkbox"/>
                                Subscribe for free tips and tricks
                            </label>
                            <input type="submit" value="Send" class="btn"/>
                        </form>
                    </div>
                    <div class="col-2">
                        <div class="quote">
                            <div class="img"></div>
                            <div class="info">
                                <div class="text">“My passion is for my work. I’ve been involved in public speaking and performance my entire life and I can’t think of doing anything else. It’s in my DNA now and I love watching my clients succeed.”</div>
                                <div class="cite">-Communication Expert</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="clients">
            <div class="container">
                <div class="clients-title">Just A Few Clients I've Worked With</div>
                <div class="slider">
                    <div class="item">
                        <div class="img logo-1"></div>
                    </div>
                    <div class="item">
                        <div class="img logo-2"></div>
                    </div>
                    <div class="item">
                        <div class="img logo-3"></div>
                    </div>
                    <div class="item">
                        <div class="img logo-1"></div>
                    </div>
                    <div class="item">
                        <div class="img logo-2"></div>
                    </div>
                    <div class="item">
                        <div class="img logo-3"></div>
                    </div>
                </div>
            </div>
        </section>
    `

    document.querySelector('main').insertAdjacentHTML('beforeend', block.strings[0])

    const slider1 = tns({
        container: 'section.testimonials .slider',
        items: 1,
        controls: true,
        nav: false,
        mouseDrag: true,
        controlsText: ['<','>'],
    })

    const slider2 = tns({
        container: 'section.clients .slider',
        items: 3,
        gutter: 30,
        controls: true,
        nav: false,
        mouseDrag: true,
        controlsText: ['<','>'],
    })
}

export default HeadlineLinks