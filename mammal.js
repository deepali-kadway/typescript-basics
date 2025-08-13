export class mammal {
    constructor(hasHairArg, isWarmBloodedArg) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }
    eat() {
        console.log("Mammal is eating.");
        return;
    }
    sleep() {
        console.log("Mammal is sleeping.");
        return;
    }
}
