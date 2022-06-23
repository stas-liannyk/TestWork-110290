import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import post from './modules/posts'

export default new Vuex.Store({
    getters,
    actions,
    modules: {
        post
    }
})
