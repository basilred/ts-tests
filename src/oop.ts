export default function() {
  console.log('\nОбъектно-ориентированное программирование');

  // Классы
  class User {
    id: number;
    name: string;
    getInfo(): string {
      return `id: ${this.id}, name: ${this.name}`;
    }
  }

  const tom: User = new User();
  tom.id = 1;
  tom.name = 'Tom';
  console.log(tom.getInfo());

  const alice: User = new User();
  alice.id = 2;
  alice.name = 'Alice';
  console.log(alice.getInfo());
};
