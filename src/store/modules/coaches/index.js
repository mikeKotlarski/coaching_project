import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Mike',
                    lastName: 'Kotlarski',
                    areas: ['cooking', 'photography', 'life'],
                    description:
                     "Hi, I'm Mike, and I look forward to being your coach!",
                    hourlyRate: 20,
                },
                {
                    id: 'c2',
                    firstName: 'Matt',
                    lastName: 'Rajowski',
                    areas: ['running', 'history', 'life'],
                    description:
                     "Hi, I'm Matt, and I'm a professional running, history, and life coach!",
                    hourlyRate: 30,
                },
            ]
        };
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};
