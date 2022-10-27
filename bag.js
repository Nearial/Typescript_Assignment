"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var bagType_1 = require("./bagType");
var presentType_1 = require("./presentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        if (this.totalWeight() + present.getWeight() > this.maxWeight) {
            return false;
        }
        else {
            if (present.presentType == presentType_1.presentType.soft) {
                if (this.bagType == bagType_1.bagType.paper) {
                    return false;
                }
                else {
                    this.presents.push(present);
                    return true;
                }
            }
            else {
                this.presents.push(present);
                return true;
            }
        }
    };
    Bag.prototype.totalWeight = function () {
        var totalWeight = 0;
        this.presents.forEach(function (presentWeight) {
            var weight = presentWeight.getWeight();
            totalWeight = totalWeight + weight;
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        this.presents.forEach(function (present) {
            present.print();
        });
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type: " + this.bagType + ", and is using: " + this.totalWeight() + " of its max weight");
    };
    return Bag;
}());
exports.Bag = Bag;
//# sourceMappingURL=bag.js.map