import { createWebHistory, createRouter } from "vue-router";
import Hello from '@/components/Hello'

import PostIndex from '@/components/post/PostIndex'
import PostNew from '@/components/post/PostNew'
import PostShow from "@/components/post/PostShow";
import PostEdit from '@/components/post/PostEdit'

import PageNotFound from '@/components/PageNotFound'

const routes = [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/posts',
        name: 'PostIndex',
        component: PostIndex
    },
    {
        path: '/posts/new',
        name: 'PostNew',
        component: PostNew
    },
    {
        path: '/posts/:id',
        name: 'PostShow',
        component: PostShow
    },
    {
        path: '/posts/edit/:id',
        name: 'PostEdit',
        component: PostEdit
    },
    {
        path: '/404',
        name: 'PageNotFound',
        component: PageNotFound
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
