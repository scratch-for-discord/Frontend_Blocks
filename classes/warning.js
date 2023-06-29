import { registerRestrictions } from "../warning/warning";
export var WarningType;
(function (WarningType) {
    WarningType["Null"] = "";
    WarningType["HasParent"] = "hasparent";
    WarningType["TopLevelParent"] = "toplevelparent";
    WarningType["BlockExists"] = "blockexists";
    WarningType["NotBlockExists"] = "notblockexists";
    WarningType["Parent"] = "parent";
    WarningType["NotEmpty"] = "notempty";
    WarningType["DropdownOfParent"] = "dropdownofparent";
})(WarningType || (WarningType = {}));
export class Warning {
    constructor(blockName) {
        this.block = blockName;
    }
    addWarnings(...warning) {
        let msgs = [];
        for (let i = 0; i < warning.length; i++) {
            msgs.push(warning[i].data);
        }
        registerRestrictions(this.block, msgs);
        return this;
    }
}
export class WarningBuilder {
    constructor() {
        this.data = {
            type: WarningType.Null,
            message: "",
            types: []
        };
    }
    setMessage(msg) {
        this.data.message = msg;
        return this;
    }
    setType(typ) {
        this.data.type = typ;
        return this;
    }
    setTypes(...types) {
        this.data.types = types;
        return this;
    }
}
