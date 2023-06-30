import Blockly from "blockly";
import { XmlJSON } from "./xmlJSON";
import { Warning } from "./warning";
export class Block {
    constructor(blockName) {
        this.blockData = { name: blockName, json: {} };
        this.warning = new Warning(blockName);
        this.xmlJson = new XmlJSON(blockName);
    }
    setName(name) {
        this.blockData.name = name;
        return this;
    }
    setBlockJSON(data) {
        this.blockData.json = data;
        return this;
    }
    Block() {
        return Blockly.Blocks[this.blockData.name];
    }
    Register() {
        let d = this.blockData.json;
        Blockly.Blocks[this.blockData.name] = {
            init: function () {
                this.jsonInit(d);
            },
        };
    }
}
