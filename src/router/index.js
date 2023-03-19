import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import store from "@/store";

function authenticateGuard() {
    store.dispatch("login", store.getters.loggedInUser);
    if (!store.getters.isAuthenticated) {
        return {path: "login"};
    }
}

function guestGuard() {
    if (store.getters.isAuthenticated) {
        store.dispatch("login", store.getters.loggedInUser);
        return {path: "product"};
    }
}

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
        beforeEnter: [guestGuard],
    },
    {
        path: "/signup",
        name: "SignupPage",
        component: SignupPage,
        beforeEnter: [guestGuard],
    },
    {
        path: "/products",
        children: [
            {
                path: "",
                name: "ProductsPage",
                component: ProductsPage,
                beforeEnter: [authenticateGuard],
            },
            {
                path: ":id",
                name: "ProductPage",
                component: ProductPage,
                beforeEnter: [authenticateGuard],
            },
        ],
    },
    {
        path: "/about",
        name: "AboutPage",
        component: () =>
        import("../pages/AboutPage.vue"),
    },
    {
        path: "/:catchall(.*)",
        name: "ErrorPage",
        component: () => import("../pages/ErrorPage.vue"),
    },
    { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;