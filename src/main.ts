import {ModuleBImpl} from './moduleB';

let doSomethingBResult: string = new ModuleBImpl().doSomethingB();

console.log(`Started main.ts module. Invoked doSomethingB: ${doSomethingBResult}`);