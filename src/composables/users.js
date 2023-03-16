import store from "@/store";

export function useUser() {
    return store.state.user;
}