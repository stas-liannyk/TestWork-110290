import postsApi from '../../api/posts'
import * as mutationType from '../mutation_types'

// initial state
const state = {
    all: [],
    post: {},
    message: null
}

// initial getters
const getters = {
    post: state => state.post,
    allPosts: state => state.all,
    messages: state => state.message
}

// initial actions
const actions = {
    getAllPosts ({commit}) {
        postsApi.getPosts(data => {
            commit(mutationType.SHOW_ALL_POST, data)
        })
    },
    getPostById({commit}, id) {
        postsApi.getPost(id, post => {
            commit(mutationType.SHOW_POST_BY_ID, post)
        })
    },
    savePost (context, data) {
        postsApi.savePost(data, (response) => {
            if (response.status === 200) {
                state.message = 'Data success has saved'
            }
            context.dispatch('getAllPosts')
        })
    },
    updatePost (context, post) {
        postsApi.updatePost(post.id, post, (response) => {
            if (response.status === 200) {
                state.message = 'Data success has updated'
            }
            context.dispatch('getAllPosts')
        })
    },
    destroy (context, idpost) {
        let conf = window.confirm('Are you sure delete this Data?')
        if (conf) {
            postsApi.deletePost(idpost, (response) => {
                if (response.status === 200) {
                    state.message = 'Data success has deleted'
                }
                context.dispatch('getAllPosts')
            })
        }
    }
}

const mutations = {
    [mutationType.SHOW_ALL_POST] (state, data) {
        state.all = data.posts
    },
    [mutationType.SHOW_POST_BY_ID] (state, data) {
        state.post = data.post
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
