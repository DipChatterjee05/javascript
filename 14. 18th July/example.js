/* <---------- STATIC FUNCTION EXAMPLE IN JAVASCRIPT ----------> */
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
const jane = new Person("Jane", 25);
const john = new Person("John", 27);
const jack = new Person("Jack", 28);

function average(persons) {
    let total = 0;
    let counter = 0;
    for(person of persons) {
        counter++;
        total += person.age;
    }
    return total / counter;
}
const persons = [jane, jack, john];
console.log(average(persons)); */