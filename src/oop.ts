import mixins from './mixins';

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


    // Интерфейсы классов
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


    // Наследование интерфейсов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IMovable {
        speed: number;
        move(): void;
      }

      interface ICar extends IMovable {
        fill(): void;
      }

      class Car implements ICar {
        speed: number;
        move(): void {
          console.log(`The car travels at a speed of ${this.speed} km / h.`);
        }
        fill(): void {
          console.log(`Refuel the car`);
        }
      }

      const car = new Car();
      car.speed = 60;
      car.fill();
      car.move();

    })('Наследование интерфейсов');


    // Интерфейсы функций
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface FullNameBuilder {
        (name: string, surname: string): string;
      }

      const simpleBuilder: FullNameBuilder = function(name: string, surname: string): string {
        return `${name} ${surname}`;
      }

      const fullName = simpleBuilder('Jon', 'Snow');
      console.log(fullName);

    })('Интерфейсы функций');


    // Интерфейсы массивов
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface StringArray {
        [index: number]: string;
      }

      let phones: StringArray;
      phones = ['iPhone X', 'Pixel 3XL', 'Nexus 5'];

      let myPhone: string = phones[2];
      console.log(myPhone);

      // Для индексации можно использовать и тип string
      interface Dictionary {
        [index: string]: string;
      }

      const colors: Dictionary = {};
      colors.red = '#f00';
      colors['green'] = '#0f0';
      colors.blue = '#00f';
      console.log(colors.green);

    })('Интерфейсы массивов');


    // Гибридные интерфейсы
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface PersonInfo {
        (name: string, surname: string): void;
        fullName: string;
        password: string;
        authenticate(): void;
      }

      function personBuilder(): PersonInfo {
        const person = <PersonInfo>function(name: string, surname: string): void {
          person.fullName = `${name} ${surname}`;
        };
        person.authenticate = function() {
          console.log(`${person.fullName} entering the system with ${person.password} password`);
        };

        return person;
      }

      const jon = personBuilder();
      jon('Jon', 'Snow');
      jon.password = 'iknownothing';
      jon.authenticate();

    })('Гибридные интерфейсы');

  })('Интерфейсы');


  // Преобразование типов
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    interface IUser {
      name: string;
    }

    class User {
      constructor(public name: string) {}
    }

    class Employee extends User {
      constructor(public company: string, public name: string) {
        super(name);
      }
    }

    function getUserName(user: IUser): string {
      return user.name;
    }

    function userFactory(name: string): User {
      return new Employee('No company', name);
    }

    const alice: Employee = new Employee('Microsoft', 'Alice');
    let userName = getUserName(alice);
    console.log(userName);

    const tom = userFactory('Tom');
    userName = getUserName(tom);
    console.log(userName);

    const bob: User = new Employee('Microsoft', 'Bob');
    // console.log(bob.company); // ошибка - в классе User нет свойства company

    // Нам надо явно преобразовать объект alice к типу Employee

    console.log('Явное преобразование');

    const bobEmployee: Employee = <Employee>bob; // преобразование к типу Employee
    console.log(bobEmployee.company);

    // или так
    console.log((<Employee>bob).company);

    // Преобразование с использованием оператора as
    console.log('Преобразование с использованием оператора as');

    const bobAsEmployee: Employee = bob as Employee; // преобразование к типу Employee
    console.log(bobAsEmployee.company);

    // или так
    console.log((bob as Employee).company);

    console.log(getUserName({ name: 'Tom' })); // сработает
    // console.log(getUserName({ name: "Bob", company:"Microsoft" })); // ошибка

    // но можно сделать приведение типа к интерфейсу
    console.log(getUserName({ name: 'Bob', company: 'Microsoft' } as IUser));

    // instanceOf
    const charlie: Employee = new Employee('Apple', 'Charlie');
    if (charlie instanceof User) {
      console.log(`${charlie.name} is a User`);
    } else {
      console.log(`${charlie} is not a User`);
    }

  })('Преобразование типов');


  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    function getId<T>(id: T): T {
      return id;
    }

    const result1 = getId<number>(5);
    console.log(result1);

    const result2 = getId<string>('abc');
    console.log(result2);

    // Подобным образом еще можно использовать обобщенные массивы
    function getString<T>(arg: Array<T>): string {
      let result = '';
      for (let i = 0; i < arg.length; i++) {
        if (i > 0) {
          result += ",";
        }
        result += arg[i].toString();
      }
      console.log(result);

      return result;
    }

    let result = getString<number>( [1, 2, 34, 5]);
    console.log(result);


    // Обобщенные классы и интерфейсы
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IUser<T> {
        getId(): T;
      }

      class User<T> implements IUser<T> {
        constructor(private _id: T) {}

        getId(): T {
          return this._id;
        }
      }

      let tom = new User<number>(3);
      console.log(tom.getId()); // returns number 3

      const alice = new User<string>('vsf');
      console.log(alice.getId()); // returns string 'vsf'

    })('Обобщенные классы и интерфейсы');


    // Ограничения обобщений
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      interface IUser {
        getInfo();
      }

      class User implements IUser {
        constructor(public id: number, public name: string) {}

        getInfo() {
          console.log(`id: ${this.id}, name: ${this.name}`);
        }
      }

      class Employee extends User {
        constructor(public id: number, public name: string, public company: string) {
          super(id, name);
        }

        getInfo() {
          console.log(`id: ${this.id}, name: ${this.name}, company: ${this.company}`);
        }
      }

      class UserInfo<T extends User> {
        getUserInfo(user: T): void {
          user.getInfo();
        }
      }

      const tom = new User(1, 'Tom');
      const alice = new Employee(2, 'Alice', 'Micro');
      const userStore = new UserInfo();

      // userStore.getUserInfo(tom);
      // userStore.getUserInfo(alice);
      [tom, alice].forEach(user => userStore.getUserInfo(user));

    })('Ограничения обобщений');


    // Ключевое слово new
    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      // Так работать не будет,
      // function userFactory<T>(): T {
      //   return new T();
      // }

      // Нужно указать, что обобщённый тип T имеет конструктор
      function userFactory<T>(type: { new (): T; }): T {
        return new type();
      }

      class User {
        constructor() {
          console.log('Создан объект User');
        }
      }

      const user: User = userFactory(User);

    })('Ключевое слово new');

  })('Обобщения');

  mixins();
};
