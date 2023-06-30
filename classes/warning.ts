import { data  } from "../config"
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
    restrictionFunc: (...args: any) => any
    block: string
    constructor(blockName: string) {
        this.restrictionFunc = data.registerRestrictionsFunc
        this.block = blockName
    }
    setWarnings(...warning: WarningBuilder[]): Warning {
        let msgs = []
        for(let i =0; i < warning.length; i++) {
            msgs.push(warning[i].data)
        }

        this.restrictionFunc(this.block, msgs)
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
