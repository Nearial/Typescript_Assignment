import { CURSOR_FLAGS } from "mongodb";
import { presentType } from "./presentType"

export class Present {
    name: string;
    weight: number;
    presentType: presentType;

    constructor(name: string, weight: number, presentType: presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }

    getPresentType() {
        return this.presentType;
    }

    getWeight() {
        return this.weight;
    }

    print() : void {
        console.log(this.name + ", " + this.weight + ", " + this.presentType)
    }
}