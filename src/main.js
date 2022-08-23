import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './views/store';
import axios from 'axios';
import Vue from 'vue';
//import Vuex from 'vuex';



//Vue.use(Vuex)
//Vue.prototype.$ajax = axios
//Vue.prototype.$http = axios
//Vue.prototype.axios = axios
//this.axios

//setting up default vue's http module for api calls
//Vue.config.productionTip = false

//load the token from the localStorage
//Vue.prototype.$http = axios;

const token = localStorage.getItem("token");


// Is there is any token then we will simply append defauly axios authorization headers

const app = createApp(App);
app.config.globalProperties.$http = axios
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}
app.use(router).use(store).mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//     apiKey: "AIzaSyDxuk5G5VER2VaFnbNZOVyxpcisVBdoO2M",
//     authDomain: "projectvuec.firebaseapp.com",
//     projectId: "projectvuec",
//     storageBucket: "projectvuec.appspot.com",
//     messagingSenderId: "141018903270",
//     appId: "1:141018903270:web:d5140522179719b94d4127"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);


export default Vue
