const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(form)
})

const sendData = (data) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('POST', 'marvel.php')
    const formData = new FormData(data)

    xhr.send(formData)
}