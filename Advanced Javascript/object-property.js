let students = [
    {id: 11, name: 'sunny'},
    {id: 14, name: 'snny'},
    {id: 13, name: 'sunn'},
    {id: 12, name: 'sun'}

];

for(let i = 0; i < students.length; i++){
    const names = students[i];
    const ideas = students.id;
    console.log(ideas);
}

const result = students.map( x => x.id);
// console.log(result);

const result = students.filter( x => x.id > 12);

const result = students.find( x => x.id > 12);
