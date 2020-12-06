class customer{
    constructor(cPaan, cCha){
        this.paan = cPaan
        this.cha = cCha;
    }
}

const customer1 = new customer('jorda', 'rong');
const customer2 = new customer('supari', 'dudh');

console.log(customer1, customer2);