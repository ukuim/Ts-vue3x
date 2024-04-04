import { createRouter, createWebHistory } from 'vue-router'


const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
         
        },
        {
            path: '/home',
            redirect: '/home/h1',
            component: () => import('@/components/Home.vue'),
            children: [
                {
                    path: '/home/h1',
                    component: () => import('@/views/h1.vue')
                },
                {
                    path: '/home/h2',
                    component: () => import('@/views/h2.vue')
                }
            ]
        },

        {
            path: '/login',
            component: () => import('@/components/Login.vue')
        }

    ]
})
export default route