import Blockly from "blockly";
import { XmlJSON } from "./xmlJSON";
import {Warning} from "./warning";

export interface BlockData {
    name: string,
    json: any,
}
export class Block {
    block: Blockly.Block
    blockData: BlockData
    xmlJson: XmlJSON
    warning: Warning
    constructor(blockName: string) {
        this.blockData = {name: blockName, json: {}}
        this.warning = new Warning(blockName)
        this.xmlJson = new XmlJSON(blockName)

    }

    setName(name: string): Block {
        this.blockData.name = name
        return this
    }
    setBlockJSON(data: any): Block {
        this.blockData.json = data
        return this
    }
    Block() {
        return Blockly.Blocks[this.blockData.name]
    }
    Register() {
        let d = this.blockData.json
        Blockly.Blocks[this.blockData.name] = {
            init: function() {
                this.jsonInit(d);
            },

        };
    }

}