import { createRouter, createWebHistory } from 'vue-router';

import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';

import CoachesContact from './pages/requests/CoachesContact.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import PageNotFound from './pages/PageNotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            { path: '/', redirect: '/coaches' },
            { path: '/coaches', component: CoachesList },
            {   path: '/coaches/:id', 
                props: true,
                component: CoachesDetail, 
                children: [
                    { path: 'contact', component: CoachesContact }
                ]
            },
            { path: '/register', component: CoachesRegistration},
            { path: '/requests', component: RequestsReceived},
            { path: '/:invalid(.*)', component: PageNotFound},
        ]
    }
);

export default router;


