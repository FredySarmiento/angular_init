const username: string = 'Fredycode';
const sum = (a:number, b: number) => {
  return a+b;
}

sum(4,8);

class Person{
  age:number;
  lastName:string;

  constructor(age:number,lastName:string){
    this.age=age;
    this.lastName=lastName;
  }
}

const fredy = new Person(15,'code')
