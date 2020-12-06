const vipPerson = {
    firstName: 'Adam',
    lastName: 'Milne',
    salary: 2000,

    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

vipPerson.chargeBill(150);
console.log(vipPerson.salary);

const fokiraPerson = {
    firstName: 'Abul',
    lastName: 'fokir',
    salary: 5000
}

const fokiraChargeBill = vipPerson.chargeBill.bind(fokiraPerson);
fokiraChargeBill(50);
console.log(fokiraPerson.salary);