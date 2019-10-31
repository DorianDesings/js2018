/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.

        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const images = document.getElementById('images')
const text = document.getElementById('text')

// fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsText(file)
//     fileReader.addEventListener('load', (e) => {
//         text.textContent = e.target.result
//     })
// })

//Carga simple de imagen
// fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener('load', (e) => {
//         img.setAttribute('src', e.target.result)
//     })
// })

//Carga múltiple de imágenes
fileInput.addEventListener('change', (e) => {
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    for (const file of files) {
        const fileReader = new FileReader()
        const img = document.createElement('IMG')
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})