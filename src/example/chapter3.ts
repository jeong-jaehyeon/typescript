let u: undefined = undefined
// u = 1 // Assigned expression type 1 is not assignable to type undefined  오류 발생.
// number 가  undefined 의 상위 타입이기 때문에.

interface 인터페이스_이름 {
    속성_이름: number, // :속성 타입
}

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Person2 {
    constructor(public name: string, public age: number) {}
}

const jh: Person = new Person('재현', 29)
console.log(jh.name, ':name')
console.log(jh.age, ':age')

const jh2: Person2 = new Person2('재현2', 30)
console.log(jh2.name, ':name')
console.log(jh2.age, ':age')
