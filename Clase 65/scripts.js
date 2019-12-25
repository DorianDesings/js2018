/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(object)

}

const error = (error) => console.log(error)