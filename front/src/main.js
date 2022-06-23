import {createApp} from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(Vuex).use(VueAxios, axios).use(store).use(router).mount('#app')
