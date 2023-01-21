import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class Helper {
    constructor(private router: Router) {
    }

    public goTo(path: string = '/', relative: boolean = false, new__tab: boolean = false): void {
        if (relative) {
            let base = this.router.routerState.snapshot.url
            this.devLog('goTo', 'base', base)
            this.devLog('goTo', 'base + path', `${base}${path}`)
            if (new__tab)
                window.open(`${base}${path}`, '_blank')
            else
                this.router.navigate([`${base}${path}`])
        } else {
            if (new__tab)
                window.open(path, '_blank')
            else
                this.router.navigate([path])
        }
    }

    public devLog(functionName: string = '', variableName: string = '', variable: any = undefined): void {
        console.log('\u001b[32m' + functionName + ' \u001b[33m::: \u001b[35m' + variableName + '\u001b[0m', variable)
    }
}