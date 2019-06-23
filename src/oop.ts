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
};
