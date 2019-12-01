/* 
https://developer.mozilla.org/es/docs/Web/API/notification 

icono: https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18*/

const permisions = document.getElementById('permisions')

permisions.addEventListener('click', (e) => {
    if (Notification.permission !== 'granted') {
        getPermisions()
    } else {
        notify()
    }
})

const getPermisions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    const props = {
        body: 'My first notification',
        icon: 'world.png'
    }
    const notification = new Notification('Hello World', props)

    notification.addEventListener('close', () => console.log('CLOSE'))
}