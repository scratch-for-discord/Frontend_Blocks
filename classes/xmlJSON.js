var FieldType;
(function (FieldType) {
    FieldType[FieldType["Num"] = 0] = "Num";
    FieldType[FieldType["Str"] = 1] = "Str";
    FieldType[FieldType["Bool"] = 2] = "Bool";
})(FieldType || (FieldType = {}));
export class XmlJSON {
    constructor(block) {
        this.blockName = block;
        this.data = [];
    }
    AddNumberField(name, value, shadow) {
        this.data.push({
            type: name,
            value: value,
            fieldType: FieldType.Num,
            shadow: shadow,
        });
        return this;
    }
    AddStringField(name, value, shadow) {
        this.data.push({
            type: name,
            value: value,
            fieldType: FieldType.Str,
            shadow: shadow,
        });
        return this;
    }
    AddBoolField(name, value, shadow) {
        this.data.push({
            type: name,
            value: value,
            fieldType: FieldType.Bool,
            shadow: shadow,
        });
        return this;
    }
    XML() {
        let baseString1 = `<block type="${this.blockName}">`;
        let secondString1 = "</block>";
        //
        for (let i = 0; i < this.data.length; i++) {
            let field = this.data[i];
            baseString1 += `<field name="${field.type}">${field.value}</field>`;
        }
        return baseString1 + secondString1;
    }
}
