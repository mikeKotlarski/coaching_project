import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule
    },
    state() {
        return {
            userId: 'id1'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;