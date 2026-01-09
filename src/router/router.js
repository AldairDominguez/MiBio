import { useData } from "../composables/data.js"
import { useSEO } from "../composables/seo.js"
import RouterView from "../vue/core/RouterView.vue"
import { createRouter, createWebHistory } from "vue-router"

export function createAppRouter() {
    const data = useData()
    const seo = useSEO()
    const sections = data.getSections()
    const homeSection = sections[0] || { id: 'home' }

    /** Create Home **/
    const routeList = [{
        path: '/',
        name: homeSection['id'],
        component: RouterView
    }]

    /** Create Section Routes **/
    for (let i = 1; i < sections.length; i++) {
        let sectionId = sections[i].id

        routeList.push({
            path: '/' + sectionId,
            name: sectionId,
            component: RouterView
        })
    }

    /** Wildcard Route **/
    routeList.push({
        path: "/:pathMatch(.*)*",
        redirect: '/'
    })

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: routeList
    })

    /** Update SEO meta tags on route change **/
    router.afterEach((to) => {
        const sectionId = to.name || 'about'
        const seoData = seo.getSectionSEO(sectionId)
        seo.updateMetaTags({
            title: seoData.title,
            description: seoData.description,
            section: sectionId
        })
    })

    return router
}
