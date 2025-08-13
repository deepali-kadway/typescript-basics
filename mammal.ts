export class mammal {
    hasHair: boolean;
    isWarmBlooded: boolean;

    constructor(hasHairArg: boolean, isWarmBloodedArg: boolean) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }

    eat(): void {
        console.log("Mammal is eating.");
        return;
    }

    sleep(): void {
        console.log("Mammal is sleeping.");
        return;
    }
}