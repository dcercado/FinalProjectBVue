import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {
    //  isLoggedIn: function(state){
    //if (state.token !=''){
    //  return true
    //}else {
    //  return false
    //}
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
};
const host = 'http://localhost:5000';
const actions = {
    //Login Action
    async login({ commit }, user) {
        commit('auth_request');
        try {
            let res = await axios.post(host + '/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                //store the token into the localstorage
                localStorage.setItem('token', token);
                //set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        }
        catch (err) {
            commit('register_error', err)
        }
    },
    //Register User
    async register({
        commit
    }, userData) {
        commit('register_request');
        try {
        let res = await axios.post(host + '/api/users/register', userData);
        if (res.data.success !== undefined) {
            commit('register_success');
        }
        return res;
    }
    catch (err) {
        commit('register_error', err)
    }
    },
    //Logout the user
    async logout({ commit }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
    },
    register_request(state) {
        state.status = 'loading'
    },
    register_success(state) {
        state.status = 'success'
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}