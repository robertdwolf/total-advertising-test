import './index.scss'
import { html } from 'lit-html'
import Header from './global/Header.js'
import Footer from './global/Footer.js'
import Content from './blocks/Content.js'

const Main = () => {
    const main = html`
        <main></main>
    `

    document.body.insertAdjacentHTML('beforeend', main.strings[0])
}

Header()
Main()
Content()
Footer()