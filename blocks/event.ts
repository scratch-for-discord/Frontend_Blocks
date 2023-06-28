import {Block} from "../classes/block";

export class EventBlock extends Block{

    constructor(type: string) {
        super()
        this.type = type
    }
    print() {
        console.log(this.type)
    }
}