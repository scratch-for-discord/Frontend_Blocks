import {Block} from "../classes/block";

export {
    EventBlock,
    EventBl
};


interface EventBl {
    discordEvent: string,//discord js event name for example onMessageCreate is a valid name
    message: string,
    eventName: string, //for example you get message event then this will be message type
    type?: string, //this is auto generated from eventName s4d_event_{eventName}
}
class EventBlock extends Block {
    data: EventBl
    dataBlock = {
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

    } // auto generated data, use BlockData method instead
    constructor(data: EventBl) {
        super()
        this.data = data;
        this.MakeEventName()
    }
     MakeEventName() {
        this.data.type = `s4d_event_${this.data.eventName}`
        return this.data.type
    }
    BlockData() {
        this.dataBlock.message0 = this.data.message + "%1 %2"
        return this.dataBlock
    }
    BlockXML() {
        return `
        <block type="${this.data.type}"/>
        `
    }

    Register(Blockly: any) {
        let bld =  this.BlockData()
        Blockly.Blocks[this.MakeEventName()] = {
            init: function() {
                this.jsonInit(bld);
            }
        };

        Blockly.JavaScript[this.MakeEventName()] = (block: any) =>  {
            const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
            const code = `s4d.client.on('${this.data.discordEvent}', async (${this.data.eventName}) => {\n${statements}\n});\n`;
            return code;
        };
    }

}