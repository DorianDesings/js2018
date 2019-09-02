/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).

            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const person = {
    //     name: 'Dorian',
    //     email: 'dorian@gmail.com'
    // }

    // sessionStorage.setItem('person', JSON.stringify(person))
    // sessionStorage.setItem('name', 'Dorian')

    localStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${ form.key.value }</option>`

    form.reset()
})

keys.addEventListener('change', () => {
    document.getElementById('infoValue').textContent =
        localStorage.getItem(keys[ keys.selectedIndex ].textContent)
})

// localStorage.clear()
localStorage.removeItem('name')