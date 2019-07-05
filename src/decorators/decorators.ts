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


    ((sectionName: string) => {
      console.log(`\n${sectionName}`);

      function logParameter(target: any, key: string, index: number) {
        const metadataKey = `__log_${key}_parameters`;

        if (Array.isArray(target[metadataKey])) {
          target[metadataKey].push(index);
        } else {
          target[metadataKey] = [index];
        }
      }

      function logMethod(target, key, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
          const metadataKey = `__log_${key}_parameters`;
          const indices = target[metadataKey];

          if (Array.isArray(indices)) {
            for (let i = 0; i < args.length; i += 1) {
              if (indices.indexOf(i) !== -1) {
                const arg = args[i];
                const argStr = JSON.stringify(arg) || arg.toString();
                console.log(`${key} arg[${i}]: ${argStr}`);
              }
            }
            const result = originalMethod.apply(this, args);

            return result;
          }
          else {
            const a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            const result = originalMethod.apply(this, args);
            const r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);

            return result;
          }
        }
        return descriptor;
      }

      class User {
        private name: string;
        constructor(name: string) {
          this.name = name;
        }

        @logMethod
        setName(@logParameter name: string) {
          this.name = name;
        }

        print():void {
          console.log(this.name);
        }
      }

      const tom = new User("Tom");
      tom.setName("Bob");
      tom.setName("Sam");

    })('Декораторы параметров методов');

  })('Декораторы');
}
