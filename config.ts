export let data = {
    registerRestrictionsFunc: function() {}
}
export class Config {
    constructor(registerRestrictionsFunc: (...args: any) => any) {

        data.registerRestrictionsFunc = registerRestrictionsFunc
    }

}