export function makePerson(name: string, age: number) {
    return {name: name, age: age}
}

export function testMakePerson() {
    console.log(
        makePerson('정재현', 27),
        makePerson('아르기닌', 6000)
        )
}