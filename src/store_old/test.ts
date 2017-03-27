interface Test<T>{
    sayHi():T
}

class Person implements Test<string> {
    name: string
    age: number
    constructor(name, age) {
        this.age = age
        this.name = name
    }
    sayHi(): string {
        return '1'
    }
}