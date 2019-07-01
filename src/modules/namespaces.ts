namespace Personnel {
  export interface IUser {
    displayInfo();
  }

  export class Employee {
    constructor(public name: string) {}
  }

  export function work(emp: Employee): void {
    console.log(`${emp.name} is working`);
  }

  export const defaultUser = { name: 'Kate' };
}

export default function() {
  // Пространства имён
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    const alice = new Personnel.Employee('Alice');
    console.log(Personnel.work(alice));

  })('Пространства имён');
};
