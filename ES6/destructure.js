const student = {name: 'KBA', id: 1221, address: 'lichu bagan', phone: 0177785454 };

//old 1
console.log(student.phone);
console.log(student.phone);
console.log(student.phone);

//old 2
// const phone = student.phone;

// console.log(phone);
// console.log(phone);

//ES6

const { phone, name, fb, id } = student;

console.log(phone, name, fb, id);
console.log(phone);

const friends = ['kuch', 'buch', 'tush', 'tash'];

const [boro, choto, ...rest] = friends;

console.log(boro, choto, rest);
