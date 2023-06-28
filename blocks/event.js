import { Block } from "../classes/block";
export { EventBlock };
class EventBlock extends Block {
    constructor(data) {
        super();
        this.dataBlock = {
            "colour": "#F5AB1A",
            message0: "",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "STATEMENTS"
                }
            ]
        }; // auto generated data, use BlockData method instead
        this.data = data;
        this.MakeEventName();
    }
    MakeEventName() {
        this.data.type = `s4d_event_${this.data.eventName}`;
        return this.data.type;
    }
    BlockData() {
        this.dataBlock.message0 = this.data.message + "%1 %2";
        return this.dataBlock;
    }
    BlockXML() {
        return `
        <block type="${this.data.type}"/>
        `;
    }
    Register(Blockly) {
        let bld = this.BlockData();
        Blockly.Blocks[this.MakeEventName()] = {
            init: function () {
                this.jsonInit(bld);
            }
        };
        Blockly.JavaScript[this.MakeEventName()] = (block) => {
            const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
            const code = `s4d.client.on('${this.data.discordEvent}', async (${this.data.eventName}) => {\n${statements}\n});\n`;
            return code;
        };
    }
}
