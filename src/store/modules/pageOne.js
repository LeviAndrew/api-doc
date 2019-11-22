export default {
    state: {
        api: {
            name: '',
            description: '',
            path: '',
            method: '',
        }
    },
    mutations: {
        SET_API(state, payload){
            state.api.name = payload.name
            state.api.description = payload.description
            state.api.path = payload.path
            state.api.method = payload.method
        }
    }
}
