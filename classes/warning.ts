import { registerRestrictions, restrictions } from "../warning/warning";
export enum WarningType {
    Null = "",
    HasParent = "hasparent",
    TopLevelParent = "toplevelparent",
    BlockExists = "blockexists",
    NotBlockExists = "notblockexists",
    Parent = "parent",
    NotEmpty = "notempty",
    DropdownOfParent = "dropdownofparent"
}

export interface WarningMessage {
    type: WarningType;
    message: string;
    types: string[];
}

export class Warning {
    block: string
    constructor(blockName: string) {
        this.block = blockName
    }
    addWarnings(...warning: WarningBuilder[]): Warning {
        let msgs = []
        for(let i =0; i < warning.length; i++) {
            msgs.push(warning[i].data)
        }

        registerRestrictions(this.block, msgs)
        return this
    }
}
export class WarningBuilder {
    data: WarningMessage
    constructor() {
        this.data = {
            type: WarningType.Null,
            message: "",
            types: []
        }
    }
    setMessage(msg: string): WarningBuilder {
        this.data.message = msg
        return this
    }
    setType(typ: WarningType): WarningBuilder {
        this.data.type = typ
        return this
    }
    setTypes(...types: string[]): WarningBuilder {
        this.data.types = types
        return this
    }
}
