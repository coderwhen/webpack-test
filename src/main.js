import { sum, mul } from './js/math.js'
const html = require('html-loader!./game.html')
const { dateFormat, priceFormat } = require('./js/format.js')
const component = () => import(/* webpackChunkName: 'component' */'./js/component')
// const chunk = () => import(/* webpackChunkName: 'chunk' */'./js/chunk')
console.log(sum(10, 20))
console.log(mul(10, 20))
console.log(dateFormat())
console.log(priceFormat())
console.log(html)
// import './css/test.css'
const element = document.createElement('button')
element.addEventListener('click', () => {
    component()
})

element.innerHTML = "button"
console.log(process.env.NODE_ENV)

document.querySelector('#app').appendChild(element)