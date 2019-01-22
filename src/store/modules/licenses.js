// import setAuthToken from '@/axios-config.js'
// var jwt = require('jsonwebtoken')
import store from '../index'
import LicenseAPI from '../../api/licenses';

const state = {
    LicenseAPI: {},
    licenses: []
}

const mutations = {
    API_INSTANCE(state, token){
        state.LicenseAPI = new LicenseAPI(token);
    },
    SET_LICENSES(state, licenses){
        console.log('mutations licenses: ' + JSON.stringify(licenses))
        state.licenses = licenses;
    }
}

var actions = {
    SET_LICENSES(context){
        context.state.LicenseAPI.getLicenses((licenses) => {
            console.log('actions licenses: ' + JSON.stringify(licenses))
            context.commit('SET_LICENSES', licenses)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
