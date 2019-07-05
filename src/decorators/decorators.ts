export default function() {
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    function sealed(constructor: Function) {
      console.log('sealed decorator:');
      Object.seal(constructor);
      Object.seal(constructor.prototype);
    }

    @sealed
    class User {
      constructor(public name: string) {}
      print(): void {
        console.log(this.name);
      }
    }

    // будет ошибка, таким образом расширить объект уже нельзя
    try {
      Object.defineProperty(User, 'age', {
        value: 17
      });
    } catch {
      console.log('Свойство age нельзя добавить, так как объект стал нерасширяемым');
    }


    function logger<TFunction extends Function>(target: TFunction): TFunction {
      const newConstructor: Function = function(name: string) {
        console.log('Creating new instance');
        this.name = name;
        this.age = 23;
        this.print = function(): void {
          console.log(this.name, this.age);
        };
      };

      return <TFunction>newConstructor;
    }

    @logger
    class LoggerUser {
      constructor(public name: string) {}
      print(): void {
        console.log(this.name);
      }
    }

    const tom = new LoggerUser('Tom');
    tom.print();


    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      function readonly(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = false;
      }

      class User {
        constructor(public name: string) {}

        @readonly
        print(): void {
          console.log(this.name);
        }
      }

      const dean = new User('Dean');

      try {
        dean.print = function() { console.log('Print function has been changed') };
      } catch(e) {
        console.log(e.message);
      }

      dean.print();

    })('Декораторы методов и их параметров');


    ((sectionName: string) => {
      console.log(`\n${sectionName}`);
      function log(target: Object, method: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args) {
          console.log(JSON.stringify(args));
          const returnValue = originalMethod.apply(this, args);
          console.log(`${JSON.stringify(args)} => ${returnValue}`);

          return returnValue;
        }
      }

      class Calculator {
        @log
        add(x: number, y: number): number {
          return x + y;
        }
      }

      const calc = new Calculator();
      calc.add(2, 3);
      calc.add(6, 7);

    })('Параметры и выходной результат метода');

  })('Декораторы');
}
