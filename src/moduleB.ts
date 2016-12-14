import {ModuleAImpl} from './moduleA';

export interface IModuleB {
    doSomethingB(): string;
}

export class ModuleBImpl extends ModuleAImpl implements IModuleB {
    constructor() {
        super();
        console.log("ModuleBImpl constructor");
    }
    
    doSomethingB(): string {
        super.doSomethingA();
        return "Do something B";
    };
}