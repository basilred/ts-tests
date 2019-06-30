export default function() {
  // Пространства имён
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    namespace Personnel {
      export class Employee {
        constructor(public name: string) {}
      }
    }

  })('Пространства имён');
};
