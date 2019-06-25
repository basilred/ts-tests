export default function() {
  console.log('\nОбъектно-ориентированное программирование');

  // Классы
  class User {
    id: number;
    name: string;

    constructor(userId: number, userName: string) {
      this.id = userId;
      this.name = userName;
    }

    getInfo(): string {
      return `id: ${this.id}, name: ${this.name}`;
    }
  }

  const tom: User = new User(1, 'Tom');
  console.log(tom.getInfo());
  tom.id = 4;

  const alice: User = new User(2, 'Alice');
  console.log(alice.getInfo());

  // Статические свойства функции
  class Operation {
    static PI = 3.14;
    static getSquare(radius: number): number {
      return Operation.PI * (radius ** 2);
    }
  }

  const r = 30;
  const result = Operation.getSquare(r);
  console.log(`Площадь круга с радиусом ${r} равна ${result}`);
  console.log(Operation.PI * r ** 2);


  // Модификаторы доступа
  (() => {
    class User {
      private _name: string;
      private _year: number;

      constructor(name: string, age: number) {
        this._name = name;
        this._year = this.setYear(age);
      }

      public displayYear(): void {
        console.log(`Год рождения: ${this._year}`);
      }

      public displayName(): void {
        console.log(`Имя: ${this._name}`);
      }

      private setYear(age: number): number {
        return new Date().getFullYear() - age;
      }
    }

    const tom = new User('Tom', 38);
    tom.displayName();
    tom.displayYear();
  })();


  // Модификатор protected
  (() => {
    class User {
      private name: string;
      protected age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      public displayInfo(): void {
        console.log(`name: ${this.name}; age: ${this.age}`);
      }
    }

    class Employee extends User {
      private company: string;

      constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
      }

      public showData(): void {
        console.log(`Age: ${this.age}`);
        // console.log(`Name: ${this.name}`); // не работает, так как name - private
      }
    }
  })();


  // Определение свойств через конструктор
  (() => {
    class User {
      private _name: string;
      private _age: number;

      constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
      }

      public getInfo() {
        console.log(`name: ${this._name}; age: ${this._age}`);
      }
    }
    // Аналогичен такому
    class User2 {
      constructor(private name: string, private age: number) {}

      public getInfo() {
        console.log(`name: ${this.name}; age: ${this.age}`);
      }
    }
    // И с публичными свойствами тоже
    class User3 {
      constructor(public name: string, public age: number) {}
    }
  })();


  // Методы доступа
  (() => {
    class User {
      private _name: string;

      public get name() {
        return this._name;
      }

      public set name(newName: string) {
        this._name = newName;
      }
    };

    const tom = new User();
    tom.name = 'Tom'; // срабатывает set-метод
    console.log(tom.name); // сработает get-метод

    // Свойства только для чтения
    class User2 {
      constructor(readonly id: number, public name: string) {}
    }

    const alice: User2 = new User2(1, 'Alice');
    console.log(alice.id, alice.name);
    // alice.id = 34;  // Ошибка - так как id - только для чтения
  })();


  // Наследование. Абстрактные классы
  (() => {
    class User {
      name: string;
      constructor(userName: string) {
        this.name = userName;
      }

      getInfo(): void {
        console.log(`Name: ${this.name}`);
      }
    }

    class Employee extends User {
      company: string;

      constructor(userName: string, empCompany: string) {
        super(userName);
        this.company = empCompany;
      }

      work(): void {
        console.log(`${this.name} works at the ${this.company} company`);
      }
    }

    const bill: Employee = new Employee('Bill', 'Microsoft');
    bill.work();

    // Вызов super() необходимо делать, даже если у базового класса
    // отсутствует конструктор
    (() => {
      class User {
        name: string;
      }

      class Employee extends User {
        company: string;
        constructor(empCompany: string) {
          super();    // вызов конструктора базового класса
          this.company = empCompany;
        }
      }
    })();

    // Переопределение методов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      class User {
        name: string;
        constructor(userName: string) {
          this.name = userName;
        }

        getInfo(): void {
          console.log(`Name: ${this.name}`);
        }
      }

      class Employee extends User {
        company: string;

        constructor(userName: string, empCompany: string) {
          super(userName);
          this.company = empCompany;
        }

        getInfo(): void {
          super.getInfo();
          console.log(`Works at the ${this.company} company`);
        }
      }

      const bill: Employee = new Employee('Bill', 'Microsoft');
      bill.getInfo();
    })('Переопределение методов');


    // Абстрактные классы
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      abstract class Figure {
        abstract getArea(): void;
      }

      class Rectangle extends Figure {
        constructor(public width: number, public height: number) {
          super();
        }

        getArea(): number {
          return this.width * this.height;
        }
      }

      const rect = new Rectangle(2, 3);
      console.log(`Square: ${rect.getArea()}`);
    })('Абстрактные классы');
  })();


  // Интерфейсы
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    // Интерфейсы объектов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IUser {
        id: number;
        name: string;
        age?: number;
      }

      const tom: IUser = {
        id: 1,
        name: 'Tom',
        age: 23,
      };

      function getEmployeeInfo(user: IUser) {
        console.log(user);
      }

      function buildUser(userId: number, userName: string): IUser {
        return {
          id: userId,
          name: userName,
        };
      }

      getEmployeeInfo(tom);

      const alice = buildUser(2, 'Alice');
      getEmployeeInfo(alice);

      interface Point {
        readonly x: number;
        readonly y: number;
      }

      const p: Point = { x: 20, y: 30 };
      console.log(p);
      // p.x = 5; // Ошибка - свойство доступно только для чтения

    })('Интерфейсы объектов');


    // Определение методов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IUser {
        id: number;
        name: string;
        getFullName(surname: string): string;
      }

      const employee: IUser = {
        id: 1,
        name: 'Alice',
        getFullName(surname: string): string {
          return `${this.name} ${surname}`;
        }
      };

      const fullName = employee.getFullName('Thompson');
      console.log(fullName);
    })('Определение методов');


    // Определение методов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IUser {
        id: number;
        name: string;
        getFullName(surname: string): string;
      }

      class User implements IUser {
        id: number;
        name: string;
        age: number;

        constructor(userId: number, userName: string, userAge: number) {
          this.id = userId;
          this.name = userName;
          this.age = userAge;
        }

        getFullName(surname: string): string {
          return `${this.name} ${surname}`;
        };
      }

      const tom = new User(1, 'Tom', 23);
      console.log(tom.getFullName('Jefferson'));

    })('Интерфейсы классов');

  })('Интерфейсы');
};
