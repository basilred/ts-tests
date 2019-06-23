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
      public name: string; // То же самое, что и просто name: string;
      public year: number;
    }
  })();
};
