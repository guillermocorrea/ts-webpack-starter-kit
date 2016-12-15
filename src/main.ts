import { ModuleBImpl } from './moduleB';
import { C } from './decorators';

// const decorator = new TestPropertyDecorator();
// decorator.name = "a";
// console.log(decorator.name);

const t = new C();
t.method();

let doSomethingBResult: string = new ModuleBImpl().doSomethingB();

console.log(`Started main.ts module. Invoked doSomethingB: ${doSomethingBResult}`);