import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import ChampionOverview from "../views/ChampionOverview.vue";
import ChampionInfo from "../views/ChampionInfo.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'ChampionOverview',
        component: ChampionOverview
    },
    {
        path: "/champion/:id",
        name: "ChampionInfo",
        props: true,
        component: ChampionInfo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router