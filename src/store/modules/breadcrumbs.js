const state = {
  navigation:[]
};

const mutations = {
    ADD: function(state, payload){
        state.navigation.add(payload)
    },
    REMOVE: function(state, payload){

    }
}

export default {
  state,
  mutations
};
