import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

function getPostsApi(cb) {
    api.get('posts')
        .then((response) => {
            cb(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

function getPostApi(idpost, cb) {
    api.get('posts/' + idpost)
        .then((response) => {
            cb(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

function saveDataApi(data, cb) {
    api.post('posts', data)
        .then(function (response) {
            cb(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

function updateData(idpost, data, cb) {
    api.put('posts/' + idpost, data)
        .then(() => {
            cb({status: 201})
        })
        .catch((error) => {
            console.log(error)
        })
}

function deleteData(idpost, cb) {
    api.delete('posts/' + idpost)
        .then((response) => {
            cb(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default {
    getPosts: (cb) => getPostsApi(cb),
    getPost: (idpost, cb) => getPostApi(idpost, cb),
    savePost: (data, cb) => saveDataApi(data, cb),
    updatePost: (idpost, data, cb) => updateData(idpost, data, cb),
    deletePost: (idpost, cb) => deleteData(idpost, cb)
}
