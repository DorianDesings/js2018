const button = document.getElementById('button')

//res = response = respuesta
/* button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}) */

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/post',
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then(res => console.log(res.data))
        .catch(err => console.log(err))
})