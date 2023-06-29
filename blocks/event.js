export { EventBlock };
class EventBlock {
    constructor(data) {
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
        this.EventNameBlock = {
            "message0": "",
            "colour": "#a55b80",
            "output": "",
            "tooltip": "",
            "helpUrl": ""
        };
        this.EventNameBlockType = "";
        this.data = data;
        this.EventNameBlock.message0 = data.messageEventNameBlock;
        this.EventNameBlock.output = data.eventName;
        this.MakeEventName();
    }
    MakeEventName() {
        this.data.type = `s4d_event_${this.data.eventName}`;
        this.EventNameBlockType = `${this.data.type}_block`;
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
    EventBlockXML() {
        return `
        <block type="${this.EventNameBlockType}"/>
        `;
    }
    Register(Blockly) {
        let bld = this.BlockData();
        let bld1 = this.EventNameBlock;
        let t = this.data.type;
        Blockly.Blocks[t] = {
            init: function () {
                this.jsonInit(bld);
            }
        };
        Blockly.JavaScript[this.data.type] = (block) => {
            const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
            const code = `s4d.client.on('${this.data.discordEvent}', async (${this.data.eventName}) => {\n${statements}\n});\n`;
            return code;
        };
        Blockly.Blocks[this.EventNameBlockType] = {
            init: function () {
                this.jsonInit(bld1);
            }
        };
        Blockly.JavaScript[this.EventNameBlockType] = () => {
            // const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
            const code = this.data.eventName;
            return [code, Blockly.JavaScript.ORDER_NONE];
        };
    }
}
