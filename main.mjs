import './App.js'
import colorName from './node_modules/color-name/index.js'

document.body.style.backgroundColor = `rgb(${colorName.aliceblue.join(',')})`

document.addEventListener('DOMContentLoaded', () =>{
    const element = document.createElement('x-app')
    
    document.body.appendChild(element)
})
