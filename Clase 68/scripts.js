/* 
Tutorial chrome https://developers.google.com/web/tools/chrome-devtools/javascript?hl=es
*/

const form = document.getElementById('form')
const resultElement = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.number1.value != '' && e.target.number2.value != '') {
        const number1 = parseInt(e.target.number1.value)
        const number2 = parseInt(e.target.number2.value)
        const result = number1 + number2
        resultElement.textContent = `${number1} + ${number2} = ${result}`
        e.target.reset()
    }
})