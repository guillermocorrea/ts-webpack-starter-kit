export interface IModuleA {
    doSomethingA(): void;
}

export class ModuleAImpl implements IModuleA {
    constructor() {
        console.log("ModuleAImpl constructor");
    }
    
    doSomethingA(): void {
        console.log("Do something A");
    };
}