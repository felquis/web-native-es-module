import './App.js'
import colorName from './es-color-name.js'

document.body.style.backgroundColor = `rgb(${colorName.khaki.join(',')})`

document.addEventListener('DOMContentLoaded', () =>{
    const element = document.createElement('x-app')
    
    document.body.appendChild(element)
})
