export default {
    set(key: string, value: string) {
        if (key) {
            window.localStorage.setItem(key, value);
        }
        return;
    },
    get(key: string) {
        if (key) {
            return window.localStorage.getItem(key);
        }
        return void 0;
    },
    remove(key: string) {
        if (key) {
            return window.localStorage.removeItem(key);
        }
    }
};
