export let data = {
    registerRestrictionsFunc: function () { }
};
export class Config {
    constructor(registerRestrictionsFunc) {
        data.registerRestrictionsFunc = registerRestrictionsFunc;
    }
}
