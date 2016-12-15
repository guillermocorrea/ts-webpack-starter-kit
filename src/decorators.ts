function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`f(): called, target: ${target}, propertyKey: ${propertyKey}, descriptor: ${descriptor}`);
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`g(): called, target: ${target}, propertyKey: ${propertyKey}, descriptor: ${descriptor}`);
    }
}

function log(constructor: Function) {
    console.log(`log(): called, constructor: ${constructor}`);
}

@log
export class C {
    @f()
    @g()
    method() {}
}