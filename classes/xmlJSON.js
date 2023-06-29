var FieldType;
(function (FieldType) {
    FieldType[FieldType["Num"] = 0] = "Num";
    FieldType[FieldType["Str"] = 1] = "Str";
    FieldType[FieldType["Bool"] = 2] = "Bool";
})(FieldType || (FieldType = {}));
export class XmlJSON {
    constructor(blockT) {
        this.data = [];
        this.blockType = blockT;
    }
    AddNumberField(name, value, shadow) {
        this.data.push({
            type: name,
            value: value,
            fieldType: FieldType.Num,
            shadow: shadow,
        });
    }
    XML() {
        let baseString1 = `<block type="${this.blockType}">`;
        let secondString1 = "</block>";
        //
        // for (let i=0; i<this.data.length; i++) {
        //    let field = this.data[i]
        //     switch (field.fieldType) {
        //         case FieldType.Num:
        //
        //             break;
        //     }
        // }
        return baseString1 + secondString1;
    }
}
