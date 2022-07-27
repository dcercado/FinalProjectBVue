import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './views/store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

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

createApp(App).use(router).use(router).mount('#app')

