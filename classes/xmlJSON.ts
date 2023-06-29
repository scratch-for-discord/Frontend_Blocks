
enum FieldType {
    Num,
    Str,
    Bool
}


interface xmlJsonData {
    type: string,
    value: any,
    fieldType?: FieldType, //auto generated
    shadow?: boolean //defaults to false
}
export class XmlJSON {
    data: xmlJsonData[]
    blockType: string

    constructor(blockT: string) {
        this.data = []
        this.blockType = blockT
    }
    AddNumberField(name: string, value: number, shadow: boolean): void {
        this.data.push({
            type: name,
            value: value,
            fieldType: FieldType.Num,
            shadow: shadow,
        })
    }
    XML(): string {
        let baseString1 = `<block type="${this.blockType}">`
        let secondString1 = "</block>"
        //
        // for (let i=0; i<this.data.length; i++) {
        //    let field = this.data[i]
        //     switch (field.fieldType) {
        //         case FieldType.Num:
        //
        //             break;
        //     }
        // }
        return baseString1 + secondString1
    }
}