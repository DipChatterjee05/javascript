function Employee(name, yearOfJoin, location) {
    let salary;
    this.name = name;
    this.yearOfJoin = yearOfJoin;
    this.location = location;
    this.getEmployeeDetails = function () {
        return `Name: ${this.name} YearOfJoin: ${this.yearOfJoin} Location: ${this.location}`;
    }
    this.setSalary = (newSalary) => {
        salary = newSalary;
    }
    this.getSalary = () => {
        return salary;
    }
}
