import { Bag } from "./bag";
import { bagType } from "./bagType";
import { Present } from "./present";
import { presentType } from "./presentType";
import { santa } from "./santa";
import { Sled } from "./sled";

let santa1 = new santa("Sven", 545);
let sled1 = new Sled(santa1);
let bag1 = new Bag(10, bagType.canvas);
let present1 = new Present("Gave1", 8, presentType.hard);
let present2 = new Present("Gave2", 3, presentType.soft);

bag1.addPresent(present1);
bag1.addPresent(present2);

sled1.addBag(bag1);

sled1.addPresentAndNewBagIfNeeded(present2)
sled1.print()