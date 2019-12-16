class App extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.tmpl = document.createElement('template')
    }

    connectedCallback() {
        const style = document.createElement('style')
        const h2 = document.createElement('h2')

        style.textContent = `h2 { color: hsl(120,100%,30%); }`
        h2.textContent = 'Hello World'

        this.shadow.appendChild(style)
        this.shadow.appendChild(h2)
    }

    disconnectedCallback() {
        console.log('App unmounted')
    }

    onSubmit(event) {
        event.preventDefault()
        console.log('onSubmit', event)
    }
}

customElements.define('x-app', App)

export default App
