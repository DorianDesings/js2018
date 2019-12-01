const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    setAlert(1)
})

addEventListener('offline', (e) => {
    setAlert(0)
})

const setAlert = (status) => {
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')

    status === 0 ?
        setTimeout(() => {
            alert.textContent = "Ups, it seems you're offline"
            alert.classList.add('alert--offline')
        }, 100) :
        setTimeout(() => {
            alert.textContent = "Great! You're online again!"
            alert.classList.add('alert--online')
        }, 100)
}