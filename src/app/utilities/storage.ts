export class Storage {
    constructor() {
    }

    public getItem(key: string) {
        let tmp = localStorage.getItem(key)
        if (tmp !== null)
            return JSON.parse(tmp)
        return null
    }

    public updateItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public createItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}