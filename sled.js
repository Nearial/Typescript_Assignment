"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sled = void 0;
var bag_1 = require("./bag");
var bagType_1 = require("./bagType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.santa = santa;
        this.bags = [];
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) {
        this.santa = santa;
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (present) {
        if (this.bags.length == 0) {
            var bag = new bag_1.Bag(10, bagType_1.bagType.canvas);
            this.bags.push(bag);
        }
        else if (this.bags[(this.bags.length - 1)].totalWeight() + present.getWeight() > this.bags[(this.bags.length - 1)].maxWeight) {
            var bag = new bag_1.Bag(10, bagType_1.bagType.canvas);
            this.bags.push(bag);
            bag.addPresent(present);
        }
    };
    Sled.prototype.print = function () {
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;
//# sourceMappingURL=sled.js.map