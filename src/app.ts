const el = this.document.getElementById('content');

class User {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }

  getFullName(): string {
    return `${this.name} ${this.age}`;
  }
}

const tom: User = new User('Tom', 25);
el.innerHTML = `Name: ${tom.name}, age: ${tom.age}`;


let x: number = 10;
let hello: string = 'Hello, world';
let isValid: boolean = true;


// Тип enum
(() => {
  enum Season { Winter, Spring, Summer, Autumn };

  let current: Season = Season.Summer;
  console.log(current);

  current = Season.Autumn; // изменение значения

  enum AnotherSeason { Winter=2, Spring, Summer=42, Autumn }; // {2: "Winter", 3: "Spring", 42: "Summer", 43: "Autumn", Winter: 2, Spring: 3, Summer: 42, Autumn: 43}

  // можно получить строковое значение по номеру
  console.log(AnotherSeason[42]); // Summer
})();
