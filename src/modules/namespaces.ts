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

namespace Data {
  export namespace Personnel { // вложенное пространство имён
    export class Employee {
      constructor(public name: string) {}
    }
  }

  export namespace Clients { // вложенное пространство имён
    export class VipClient {
      constructor(public name: string) {}
    }
  }
}

import employee = Data.Personnel.Employee;

export default function() {
  // Пространства имён
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    const alice = new Personnel.Employee('Alice');
    console.log(Personnel.work(alice));

  })('Пространства имён');

  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    const tom = new Data.Personnel.Employee('Tom');
    console.log(tom.name);

    const sam = new Data.Clients.VipClient('Sam');
    console.log(sam.name);

  })('Вложенные пространства имён');

  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    const bob = new employee('Bob');
    console.log(bob.name);

  })('Псевдонимы пространств имён');
};
