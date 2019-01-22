

import axios from 'axios';

axios.defaults.baseURL = 'https://fda-services.herokuapp.com/v1.0';
// axios.defaults.headers.common['access_token'] = store.state.user

export default class LicenseAPI{
    
    constructor(token){
        this.token = token;
        console.log(token)
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['access_token'] = token;
    }

    getLicenses(cb) {
        axios.get('lto-api/').then(result => {
            console.log(JSON.stringify(result.data));
            if (result.data.success) {
                cb(result.data.model)
            } else {
                cb(result.data.errors)
            }
        });
    }
}

// module.exports = LicenseAPI
// export default {
//     getLicenses(cb) {
//         axios.get('lto-api/').then(result => {
//             console.log(JSON.stringify(result.data));
//             if (result.data.success) {
//                 cb(result.data.model)
//             } else {
//                 cb()
//             }
//         });
//     }
// }