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
};
