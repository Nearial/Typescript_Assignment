import { Bag } from "./bag";
import { santa } from "./santa";
import { Present } from "./present";
import { bagType } from "./bagType";

export class Sled {
    santa: santa;
    bags: Bag[];

    constructor(santa: santa) {
        this.santa = santa;
        this.bags = []
    }

    addBag(bag: Bag) {
        this.bags.push(bag);
    }

    setSanta(santa: santa) {
        this.santa = santa;
    }

    addPresentAndNewBagIfNeeded (present: Present) {
        if (this.bags.length == 0) {
            let bag = new Bag(10, bagType.canvas)
            this.bags.push(bag)
        } else if (this.bags[(this.bags.length -1)].totalWeight() + present.getWeight() > this.bags[(this.bags.length -1)].maxWeight){
                let bag = new Bag(10, bagType.canvas)
                this.bags.push(bag)
                bag.addPresent(present)
            }
    }

    print() : void {
        this.bags.forEach(bag => {
            bag.print();
        })
    }

}