

export class LocalStorageService<T> {

    constructor(private key: string) {

    }
    saveItemsToLocalStorage(items: Array<T> | T) {
        const saveItems = localStorage.setItem(this.key, JSON.stringify(items));
        return saveItems;
    }

    getItemsFromLocalStorage(key?: string) {
        let savedItems;
        if (key != null) {
            savedItems = JSON.parse(localStorage.getItem(key));

        } else {
            const saveItems = JSON.parse(localStorage.getItem(this.key));

        }

        return savedItems;
    }

    clearItemFromLocalSTorage(key?: string) {
        if (key != null) {
            const items = null;
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            localStorage.clear();

        }
    }
}

