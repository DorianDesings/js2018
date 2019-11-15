//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData()
    }

    const getData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(key)

        request.onsuccess = (e) => {
            form.task.value = request.result.taskTitle
            form.priority.value = request.result.taskPriority
            form.button.dataset.action = 'update'
            form.button.textContent = 'Update Task'
        }
    }

    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.put(data)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add Task'
            readData()
        }
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            const cursor = e.target.result
            if (cursor) {

                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)

                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                fragment.appendChild(taskDelete)

                cursor.continue()
            } else {
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }


        if (e.target.button.dataset.action == 'add') {
            addData(data)
        } else if (e.target.button.dataset.action == 'update') {
            updateData(data)
        }

        form.reset()
    })

    tasks.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        }
    })
}