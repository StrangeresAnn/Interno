import { createRouter, createWebHistory } from "vue-router";
import BlogComponent from "@/pages/BlogComponent.vue"
import BlogDetails from "@/pages/BlogDetails.vue"
import HomePage from "@/pages/HomePage.vue"
import NotFoundComponent from "@/pages/NotFoundComponent.vue"
import ProjectComponent from "@/pages/ProjectComponent.vue"
import ProjectDetailsComponent from "@/pages/ProjectDetailsComponent.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/project/:pageNumber?",
        name: "Project",
        component: ProjectComponent,
    },
    {
        path: "/projectDetails",
        name: "ProjectDetails",
        component: ProjectDetailsComponent,
    },
    {
        path: "/blog",
        name: "Blog",
        component: BlogComponent,
    },
    {
        path: "/blogDetails",
        name: "BlogDetails",
        component: BlogDetails,
    },
    {
        path: "/:CatchAll(.*)",
        name: "NotFound",
        component: NotFoundComponent,
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router